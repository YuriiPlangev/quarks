import React from "react";
import Hero from "../components/blocks/HeroSection";
import WhatIs from "../components/blocks/WhatIsSection";
import Footer from "../components/blocks/Footer";
import Logo from "../components/ui/Logo";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-[2rem]">
      <Logo />
      <Hero />
      <WhatIs />
      <Footer />
    </div>
  );
};

export default HomePage;
