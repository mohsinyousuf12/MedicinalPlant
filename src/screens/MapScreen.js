import React from "react";
import { View, Dimensions } from "react-native";
import Button from "../component/Button/Button";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

function MapScreen({ route, navigation }) {
  const { markersCoordinates, plantsDetails } = route.params;

  const mapView = React.useRef();
  const [region, setRegion] = React.useState(0);

  React.useEffect(() => {
    navigation.setOptions({
      title: "Find " + plantsDetails?.Local_Names + " here",
    });
  }, []);
  const getLocation = () => {
    if (region === markersCoordinates.length - 1) {
      return setRegion(0);
    }
    const coordinate = {
      latitude: markersCoordinates[region + 1].latitude,
      longitude: markersCoordinates[region + 1].longitude,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034,
    };
    mapView.current.animateToRegion(coordinate, 500);
    setRegion((initialValue) => initialValue + 1);
  };
  return (
    <>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          width: screenW - 10,
          height: screenH - 200,
          alignSelf: "center",
        }}
        initialRegion={markersCoordinates[region]}
        region={markersCoordinates[0]}
      >
        {markersCoordinates.map((item, key) => (
          <Marker
            coordinate={item}
            title={item.Local_Names}
            description={item.Medicinal_Value}
            key={key}
          />
        ))}
      </MapView>
      {markersCoordinates.length > 1 && (
        <Button title={"Next"} onPress={() => getLocation()} />
      )}
    </>
  );
}

export default MapScreen;
