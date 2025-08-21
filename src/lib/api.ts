const API_URL = import.meta.env.VITE_BACKEND_URL;

// Function to fetch a user token from backend
export async function getUserToken(userId: string) {
  try {
    const res = await fetch(`${API_URL}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch token: ${res.statusText}`);
    }

    return await res.json();  // { token: "...", userId: "..." }
  } catch (err) {
    console.error("Error fetching token:", err);
    throw err;
  }
}
