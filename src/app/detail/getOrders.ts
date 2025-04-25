// import { useToken } from "@/hooks/useToken";

// export async function getOrders() {
//   const { accessToken, addToken } = useToken();
//   try {
//     const res = await fetch(
//       "https://p2p-gateway-sandbox.up.railway.app/api/v1/escrows",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//         next: {
//           revalidate: 300,
//         },
//       }
//     );

//     if (!res.ok) throw new Error("Failed to fetch orders");
//     const data = await res.json();
//     if (accessToken) {
//       addToken(accessToken);
//     }
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     throw error;
//   }
// }
