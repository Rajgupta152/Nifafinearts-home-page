import './App.css';
import Course from './components/Course';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Markque from './components/Markque';
import Menu from './components/Menu';
import OnlineClass from './components/OnllineClass';
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
    </div>
  );
}

export default App;
