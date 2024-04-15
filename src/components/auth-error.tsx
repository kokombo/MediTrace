import { Text } from "react-native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";
import { SIZE } from "../../constants";

const AuthError = ({ message }: { message: string | undefined }) => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 7000);

    return () => clearTimeout(timer);
  }, [message]);

  return <Text style={{ color: "red", fontSize: SIZE.base }}>{message}</Text>;
};

export default AuthError;
