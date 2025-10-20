import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom"; // Импортируем useLocation и useParams
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import {
  RegionsPageContainer,
  Title,
  ContentWrapper,
  Sidebar,
  SidebarItem,
  TimelineCircle,
  TimelineConnector,
  MapAndDetailsContainer,
  DetailPanel,
  DetailImageWrapper,
  DetailImage,
  DetailTextContent,
  DetailTitle,
  DetailDescription,
  AudioPlayerContainer,
  PlayButton,
  AudioProgress,
  AudioTime,
  ImageDots,
  Dot,
} from "./styled";
const RegionsPage = ({
  regionName = "Витебская область", // Default for example
  landmarks = [], // Array of landmark objects
  initialMapCenter = [53.9, 27.5667], // Default Minsk coordinates
  initialMapZoom = 8,
  ymapsApiKey = "92ef74ac-91c7-48b8-96a8-210b6ddf84e1", // Important: replace with your actual API key
}) => {
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const mapRef = useRef(null);
  const location = useLocation(); // Получаем объект location
  const { landmarkId } = location.state || {}; // Получаем landmarkId из состояния маршрута

  // EFFECT: Set first landmark as active and reset audio when landmarks prop changes
  useEffect(() => {
    if (landmarks.length > 0) {
      let initialSelection = null;
      if (landmarkId) {
        initialSelection = landmarks.find((lm) => lm.id === landmarkId);
      }

      // If landmarkId is not found or not provided, select the first one
      if (!initialSelection) {
        initialSelection = landmarks[0];
      }

      setSelectedLandmark(initialSelection);
      setCurrentImageIndex(0); // Reset image to the first one
      // Reset audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    } else {
      setSelectedLandmark(null);
      setCurrentImageIndex(0);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [landmarks, landmarkId]); // Dependencies: landmarks and landmarkId

  // EFFECT: Control audio playback based on isPlaying state
  useEffect(() => {
    if (selectedLandmark && selectedLandmark.audio && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, selectedLandmark]); // Only re-run if isPlaying or selectedLandmark changes

  // EFFECT: Update map center when selectedLandmark changes
  useEffect(() => {
    if (mapRef.current && selectedLandmark) {
      mapRef.current.setCenter(selectedLandmark.coordinates, initialMapZoom, {
        duration: 500, // Smooth animation to new center
      });
    } else if (mapRef.current && !selectedLandmark) {
      // If no landmark is selected, center on the initial map center
      mapRef.current.setCenter(initialMapCenter, initialMapZoom, {
        duration: 500,
      });
    }
  }, [selectedLandmark, initialMapZoom, initialMapCenter]); // Add initialMapCenter as dependency

  const handleSidebarItemClick = (landmark) => {
    setSelectedLandmark(landmark);
    setCurrentImageIndex(0); // Reset image index when new landmark is selected
    // Always reset audio when a new landmark is selected manually
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleNextImage = () => {
    if (
      selectedLandmark &&
      selectedLandmark.gallery &&
      selectedLandmark.gallery.length > 1
    ) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedLandmark.gallery.length
      );
    }
  };

  const handlePrevImage = () => {
    if (
      selectedLandmark &&
      selectedLandmark.gallery &&
      selectedLandmark.gallery.length > 1
    ) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedLandmark.gallery.length) %
          selectedLandmark.gallery.length
      );
    }
  };

  const handleAudioPlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <RegionsPageContainer>
      <Title>{regionName}</Title>
      <ContentWrapper>
        <Sidebar>
          {landmarks.map((landmark, index) => (
            <SidebarItem
              key={landmark.id}
              onClick={() => handleSidebarItemClick(landmark)}
              isActive={selectedLandmark && selectedLandmark.id === landmark.id}
            >
              <TimelineCircle>{index + 1}</TimelineCircle>
              <TimelineConnector />
              {landmark.name.ru}
            </SidebarItem>
          ))}
        </Sidebar>

        <MapAndDetailsContainer>
          <YMaps query={{ apikey: ymapsApiKey }}>
            <Map
              defaultState={{ center: initialMapCenter, zoom: initialMapZoom }}
              width="100%"
              height="100%"
              instanceRef={mapRef} // Get reference to the map instance
              options={{
                suppressMapOpenBlock: true, // Hide "Open in Yandex Maps" button
              }}
              modules={["geocode", "suggest"]} // Required modules for future use (optional)
              style={{ borderRadius: "8px" }}
            >
              {landmarks.map((landmark) => (
                <Placemark
                  key={landmark.id}
                  geometry={landmark.coordinates}
                  properties={{
                    hintContent: landmark.name.ru,
                    balloonContent: landmark.name.ru,
                  }}
                  onClick={() => handleSidebarItemClick(landmark)}
                />
              ))}
            </Map>
          </YMaps>
          {selectedLandmark && (
            <DetailPanel>
              {selectedLandmark.gallery &&
                selectedLandmark.gallery.length > 0 && (
                  <DetailImageWrapper>
                    <DetailImage
                      src={selectedLandmark.gallery[currentImageIndex]}
                      alt={selectedLandmark.name.ru}
                    />
                    {selectedLandmark.gallery.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          style={{
                            position: "absolute",
                            left: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "rgba(255,255,255,0.7)",
                            border: "none",
                            borderRadius: "50%",
                            padding: "10px",
                            cursor: "pointer",
                          }}
                        >
                          &#9664;
                        </button>
                        <button
                          onClick={handleNextImage}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "rgba(255,255,255,0.7)",
                            border: "none",
                            borderRadius: "50%",
                            padding: "10px",
                            cursor: "pointer",
                          }}
                        >
                          &#9654;
                        </button>
                        <ImageDots>
                          {selectedLandmark.gallery.map((_, idx) => (
                            <Dot
                              key={idx}
                              isActive={idx === currentImageIndex}
                              onClick={() => setCurrentImageIndex(idx)}
                            />
                          ))}
                        </ImageDots>
                      </>
                    )}
                  </DetailImageWrapper>
                )}
              <DetailTextContent>
                <DetailTitle
                  dangerouslySetInnerHTML={{
                    __html: selectedLandmark.name.ru,
                  }}
                ></DetailTitle>
                <DetailDescription
                  dangerouslySetInnerHTML={{
                    __html: selectedLandmark.description.ru,
                  }}
                />
                {/* {selectedLandmark.audio && (
                  <AudioPlayerContainer>
                    <audio
                      ref={audioRef}
                      src={selectedLandmark.audio}
                      onEnded={() => setIsPlaying(false)}
                      onTimeUpdate={handleTimeUpdate}
                      preload="metadata"
                    />
                    <PlayButton onClick={handleAudioPlayPause}>
                      {isPlaying ? "⏸" : "▶"}
                    </PlayButton>
                    <AudioProgress
                      value={currentTime}
                      max={audioRef.current ? audioRef.current.duration : 0}
                    />
                    <AudioTime>
                      {formatTime(currentTime)} /{" "}
                      {selectedLandmark.audioDuration}
                    </AudioTime>
                  </AudioPlayerContainer>
                )} */}
              </DetailTextContent>
            </DetailPanel>
          )}
        </MapAndDetailsContainer>
      </ContentWrapper>
    </RegionsPageContainer>
  );
};

export default RegionsPage;
