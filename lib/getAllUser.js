export default async function getAllUser() {
  try {
    const res = await fetch(
      " https://property-hunter-server-roan.vercel.app/api/v1/users"
    );
    return res.json();
  } catch (error) {
    console.error("Something went wrong for fetching card:", error.message);
    throw new Error("Something went wrong");
  }
}
