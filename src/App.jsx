// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Features from "./components/features/features";
import Statistics from "./components/statistics/Statistics";
import Teams from "./components/Teams/Teams";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";

// eslint-disable-next-line no-unused-vars
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [orderPopup, setOrderPopup] = React.useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Services handleOrderPopup={handleOrderPopup} />
        <Features />
        <Statistics />
        <Teams />
        <Testimonial />
        <Footer />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default App;
