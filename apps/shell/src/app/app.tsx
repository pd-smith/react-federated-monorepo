import { Router, ReactLocation } from '@tanstack/react-location';
import routes from './routes';


const location = new ReactLocation();

export function App() {
  return (
      <Router location={location} routes={routes}/>
  );
}

export default App;
