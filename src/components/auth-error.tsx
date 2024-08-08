import { Text } from "react-native";
import { useEffect, useState } from "react";
import { SIZE } from "../../constants";

const AuthError = ({ message }: { message: string | undefined }) => {
  const [errorMessage, setErrorMessage] = useState(message);

  useEffect(() => {
    const timer = setTimeout(() => setErrorMessage(""), 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Text style={{ color: "red", fontSize: SIZE.base }}>{errorMessage}</Text>
  );
};

export default AuthError;
