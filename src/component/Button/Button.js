import { TouchableOpacity } from "react-native-gesture-handler";
import Apptext from "../AppText/AppText";

function Button({ onPress = () => {}, title }) {
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        width: "auto",
        height: 30,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "white",
        marginLeft: 5,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 4,
        borderRightWidth: 6,
        alignSelf: "center",
      }}
      onPress={onPress}
    >
      <Apptext color="black" size={17} height={44} padding={10} isBold>
        {title}
      </Apptext>
    </TouchableOpacity>
  );
}

export default Button;
