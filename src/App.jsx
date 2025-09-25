import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default App;
