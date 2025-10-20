// src/components/MapPage/index.jsx
import React, { useRef } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useNavigate } from "react-router-dom";
// Импортируем getRegionKeyByLandmarkId
import {
  allLandmarks,
  getRegionKeyByLandmarkId,
} from "../../assets/images/landmarks";

import { MapPageContainer, Title, FullWidthMapContainer } from "./styled";

const MapPage = ({
  ymapsApiKey = "92ef74ac-91c7-48b8-96a8-210b6ddf84e1",
  initialMapCenter = [53.9, 27.5667],
  initialMapZoom = 7,
}) => {
  const navigate = useNavigate();
  const mapRef = useRef(null);

  const handlePlacemarkClick = (landmark) => {
    const regionKey = getRegionKeyByLandmarkId(landmark.id);

    if (regionKey) {
      navigate(`/regions/${regionKey}`, { state: { landmarkId: landmark.id } });
    } else {
      console.warn(`Region not found for landmark with ID: ${landmark.id}`);
      // Можно добавить обработку ошибки, например, навигацию на общую страницу регионов
      navigate("/regions/vitebsk"); // Fallback на Витебскую область
    }
  };

  return (
    <MapPageContainer>
      <Title>Карта достопримечательностей Беларуси</Title>
      <FullWidthMapContainer>
        <YMaps query={{ apikey: ymapsApiKey }}>
          <Map
            defaultState={{ center: initialMapCenter, zoom: initialMapZoom }}
            instanceRef={mapRef}
            options={{
              suppressMapOpenBlock: true,
              minZoom: 6,
            }}
            modules={["geocode", "suggest"]}
            style={{ borderRadius: "8px", width: "1200px", height: "600px" }}
          >
            {allLandmarks.map((landmark) => (
              <Placemark
                key={landmark.id} // key остается числовым
                geometry={landmark.coordinates}
                properties={{
                  hintContent: landmark.name.ru,
                  balloonContent: landmark.name.ru,
                }}
                options={{
                  preset: "islands#icon",
                  iconColor: "#007bff",
                }}
                onClick={() => handlePlacemarkClick(landmark)}
              />
            ))}
          </Map>
        </YMaps>
      </FullWidthMapContainer>
    </MapPageContainer>
  );
};

export default MapPage;
