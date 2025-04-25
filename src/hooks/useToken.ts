/* eslint-disable  @typescript-eslint/no-unused-expressions*/
import { REFRESH_TOKEN_STATUS } from "@/app/api/[...nextauth]/type";
import { AccessToken } from "@/provider/type";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useToken = () => {
  const [accessToken, setAccessToken] = useState<AccessToken>(undefined);
  const [tokens, setTokens] = useState<string[]>([]);
  const { data: session, update, status } = useSession();

  useEffect(() => {
    if (
      status === "unauthenticated" ||
      session?.error === REFRESH_TOKEN_STATUS.FAILED
    ) {
      // signIn("keycloak");
      console.log("🚀 ~ useToken ~ status:", status);

      return;
    }
    if (status === "authenticated" && session?.accessToken) {
      setAccessToken(session.accessToken);
    }
  }, [status, session?.accessToken, session?.error]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined = undefined;
    !!timeout && clearTimeout(timeout);
    const expiredTime = +(session?.expires ?? 0);
    const currentTime = Date.now();
    const timeDiff = Math.max(expiredTime - currentTime, 0);
    timeout = setTimeout(() => {
      update();
    }, timeDiff);
    return () => clearTimeout(timeout);
  }, [session?.expires, update]);
  const addToken = (newToken: string) => {
    setTokens((prev) => [...prev, newToken]);
  };
  return {
    accessToken,
    session,
    status,
    update,
    signIn,
    addToken,
    tokens,
  };
};
