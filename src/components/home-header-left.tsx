import { StyleSheet, View } from "react-native";
import UserProfilePicture from "./user-profile-picture";
import UserWelcomeGreeting from "./user-welcome-greeting";

const HomeHeaderLeft = () => {
  return (
    <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
      <UserProfilePicture />

      <UserWelcomeGreeting />
    </View>
  );
};

export default HomeHeaderLeft;

const styles = StyleSheet.create({});
