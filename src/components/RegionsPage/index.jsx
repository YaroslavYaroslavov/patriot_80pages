import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useLanguage } from "../../context/LanguageContext";

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
  regionNameKey,
  landmarks = [],
  initialMapCenter = [53.9, 27.5667],
  initialMapZoom = 8,
  ymapsApiKey = "92ef74ac-91c7-48b8-96a8-210b6ddf84e1",
}) => {
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const mapRef = useRef(null);
  const location = useLocation();
  const { landmarkId } = location.state || {};
  const { language, getText } = useLanguage();

  useEffect(() => {
    if (landmarks.length > 0) {
      let initialSelection = null;
      if (landmarkId) {
        initialSelection = landmarks.find((lm) => lm.id === landmarkId);
      }
      if (!initialSelection) {
        initialSelection = landmarks[0];
      }
      setSelectedLandmark(initialSelection);
      setCurrentImageIndex(0);
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
  }, [landmarks, landmarkId]);

  useEffect(() => {
    if (selectedLandmark && selectedLandmark.audio && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, selectedLandmark]);

  useEffect(() => {
    if (mapRef.current && selectedLandmark) {
      mapRef.current.setCenter(selectedLandmark.coordinates, initialMapZoom, {
        duration: 500,
      });
    } else if (mapRef.current && !selectedLandmark) {
      mapRef.current.setCenter(initialMapCenter, initialMapZoom, {
        duration: 500,
      });
    }
  }, [selectedLandmark, initialMapZoom, initialMapCenter]);

  const handleSidebarItemClick = (landmark) => {
    setSelectedLandmark(landmark);
    setCurrentImageIndex(0);
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

  // Simplified translations directly within the component for demonstration.
  // Ideally, these would come from a centralized localization file/context.
  const componentTranslations = {
    "КАРТА ПАМЯТНЫХ МЕСЦ БЕЛАРУСІ": {
      ru: "КАРТА ПАМЯТНЫХ МЕСТ БЕЛАРУСИ",
      en: "MAP OF MEMORABLE PLACES OF BELARUS",
      by: "КАРТА ПАМЯТНЫХ МЕСЦ БЕЛАРУСІ",
    },
    vitebsk: {
      ru: "ВИТЕБСКАЯ ОБЛАСТЬ",
      en: "VITEBSK REGION",
      by: "ВІЦЕБСКАЯ ВОБЛАСЦЬ",
    },
    minsk: {
      ru: "МИНСКАЯ ОБЛАСТЬ",
      en: "MINSK REGION",
      by: "МІНСКАЯ ВОБЛАСЦЬ",
    },
    grodno: {
      ru: "ГРОДНЕНСКАЯ ОБЛАСТЬ",
      en: "GRODNO REGION",
      by: "ГРОДЗЕНСКАЯ ВОБЛАСЦЬ",
    },
    mogilev: {
      ru: "МОГИЛЕВСКАЯ ОБЛАСТЬ",
      en: "MOGILEV REGION",
      by: "МАГІЛЁЎСКАЯ ВОБЛАСЦЬ",
    },
    brest: {
      ru: "БРЕСТСКАЯ ОБЛАСТЬ",
      en: "BREST REGION",
      by: "БРЭСЦКАЯ ВОБЛАСЦЬ",
    },
    gomel: {
      ru: "ГОМЕЛЬСКАЯ ОБЛАСТЬ",
      en: "GOMEL REGION",
      by: "ГОМЕЛЬСКАЯ ВОБЛАСЦЬ",
    },
  };

  // Helper function to get text from componentTranslations if available,
  // otherwise fallback to getText from LanguageContext
  const getLocalizedText = (key) => {
    if (componentTranslations[key] && componentTranslations[key][language]) {
      return componentTranslations[key][language];
    }
    // Fallback to Russian if specific language is not available in componentTranslations
    if (componentTranslations[key] && componentTranslations[key]["ru"]) {
      return componentTranslations[key]["ru"];
    }
    // If not found in componentTranslations, try to get from global context
    return getText(key);
  };

  return (
    <RegionsPageContainer>
      {/* Use getLocalizedText for the main title */}
      <Title>{getLocalizedText(regionNameKey)}</Title>
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
              {/* Ensure landmark names are localized */}
              {landmark.name[language] || landmark.name.ru}
            </SidebarItem>
          ))}
        </Sidebar>
        <MapAndDetailsContainer>
          <YMaps query={{ apikey: ymapsApiKey }}>
            <Map
              defaultState={{ center: initialMapCenter, zoom: initialMapZoom }}
              width="100%"
              height="100%"
              instanceRef={mapRef}
              options={{
                suppressMapOpenBlock: true,
              }}
              modules={["geocode", "suggest"]}
              style={{ borderRadius: "8px" }}
            >
              {landmarks.map((landmark) => (
                <Placemark
                  key={landmark.id}
                  geometry={landmark.coordinates}
                  properties={{
                    hintContent: landmark.name[language] || landmark.name.ru,
                    balloonContent: landmark.name[language] || landmark.name.ru,
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
                      alt={
                        selectedLandmark.name[language] ||
                        selectedLandmark.name.ru
                      }
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
                    __html:
                      selectedLandmark.name[language] ||
                      selectedLandmark.name.ru,
                  }}
                ></DetailTitle>
                <DetailDescription
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedLandmark.description[language] ||
                      selectedLandmark.description.ru,
                  }}
                />
                {selectedLandmark.audio && (
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
                )}
              </DetailTextContent>
            </DetailPanel>
          )}
        </MapAndDetailsContainer>
      </ContentWrapper>
    </RegionsPageContainer>
  );
};

export default RegionsPage;
