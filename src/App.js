
import './App.css';
import MyCarousal from './components/my-carousal/my-carousal.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleMessage from './components/MyTitleMessage/title-message.component';
import MyNavbar from './components/my-navbar/my-navbar.component';
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experience from './pages/Experience/experience.component';
import TimeLine from './components/projects-timeline/project-timeline.component';
import ContactForm from './pages/contact-form/contact-form.component';


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyCarousal />
    <TitleMessage />
    <MyNavbar />
    {/* hello */}
    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
                  <motion.div
                    initial={{ opacity: 0 }}       // Start with opacity 0 (hidden)
                    animate={{ opacity: 1 }}       // Fade in to opacity 1 (visible)
                    transition={{ duration: 0.5 }} // Transition duration of 500ms
                  >
                    <About />
              </motion.div>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
            <motion.div
            initial={{ x: "-100vw" }}      // Start off-screen to the left
            animate={{ x: 0 }}             // Animate to original position
            transition={{ duration: 0.5 }} // Half a second slide-in
          >
              <hr />
            <Skills />
          </motion.div>
      </Container>
      <div>
        <Container className="container-box rounded">
            <motion.div
                    initial={{ opacity: 0 }}       // Start with opacity 0 (hidden)
                    animate={{ opacity: 1 }}       // Fade in to opacity 1 (visible)
                    transition={{ duration: 0.5 }} // Transition duration of 500ms
                  >
            <hr />

            <Experience />
            </motion.div>
        </Container>
      </div>
      <Container className="container-box rounded">
      <motion.div
            initial={{ x: "-100vw" }}      // Start off-screen to the left
            animate={{ x: 0 }}             // Animate to original position
            transition={{ duration: 0.5 }} // Half a second slide-in
          >
          <hr />
          <TimeLine />
          </motion.div>
      </Container>
      <Container className="container-box rounded">
      <motion.div
                    initial={{ opacity: 0 }}       // Start with opacity 0 (hidden)
                    animate={{ opacity: 1 }}       // Fade in to opacity 1 (visible)
                    transition={{ duration: 0.5 }} // Transition duration of 500ms
                  >
          <hr />
          <ContactForm />
          </motion.div>
      </Container>
    </div>
    
  );
}

export default App;
