import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SelectType } from "../../type";
import { COLORS, SIZE } from "../../constants";
import { DimensionValue } from "react-native";

const Select = ({
  data,
  width,
  selectedOption,
  setSelectedOption,
}: {
  data: SelectType[];
  width: DimensionValue;
  selectedOption: number;
  setSelectedOption: (itemValue: number) => void;
}) => {
  return (
    <Picker
      selectedValue={selectedOption}
      onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
      style={{ width: width, borderRadius: 15 }}
      itemStyle={{
        color: COLORS.black,
        fontSize: SIZE.base,
        height: 50,
        padding: 15,
      }}
      dropdownIconColor={COLORS.black}
    >
      {data?.map((item, index) => {
        return (
          <Picker.Item
            key={index}
            label={item.label}
            value={item.value}
            style={{
              color: COLORS.black,
              fontSize: SIZE.base,
            }}
          />
        );
      })}
    </Picker>
  );
};

export default Select;

const styles = StyleSheet.create({});
