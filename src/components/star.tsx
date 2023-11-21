import { Image } from "react-native";
import { icon } from "../../constants";

const Star = () => {
  return (
    <Image
      source={icon.star}
      resizeMode="contain"
      style={{ height: 44, width: 46 }}
    />
  );
};

export default Star;
