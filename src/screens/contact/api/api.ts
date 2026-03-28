import ENV from "@/lib/env";

const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
const Base_Url = isLocalhost
  ? "http://localhost:5000"
  : "https://shams.render.app";

interface sendEmailType {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export const sendEmail = async (payload: sendEmailType) => {
  const response = await fetch(`${Base_Url}/api/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message ?? `HTTP error! status: ${response.status}`,
    );
  }
  return response.json();
};