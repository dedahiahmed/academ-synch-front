import { subabaseClient } from "@/utils/supabase/client";
export const getPublicUrlForAvisUrl = (
  buketName: string,
  fileName: string
): string => {
  const { data } = subabaseClient.storage
    .from(buketName)
    .getPublicUrl(fileName);
  return data.publicUrl;
};
