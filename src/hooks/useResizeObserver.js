import { useEffect, useRef } from "react";

const useResizeObserver = () => {
  let isMobile = false;
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.contentRect.width;
      if (width <= 768) {
        isMobile = true;
      } else {
        isMobile = false;
      }
    }
  });

  const global = document.getElementById("globalWrapper");
  resizeObserver.observe(global);
};

export default useResizeObserver;
