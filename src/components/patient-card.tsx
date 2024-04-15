import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SIZE, icon } from "../../constants";

const PatientCard = ({ patient }: { patient: Patient }) => {
  return (
    <View style={styles.card}>
      <View style={styles.patient_info_wrapper}>
        <Image
          source={icon.profilepicture}
          resizeMode="contain"
          style={{ height: 50, width: 50, borderRadius: 100 }}
        />

        <View style={styles.text_wrapper}>
          <Text
            style={{
              fontSize: SIZE.base,
              fontWeight: "bold",
              color: COLORS.black,
            }}
          >
            {patient.name}
          </Text>

          <Text
            style={{
              fontSize: SIZE.sm,
              fontWeight: "600",
              color: COLORS.lightblack,
            }}
          >
            Diagnosis: Malaria
          </Text>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.button_label}>View Report</Text>
      </Pressable>
    </View>
  );
};

export default PatientCard;

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: COLORS.blue,
  },

  button_label: {
    color: COLORS.white,
    fontSize: SIZE.xsm,
  },

  card: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  patient_info_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  text_wrapper: {
    gap: 4,
  },
});
