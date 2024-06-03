import React from "react";
import NavHeader from "../components/header/NavHeader";
import MainHeader from "../components/header/MainHeader";
import SliderBanner from "../components/heroSection/SliderBanner";
import Header2 from "../components/heroSection/header2"
import Header3 from "../components/heroSection/header3"
import Header4 from "../components/heroSection/header4"
import Header5 from "../components/heroSection/header5"
import Header6 from "../components/heroSection/header6"
import Header7 from "../components/heroSection/header7"
import Footer from "../components/heroSection/footer"


const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader />
      <NavHeader />
      <SliderBanner />
      <Header2/>
      <Header3/>
      <Header4/>
      <Header5/>
      <Header6/>
      <Header7/>
      <Footer/>
    </div>
  );
};

export default Home;
