import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Hero() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-lg mb-2">We're Getting Married</p>
        <h1 className="text-5xl md:text-6xl font-script mb-6">
          Aisyah & Fahmi
        </h1>
        <div className="max-w-md mx-auto">
          <p className="text-lg mb-6">
            "And among His signs is that He created for you mates from among
            yourselves..."
          </p>
          <p className="text-sm">(Quran 30:21)</p>
        </div>
        <div className="mt-12">
          <p className="text-xl">28.12.2023</p>
        </div>
      </div>
    </section>
  );
}
