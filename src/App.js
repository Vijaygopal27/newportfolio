import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Contact/>
    </div>
  );
}

export default App;
