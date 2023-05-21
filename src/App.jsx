import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HashLoader from "react-spinners/HashLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="sweet-loader">
          <HashLoader
            color="#a855f7"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          {/* <Services /> */}
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
