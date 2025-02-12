"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isLogout, setIsLogout] = useState(null);
  const [userUpdated, setUserUpdated] = useState(null);
  const router = useRouter();

  useEffect(() => {

    if (userUpdated) {
      const fetchUser = async () => {
        await getUser();
      };
      fetchUser();
      setUserUpdated(false);
    }
  }, [currentUser, token, userUpdated]);

  async function login(username, password) {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const authData = await response.json();

      const token = {
        userId: authData.userId,
        token: authData.token,
        validUntil: authData.validUntil,
      };
      setToken(token);

      const response2 = await fetch(
        `http://localhost:4000/api/v1/users/${token.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response2.ok) {
        throw new Error("Get User failed");
      }

      const userData = await response2.json();

      setCurrentUser(userData);
      setIsLogout(false);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    setIsLogout(true);
  }

  async function getUser() {
    const response = await fetch(
      `http://localhost:4000/api/v1/users/${token.userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Get User failed");
    }

    const userData = await response.json();

    setCurrentUser(userData);
  }

  useEffect(() => {
    setLoading(false);

    if (isLogout) {
      if (currentUser == null && token == null) {
        router.push("/aktiviteter");
        setIsLogout(false);
      }
    } else if (currentUser) {
      router.push("/kalender");
    }
  }, [currentUser, token, isLogout]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        token,
        setToken,
        login,
        logout,
        loading,
        setUserUpdated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
