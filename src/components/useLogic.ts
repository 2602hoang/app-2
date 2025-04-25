import { useToken } from "@/hooks/useToken";
import { useUserStore } from "@/stores/user/userStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useLogicProfile = () => {
  const { accessToken } = useToken();
  const { setUser, user } = useUserStore();

  // const isOver10Minutes = useMemo(() => {
  //   if (!timeInit) return false;
  //   const initTime = new Date(timeInit).getTime();
  //   const now = new Date().getTime();
  //   const diffMinutes = (now - initTime) / (1000 * 60);
  //   return diffMinutes >= 1;
  // }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["user", accessToken],
    queryFn: async () => {
      const response = await axios.get(
        "https://p2p-gateway-sandbox.up.railway.app/api/v1/users/profile",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setUser(response.data);
      }
      return response.data;
    },
    enabled: !!accessToken,
    // && !user,
  });
  return {
    data,
    isLoading,
    user,
  };
};
