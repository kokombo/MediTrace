import { Pressable, StyleSheet, Text, View } from "react-native";
import { Medication } from "../../type";
import { SIZE } from "../../constants";
import { scheduleNotification } from "../utilities";
import { useEffect } from "react";

const MedicationCard = ({ item }: { item: Medication }) => {
  const title = item.name;
  const body = item.treatment;
  const triggerTime = 20;

  useEffect(() => {
    const handleScheduleNotification = async () => {
      await scheduleNotification(title, body, triggerTime);
    };

    handleScheduleNotification();
  }, []);

  return (
    <Pressable
      style={{
        borderColor: item.color,
        borderWidth: 2,
        height: 125,
        borderRadius: 10,
        paddingVertical: 18,
        paddingHorizontal: 24,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <View
          style={{
            width: 2,
            height: 38,
            backgroundColor: item.color,
          }}
        />

        <View style={{ gap: 2 }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: SIZE.base,
              textTransform: "capitalize",
            }}
          >
            {item.treatment}
          </Text>

          <Text
            style={{
              fontWeight: "400",
              fontSize: SIZE.sm,
            }}
          >
            {item.name}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: item.color,
          borderRadius: 24,
          paddingVertical: 8,
          paddingHorizontal: 16,
          width: 158,
        }}
      >
        <Text style={{ fontSize: SIZE.xsm, fontWeight: "400" }}>
          Second Dose by 2pm
        </Text>
      </View>
    </Pressable>
  );
};

export default MedicationCard;

const styles = StyleSheet.create({});
