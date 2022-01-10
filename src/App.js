import {  Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/HomePage";
import Courses from "./Pages/Courses/CoursePage";
import AboutPage from "./Pages/About/AboutPage";
import GlobalStyles from "./components/Global";
import ContactPage from "./Pages/Contact/ContactPage";
import AuthenticationPage from "./Pages/Authentication/AuthenticationPage";
import FaqPage from "./Pages/Faq/FaqPage";
import SeriesWritingPage from "./Pages/SeriesWriting/SeriesWritingPage";
import UserAccountPage from "./Pages/UserAccount/UserAccountPage";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import RadioWritingPage from "./Pages/RadioWriting/RadioWritingPage";
import MusicEntrepreneurPage from "./Pages/MusicEntrepreneur/MusicEntrepreneurPage";
import FashionEntrepreneurPage from "./Pages/FashionEntrepreneur/FashionEntrepreneurPage";




function App() {
  return (
    <>
    <GlobalStyles />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/course" element={<Courses/>} />

        <Route path="/about" element={<AboutPage/>} />

        <Route path="/contact" element={<ContactPage/>} />

        <Route path="/authentication" element={<AuthenticationPage/>} />

        <Route path="/faq" element={<FaqPage/>} />

        <Route path="/series-writing" element={<SeriesWritingPage/>} />

        <Route path="/my-account" element={<UserAccountPage/>} />

        <Route path="/gallery" element={<GalleryPage/>} />

        <Route path="/radio-writing" element={<RadioWritingPage/>} />

        <Route path="/music-entrepreneur" element={<MusicEntrepreneurPage/>} />

        <Route path="/fashion-entrepreneur" element={<FashionEntrepreneurPage/>} />

      </Routes>
2
    </>
  );
}

export default App;
