import './App.css';
import Course from './components/Course';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Markque from './components/Markque';
import Menu from './components/Menu';
import OnlineClass from './components/OnllineClass';
import VideoGallery from './components/VideoGallery';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <ImageSlider/>
      <Markque/>
      <Welcome/>
      <OnlineClass/>
      <Course/>
      <Gallery/>
      <VideoGallery/>
      <Footer/>
    </div>
  );
}

export default App;
