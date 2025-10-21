import styled from "styled-components";
import book from "../../assets/images/book.png";
import bg from "../../assets/images/bg.png";
export const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(
    100vh - 150px
  ); /* Adjust based on your header/footer height */
  padding: 20px;
  background-color: #f8f8f8; /* Very light grey background */
  position: relative;
  overflow: hidden; /* Ensure floral background does not overflow */
  background-image: url(${bg});
  background-position: 80% 110%;
  background-size: 105%;

  @media (max-width: 768px) {
    padding: 10px;
    min-height: calc(100vh - 100px);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    height: 35px;
    width: 100%;
    background-color: #4caf50;
    z-index: 2;
    top: 96%;
  }
`;

export const FloralBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://placehold.co/1920x1080/E0E0E0/FFFFFF?text=Floral+Background"); /* Placeholder for floral background */
  background-size: cover;
  background-position: center;
  opacity: 0.3; /* Adjust opacity to make it subtle */
  z-index: 0;
`;

export const BookContainer = styled.div`
  display: flex;
  width: 900px; /* Adjust as needed */
  height: 600px; /* Adjust as needed */
  /* background-color: #f7f0e8; Light beige for the book */
  background-image: url(${book});
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  overflow: hidden; /* For rounded corners */
  background-position: 50% 80%;
  background-size: 130%;
  border: 1px solid #d3c4b6; /* Subtle border */

  @media (max-width: 1024px) {
    width: 700px;
    height: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack pages vertically on mobile */
    width: 95%;
    height: auto;
    max-height: 90vh; /* Limit height on small screens */
    overflow-y: auto; /* Allow scrolling if content overflows */
  }
`;

export const Page = styled.div`
  flex: 1;
  padding: 30px;
  font-family: "Georgia", serif;
  line-height: 1.6;
  color: #555;
  position: relative;
  overflow-y: auto; /* Allow scrolling for content on each page */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #d3c4b6;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-bottom: 1px solid #d3c4b6; /* Separator for stacked pages */
    &::before {
      display: none; /* Hide vertical separator on mobile */
    }
  }
`;

export const LeftPage = styled(Page)`
  border-right: 1px solid #d3c4b6; /* Book spine effect */
  text-align: center;

  &::before {
    right: 0;
  }

  @media (max-width: 768px) {
    border-right: none;
  }
`;

export const RightPage = styled(Page)`
  text-align: left;

  &::before {
    left: 0;
  }

  @media (max-width: 768px) {
    border-top: 1px solid #d3c4b6; /* Separator for stacked pages */
    &::before {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%; /* Make it circular */
  overflow: hidden;
  margin: 0 auto 20px auto; /* Center and add margin below */
  border: 3px solid gold; /* Golden frame */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 15px;
  }
`;

export const QuoteLeft = styled.p`
  font-style: italic;
  font-size: 1.7em;
  margin-top: 20px;
  line-height: 40px;
  margin-left: 15px;

  text-align: left;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const QuoteRight = styled.p`
  margin-bottom: 30px;
  font-size: 1.7em;
  margin-top: 20px;
  line-height: 35px;
  margin-right: 5px;
  /* text-align: center; */

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Signature = styled.p`
  font-family: "Times New Roman", cursive; /* Example of a script font */
  font-size: 1.8em;
  text-align: right;
  margin-top: 40px;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-top: 20px;
  }
`;
