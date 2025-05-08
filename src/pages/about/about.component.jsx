import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/bhagya.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Bhagya Sajeev</strong>
                <br /> I'm a seasoned software developer with a strong background in front-end and back-end development. I've successfully built and optimized web applications using Angular, React, .NET Core, Node.js, Java.
                <br />
                At BMO Financial Group, I led the migration of legacy systems to modern web platforms and architected scalable AWS solutions that streamlined operations and reduced deployment time by 30%.
                <br />
                I'm passionate about cloud technologies, having deployed solutions using AWS and automated CI/CD pipelines with Jenkins, GitLab, and Docker. 
                <br />
                I thrive in Agile environments, collaborating with cross-functional teams, and integrating automated testing to improve code quality.
                <br />I also have experience in database management, user authentication, and implementing microservices architectures.
                <br /> I'm driven by a continuous learning mindset and a commitment to delivering robust, scalable software solutions that meet both technical and business goals. <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  {/* <div>
                    <a href="https://drive.google.com/file/d/1m9KxqQ83xhYZKTtIobywTG3wOXe4aMk3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div> */}
                  <div>
                    <a href="https://github.com/Bhagy-advik" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/bhagyasajeev/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
