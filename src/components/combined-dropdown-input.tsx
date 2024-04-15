import { StyleSheet, Text, View } from "react-native";

const CombinedDropdownInput = ({
  data1,
  data2,
  width,
  label,
}: {
  data1: SelectType[];
  data2: SelectType[];
  width: number;
  label: string;
}) => {
  return (
    <View style={{ flex: 1, alignItems: "flex-start", gap: 16 }}>
      <View>
        <Text>{label} </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: -10,
        }}
      >
        {/* <Select data={data1} width={width} />

        <Select data={data2} width={width} /> */}
      </View>
    </View>
  );
};

export default CombinedDropdownInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    // backgroundColor: COLORS.cloud,
    borderRadius: 15,
    padding: 15,
    position: "absolute",
    zIndex: -1,
    left: 75,
  },
});
