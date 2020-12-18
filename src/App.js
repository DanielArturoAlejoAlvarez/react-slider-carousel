import './App.css';
import { DataSlider } from './components/DataSlider';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <>
      <ImageSlider slides={DataSlider} />
    </>
  );
}

export default App;
