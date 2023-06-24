import Filter from "../components/common/Filter";
import Stape from "../components/common/Stape";
import AllProperties from "../components/homeTwo/AllProperties";
import Banner from "../components/homeTwo/Banner";
import BigMarket from "../components/homeTwo/BigMarket";
import Explore from "../components/homeTwo/Explore";
import Invest from "../components/homeTwo/Invest";
import Platform from "../components/homeTwo/Platform";
import Portfolio from "../components/homeTwo/Portfolio";
import Community from "../components/howItWorks/Community";
import TestimonialSlider from "../components/sliders/TestimonialSlider";

const HomeTwo = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner />

      {/* Filter start here */}
      <Filter />

      {/* Explore start here */}
      <Explore />

      {/* All Properties start here */}
      <AllProperties />

      {/* Stape start here */}
      <Stape bg={false} cls={"start--two"} />

      {/* Big Market start here */}
      <BigMarket />

      {/* Platform start here */}
      <Platform />

      {/* Portfolio start here */}
      <Portfolio />

      {/* Invest start here */}
      <Invest />

      {/* Community start here */}
      <Community />

      {/* Testimonial Slider start here */}
      <TestimonialSlider cls="testimonial--two" />
    </>
  );
};

export default HomeTwo;
