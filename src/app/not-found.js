import Link from "next/link";
import Button from "@/components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#5e2e53] p-[28px]">
      <div className="px-4 py-8 text-center bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Not Found</h2>
        <p className="mt-4 text-gray-600 pb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/aktiviteter">
          <Button title="gå tilbage til aktiviteter" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;