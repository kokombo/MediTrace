import { Pressable, StyleSheet, Text, View } from "react-native";
import { Medication } from "../../type";
import { SIZE } from "../../constants";
import { scheduleNotification } from "../utilities";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";

const MedicationCard = ({
  item,
  borderColor,
  miniCardBackgroundColor,
}: {
  item: Medication;
  borderColor: string;
  miniCardBackgroundColor: string;
}) => {
  const { user } = useSelector((state: StateType) => state.user);

  const title = `Hey ${
    user?.first_name
  }, it's time to use ${item.name.toUpperCase()}!`;
  const body =
    "We hope you get well soon, but for now, please don't miss your medication. GO USE IT NOW!";
  const triggerTime = 10;
  const sound = "../../assets/sounds/notification-sound1.mp3";

  useEffect(() => {
    const handleScheduleNotification = async () => {
      await scheduleNotification(title, body, triggerTime, sound);
    };

    handleScheduleNotification();
  }, []);

  return (
    <Pressable
      style={{
        borderColor: borderColor,
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
            backgroundColor: borderColor,
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
          backgroundColor: miniCardBackgroundColor,
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
