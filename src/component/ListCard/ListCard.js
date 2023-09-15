import react from "react";
import { View, Image } from "react-native";
import Apptext from "../AppText/AppText";

export default function ListCard({ data }) {
  return (
    <View
      style={{
        margin: 10,
        width: 300,
        height: 500,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "white",
        marginLeft: 5,
        marginRight: 5,
        alignItems: "center",
        // justifyContent: "center",
        borderBottomWidth: 4,
        borderRightWidth: 6,
        alignSelf: "center",
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: data?.image,
        }}
        style={{
          width: 296,
          height: 200,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 7,
          resizeMode: "stretch",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 15,
        }}
      >
        <Apptext style={{ marginBottom: 20 }}>Medicinal Use:</Apptext>
        <Apptext style={{ marginBottom: 20, fontWeight: "bold" }}>
          {data?.Medicinal_Value}
        </Apptext>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Apptext style={{ marginBottom: 20 }}>Common Name:</Apptext>
        <Apptext style={{ marginBottom: 20, fontWeight: "bold" }}>
          {data?.Common_Name}
        </Apptext>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Apptext style={{ marginBottom: 20 }}>Latin Name:</Apptext>
        <Apptext style={{ marginBottom: 20, fontWeight: "bold" }}>
          {data?.Latin_Name}
        </Apptext>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Apptext style={{ marginBottom: 20 }}>Local Name:</Apptext>
        <Apptext style={{ marginBottom: 20, fontWeight: "bold" }}>
          {data?.Local_Names}
        </Apptext>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Apptext style={{ marginBottom: 20 }}>Parts of Plant:</Apptext>
        <Apptext style={{ marginBottom: 20, fontWeight: "bold" }}>
          {data?.Parts_of_plant}
        </Apptext>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Apptext style={{ marginBottom: 20 }}>Process:</Apptext>
        <Apptext style={{ marginBottom: 20, fontWeight: "bold" }}>
          {data?.process}
        </Apptext>
      </View>
    </View>
  );
}
