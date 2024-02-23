import React, { ReactNode, useEffect, useState } from "react";
import { getCurrentUser } from "../../../utils/user-me/userme";
import { access } from "fs";
import { accessToken } from "../../../utils/token/token";

export default function SignedOut({ children }: { children: ReactNode }) {
  const [isSignedOut, setIsSignedOut] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await getCurrentUser(accessToken);
        setIsSignedOut(false); // Token is valid
      } catch (error) {
        setIsSignedOut(true); // Token is invalid or expired
      }
    };

    checkAuthentication();
  }, []);

  return isSignedOut ? <>{children}</> : null;
}
