import { Text } from "react-native";
import { useEffect } from "react";
import { clearErrorMessage } from "../redux/slices/user";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";
import { useHaptic } from "../hooks";

const AuthError = ({ message }: { message: string | null }) => {
  const dispatch: DispatchType = useDispatch();

  const { triggerVibration } = useHaptic();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearErrorMessage(message));
    }, 7000);

    return () => clearTimeout(timer);
  }, [message]);

  return <Text style={{ color: "red" }}>{message}</Text>;
};

export default AuthError;
