import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import ProjectsContainer from './Components/Project/Project';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Landing />
        <ProjectsContainer />
      </div>
    </>
  );
}

export default App;
