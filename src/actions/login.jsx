




// "use server";

// import { cookies } from "next/headers";
// import { z } from "zod";
// import { redirect } from "next/navigation"; // Import redirect function

// export default async function Login(prevState, formData) {
//   const identifier = formData.get("identifier");
//   const password = formData.get("password");

//   // Validate input
//   const schema = z.object({
//     identifier: z.string().min(1, { message: "Du skal udfylde et brugernavn" }),
//     password: z.string().min(1, { message: "Du skal udfylde et password" }),
//   });

//   const validate = schema.safeParse({ identifier, password });
//   if (!validate.success) {
//     return {
//       formData: { identifier, password },
//       errors: validate.error.format(),
//       success: false,
//     };
//   }

//   try {
//     console.log("🚀 Sending request to API...");
//     const response = await fetch("http://localhost:4000/auth/token", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username: identifier, password }),
//     });

//     console.log("📩 Response received");
//     const data = await response.json();
//     console.log("🔥 Full API Response:", data);

//     if (!response.ok || !data.userId || !data.token) {
//       console.error("❌ API Response Error:", data);
//       return {
//         formData: { identifier, password },
//         error: "Forkert brugernavn eller password",
//         success: false,
//       };
//     }

//     console.log("🍪 Storing cookies...");
//     const cookieStore = cookies(); // Do NOT await this
//     cookieStore.set("repe_token", data.token, { maxAge: 60 * 60 * 24 });
//     cookieStore.set("repe_uid", data.userId, { maxAge: 60 * 60 * 24 });

//     console.log("✅ Login successful");

//     // 🔄 Redirect after login
//     redirect("/kalender");

//   } catch (error) {
//     console.error("⚠️ Login Error:", error);
//     return { error: "Serverfejl, prøv igen senere", success: false };
//   }
// }
