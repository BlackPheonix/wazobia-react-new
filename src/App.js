import HeaderStyled from "./components/Header";
import GlobalStyles from "./components/Global";
import ShowCase from "./components/ShowCase";
import Courses from "./components/Courses";
import AboutSection from "./components/About";
import TestimonialSection from "./components/Testimonial";
import ContactFormSection from "./components/ContactForm"
import PartnersSection from "./components/Partners"
import FooterSection from "./components/Footer";






function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderStyled />
      <ShowCase />
      <Courses />
      <AboutSection />
      <TestimonialSection />
      <ContactFormSection />
      <PartnersSection />
      <FooterSection />
    </> 
  );
}

export default App;
