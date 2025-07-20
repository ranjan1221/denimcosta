import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const TICKER_TEXT =
  "Denim costa a jeans designed specially to your needs buy Now! to live in style...";

const VelocityText = () => {
  const controls = useAnimation();
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({ x: "-100%" }, { duration: 90, ease: "linear" });
        controls.set({ x: "0%" });
      }
    };
    controls.set({ x: "0%" });
    loop();
    // eslint-disable-next-line
  }, []);

  // Duplicate the text enough times to fill the ticker and avoid gaps
  const repeatCount = 4;
  const repeatedText = Array.from({ length: repeatCount }, () => TICKER_TEXT).join(" ");

  return (
    <section className="relative w-full bg-black text-white py-6 overflow-hidden" style={{ minHeight: 0, height: '90px' }}>
      <div className="w-full h-full flex items-center overflow-hidden" ref={tickerRef}>
        <motion.p
          animate={controls}
          className="whitespace-nowrap text-2xl md:text-4xl font-black uppercase leading-[0.85] px-4 text-white"
          style={{ willChange: "transform" }}
        >
          {repeatedText}
        </motion.p>
      </div>
    </section>
  );
};

export default VelocityText; 