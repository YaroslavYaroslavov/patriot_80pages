import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegionsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: calc(
    100vh - var(--header-height, 100px)
  ); /* Adjust based on your header height */
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 4000px;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Sidebar = styled.div`
  flex: 0 0 250px; /* Fixed width sidebar */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  position: relative; /* For timeline connector */

  &::before {
    content: "";
    position: absolute;
    /* left: 40px; Adjust to align with circles */
    top: 0;
    bottom: 0;
    width: 2px;
    /* background-color: #e0e0e0; */
    z-index: 0;
  }

  @media (max-width: 1024px) {
    flex-direction: row; /* Horizontal scroll on smaller screens */
    overflow-x: auto;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    box-shadow: none; /* Remove shadow if not needed horizontally */
    &::before {
      display: none; /* Hide vertical timeline on horizontal scroll */
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1.1rem;
  color: #555;
  transition: background-color 0.2s ease, color 0.2s ease;
  position: relative;
  z-index: 1; /* Bring text above timeline connector */

  &:hover {
    background-color: #f0f0f0;
    color: #007bff;
  }

  ${(props) =>
    props.isActive &&
    `
    background-color: #e0f2f7; /* Light blue background for active item */
    color: #007bff;
    font-weight: bold;

    ${TimelineCircle} {
        background-color: #007bff;
        color: white;
        border-color: #007bff;
    }
  `}

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    min-width: 120px; /* Ensure items have a minimum width */
    padding: 8px 10px;
    font-size: 0.9rem;
    border-right: 1px solid #eee; /* Separator for horizontal items */
    &:last-child {
      border-right: none;
    }
  }
`;

export const TimelineCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 15px;
  border: 2px solid #ccc;
  flex-shrink: 0; /* Prevent shrinking */

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  left: 38px; /* Align with center of circle */
  height: 100%;
  width: 2px;
  background-color: #e0e0e0;
  z-index: 0; /* Behind circles and text */

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MapAndDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative; /* For positioning DetailPanel */
  width: 1000px;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`;

export const DetailPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  /* width: 70%; Adjust width of the detail panel */
  height: 600px;
  background-color: rgba(
    255,
    255,
    255,
    0.95
  ); /* Slightly transparent background */
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  overflow-y: auto; /* Enable scrolling for long content */
  display: flex;
  flex-direction: column;
  z-index: 1000; /* Above the map */
  width: 800px;

  @media (max-width: 1024px) {
    position: relative;
    width: 50%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const DetailImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  /* max-height: 200px */
  /* overflow: hidden; */
  border-radius: 6px;
  margin-bottom: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? "#007bff" : "rgba(0,0,0,0.3)"};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const DetailTextContent = styled.div`
  flex-grow: 1; /* Allow content to take up remaining space */
`;

export const DetailTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DetailDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 25px;
  margin-top: 1.5rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PlayButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AudioProgress = styled.input.attrs({ type: "range" })`
  flex-grow: 1;
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }
`;

export const AudioTime = styled.span`
  font-size: 0.9rem;
  color: #666;
`;
