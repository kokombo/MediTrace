import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { COLORS, SIZE, icon } from "../../constants";

const DormantSearchFrame = () => {
  return (
    <Pressable onPress={() => {}}>
      <View style={styles.input}>
        <Text style={styles.label}>Search</Text>
      </View>

      <View style={styles.search_icon_wrapper}>
        <Image source={icon.search} style={styles.icon} />
      </View>
    </Pressable>
  );
};

export default DormantSearchFrame;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.searchborder,
    height: 50,
    justifyContent: "center",
  },

  icon: {
    width: 12,
    height: 12,
  },

  search_icon_wrapper: {
    position: "absolute",
    left: 65,
    top: 20,
  },

  label: {
    fontSize: SIZE.sm,
    color: COLORS.placeholder,
    fontWeight: "500",
  },
});
