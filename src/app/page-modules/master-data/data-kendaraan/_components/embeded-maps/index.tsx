import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const EmbeddedMaps = () => {
  const latitude = -7.217884661667901;
  const longitude = 107.90194069312462;
  const handleToGmaps = () => {
    const gmapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(gmapsUrl, "_blank");
  };
  return (
    <Flex w="full">
      <MapContainer
        center={[-7.217884661667901, 107.90194069312462]}
        zoom={300}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.217884661667901, 107.90194069312462]}>
          <Popup>
            <Flex flexDir="column" justifyContent="center" textAlign="center">
              <Text fontSize="16px" fontWeight={600}>
                Posisi Kendaraan
              </Text>
              <Button
                variant="solid"
                color="monika-primary.500"
                cursor="pointer"
                onClick={() => handleToGmaps()}
              >
                Lacak dengan Google Maps
              </Button>
            </Flex>
          </Popup>
        </Marker>
        <Circle center={[50.5, 30.5]} radius={200} />
      </MapContainer>
    </Flex>
  );
};

export default EmbeddedMaps;
