import { useState, useEffect } from "react";

const useResizeObserver = (initialState = false) => {
  const [isMobile, setIsMobile] = useState(initialState);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (width <= 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }
    });

    const global = document.getElementById("globalWrapper");
    resizeObserver.observe(global);

    return () => {
      resizeObserver.unobserve(global);
    };
  });

  return [isMobile];
};

export default useResizeObserver;
