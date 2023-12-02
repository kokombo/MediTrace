import { Image, Pressable, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { COLORS, SIZE, icon } from "../../constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimePicker = ({ timeSlots }: { timeSlots: string[] }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time: Date) => {
    hideDatePicker();
    setSelectedTime(time);
    timeSlots.push(
      time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <Pressable
      onPress={showDatePicker}
      style={{
        height: 50,
        width: 255,
        borderRadius: 10,
        backgroundColor: COLORS.cloud,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        gap: 36,
      }}
    >
      <Image
        source={icon.alarm}
        resizeMode="contain"
        style={{ width: 16, height: 18 }}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        locale="en_GB"
        is24Hour={false}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={true}
      />

      <Text style={styles.text}>
        {selectedTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </Pressable>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  text: {
    fontSize: SIZE.base,
    color: COLORS.black,
  },
});
