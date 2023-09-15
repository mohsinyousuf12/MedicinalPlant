import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Header from "../component/Header/Header";
import DropDownPicker from "react-native-dropdown-picker";
import data from "../constant/plantData.json";
import Apptext from "../component/AppText/AppText";
import Button from "../component/Button/Button";
import { ScrollView } from "react-native-gesture-handler";
import ListCard from "../component/ListCard/ListCard";

const screenW = Dimensions.get("screen").width;

export default function Home({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedPlantsList, setSelectedPlantsList] = useState([]);
  const [markersCoordinates, setMarkersCoordinates] = useState([]);

  const [plantsDetails, setPlantsDetails] = useState();
  React.useEffect(() => {
    open && transformDataForDropDown();
  }, [open]);

  React.useEffect(() => {
    value && filterData();
  }, [value]);

  const transformDataForDropDown = () => {
    const dropdownData = data.Understory.map(({ Medicinal_Value }) => ({
      label: Medicinal_Value,
      value: Medicinal_Value,
    })).filter((v, i, a) => a.findIndex((v2) => v2.value === v.value) === i);

    setItems(dropdownData);
  };

  const filterData = () => {
    const filteredData = data.Understory.filter(
      (item) => item.Medicinal_Value == value
    );
    setSelectedPlantsList(filteredData);
  };

  const handlePressButton = (item) => {
    const coordinate = [];
    const latList = item?.lat?.toString().split(";");
    const longList = item?.long?.toString().split(";");
    latList?.length > 0 &&
      latList.map((lat, key) =>
        coordinate.push({
          latitude: parseFloat(lat.replace(/[\[\]&]+/g, "")),
          longitude: parseFloat(longList[key].replace(/[\[\]&]+/g, "")),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        })
      );
    setMarkersCoordinates(coordinate);
    setPlantsDetails(item);
  };

  return (
    <>
      <Header title={"Al Tabee'ah"} />
      <View
        style={{
          width: screenW - 30,
          alignSelf: "center",
        }}
      >
        <Apptext style={{ marginBottom: 10, marginTop: 30 }}>
          How can we help you?
        </Apptext>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          searchable={true}
        />
      </View>
      <ScrollView>
        {selectedPlantsList.length > 0 && (
          <>
            <Apptext
              style={{
                marginTop: 40,
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Herbal Plants For {value}
            </Apptext>
            {selectedPlantsList.map((item, key) => (
              <Button
                key={key}
                title={item.Local_Names}
                onPress={() => handlePressButton(item)}
              />
            ))}
          </>
        )}
        {plantsDetails && <ListCard data={plantsDetails} />}
        {markersCoordinates.length > 0 && (
          <Button
            title={"View on Map"}
            onPress={() =>
              navigation.navigate("Map", {
                markersCoordinates,
                plantsDetails,
              })
            }
          />
        )}
      </ScrollView>
    </>
  );
}
