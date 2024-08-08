import axios, { type AxiosError } from "axios";
import { useSelector } from "react-redux";
import type { StateType } from "../redux/store";
import { useMutation } from "@tanstack/react-query";

export const useUploadProfilePicture = () => {
  const { user } = useSelector((state: StateType) => state.user);

  const uploadProfilePictureRequest = async (formData: FormData) => {
    const res = await axios.patch(
      "https://meditrace.onrender.com/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    );

    return res.data;
  };

  const { mutateAsync, data, isError, error, isPending, isSuccess } =
    useMutation<string, AxiosError<string>, FormData>({
      mutationKey: ["uploadProfilePicture"],
      mutationFn: uploadProfilePictureRequest,
    });

  const uploadProfilePicture = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    await mutateAsync(formData);
  };

  return { uploadProfilePicture, isError, data, isPending, error, isSuccess };
};
