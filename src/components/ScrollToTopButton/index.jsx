import React, { useState, useEffect } from "react";

const ScrollToTopButton = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    console.log("123");
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {children}
      <div className="scroll-to-top">
        {isVisible && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",

              backgroundColor: "#007bff" /* Blue background */,
              color: "white",
              border: "none",
              borderRadius: "50%" /* Circular button */,
              width: "50px",
              height: "50px",
              fontSize: "24px",
              lineHeight: "50px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            &#8679; {/* Up arrow unicode character */}
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTopButton;
