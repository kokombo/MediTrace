import { StyleSheet, TextInput, View } from "react-native";
import { COLORS, SIZE } from "../../constants";

const SearchFrame = ({ value, onChangeText }: Search) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.placeholder}
      />
    </View>
  );
};

export default SearchFrame;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.searchborder,
    height: 50,
    color: COLORS.black,
    justifyContent: "center",
    fontSize: SIZE.base,
    fontWeight: "400",
  },
});
