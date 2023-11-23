import { Pressable, StyleSheet, Text } from "react-native";
import { SIZE } from "../../constants";
import { resendOTP } from "../redux/slices/verify-email-slice";
import { useDispatch } from "react-redux";
import { DispatchType } from "../redux/store";

const ResendOTP = ({ label, email }: { label: string; email: string }) => {
  const dispatch: DispatchType = useDispatch();

  const resendOTPToUser = () => {
    dispatch(resendOTP({ email }));
  };

  return (
    <Pressable onPress={resendOTPToUser}>
      <Text style={{ fontSize: SIZE.base, fontWeight: "600" }}>{label} </Text>
    </Pressable>
  );
};

export default ResendOTP;

const styles = StyleSheet.create({});
