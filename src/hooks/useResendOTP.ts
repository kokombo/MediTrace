import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export const useResendOTP = () => {
  const resendOTPRequest = async (email: string) => {
    const res = await axios.post(
      "https://meditrace.onrender.com/api/v1/auth/resend_otp",
      email
    );
    return res.data;
  };

  const { mutateAsync, isError, isPending, isSuccess, error } = useMutation<
    String,
    AxiosError<string>,
    string
  >({
    mutationKey: ["resendOTP"],
    mutationFn: resendOTPRequest,
  });

  const sendOTP = async (email: string) => {
    await mutateAsync(email);
  };

  return { sendOTP, isError, isPending, isSuccess, error };
};
