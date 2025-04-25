/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useToken } from '@/hooks/useToken';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Order =  () => {
      const { accessToken, addToken } = useToken();

    const { data: orders } = useQuery<any, Error>({
      queryKey: ['order', accessToken],
      queryFn: async () => {
            try {
              const res = await await axios.get(
            "https://p2p-gateway-sandbox.up.railway.app/api/v1/escrows",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
              );
              if (accessToken) {
                addToken(accessToken);
              }
          return res.data.data;
        } catch (error) {
          console.error('Error fetching order:', error);
          throw error;
          
        }
      },
      enabled: !!accessToken,
      // cacheTime is not a valid property for useQuery options
      // Removed the line to fix the error
  });
  
  
  return (
    <div className='flex flex-col  w-full overflow-x-hidden'>
      {/* {loading && <p>Loading...</p>} */}

      {/* {!loading && orders && ( */}
        <div>
          <h1>order</h1>
          <pre>{JSON.stringify(orders, null, 2)}</pre>
        </div>
      {/* )} */}
      {/* <button type='button' onClick={() => handleLogout( )} className='bg-blue-500 text-white p-2 rounded-md cursor-pointer'>Log out</button> */}
      {/* {tokens.length > 0 && (
        <div>
          <h1>Tokens</h1>
          <ul>
            {tokens.map((token, index) => (
              <li className=' line-clamp-1' key={index}>{index + 1}:{token}
              <hr/>
              </li>
            ))}
          </ul>
        </div>
      )} */}
      
    </div>  
  )
}

export default Order
