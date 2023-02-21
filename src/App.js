import { Routes, Route } from 'react-router-dom';
import HomePage from "./routes/HomePage/homepage.component";

function App() {
  return (
    <Routes>      
      <Route path ="/" element={<HomePage />} />
      
    </Routes>
  );
   
  
}

export default App;
