import React, { ReactNode, useEffect, useState } from "react";
import { getCurrentUser } from "../../../utils/user-me/userme";
import { accessToken } from "../../../utils/token/token";

export default function SignedIn({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await getCurrentUser(accessToken);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  return isLoggedIn ? <>{children}</> : null;
}
