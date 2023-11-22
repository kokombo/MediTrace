import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { SelectType } from "../../type";
import { COLORS, SIZE } from "../../constants";

const Select = ({ data, width }: { data: SelectType[]; width: number }) => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <Picker
      selectedValue={selectedOption}
      onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
      style={{ width: width, backgroundColor: COLORS.cloud, borderRadius: 15 }}
      itemStyle={{
        color: COLORS.picker,
        fontSize: SIZE.base,
        height: 50,
        padding: 15,
        backgroundColor: COLORS.cloud,
      }}
      dropdownIconColor={COLORS.picker}
    >
      {data?.map((item, index) => {
        return (
          <Picker.Item
            key={index}
            label={item.label}
            value={item.value}
            style={{
              color: COLORS.picker,
              fontSize: SIZE.sm,
            }}
          />
        );
      })}
    </Picker>
  );
};

export default Select;

const styles = StyleSheet.create({});
