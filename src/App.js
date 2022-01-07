import Home from "./Pages/Home/HomePage";
import Courses from "./Pages/Courses/CoursePage";
import AboutPage from "./Pages/About/AboutPage";
import GlobalStyles from "./components/Global";
import ContactPage from "./Pages/Contact/ContactPage";
import AuthenticationPage from "./Pages/Authentication/AuthenticationPage";
import FaqPage from "./Pages/Faq/FaqPage";
import SeriesWritingPage from "./Pages/SeriesWriting/SeriesWritingPage";





function App() {
  return (
    <>
    <GlobalStyles />
      {/* <Home /> */}
      {/* <Courses /> */}
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
      {/* <AuthenticationPage /> */}
      {/* <FaqPage /> */}
      <SeriesWritingPage />
    </> 
  );
}

export default App;
