
import HeroSection from '../components/HeroSection';
import './App.css';

import {theme} from '../theme/index'
import { ThemeProvider } from '@mui/system'

function App() {
  return (
    <div className="App" >
      <ThemeProvider theme={theme}>

     <HeroSection />
      </ThemeProvider>
    </div>
  );
}

export default App;
