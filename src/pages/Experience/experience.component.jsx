import React from "react";
import Container from "react-bootstrap/Container";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import { Tilt } from 'react-tilt';

import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>

      <Container className="p-5 mb-4 bg-light rounded-3">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">BMO Financial Group</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Senior Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Java Developer</strong> */}
                    <br />
                    <strong>Technology:</strong> Docker, Ansible, Git, AWS, React.js, Express.js, Node.js, Angular, C#, MongoDB
                    <br />
                    <strong> Description </strong>
                    <ul className="text-start ps-3">
                      <li>Established coding standards and guidelines for MEAN stack (MongoDB, Express.js, Angular 6+, Node.js) projects, conducting comprehensive code reviews and refactoring for maintainability</li>
                      <li>Designed and developed RESTful APIs and microservices supporting scalable, cloud-native applications.
                      </li>
                      <li>Managed AWS cloud infrastructure, including Lambda functions and CloudFormation templates, ensuring seamless scalability and reliability.
                      </li>
                      <li>Implemented secure APIs using JWT, OAuth 2.0, OIDC, and managed SSL/TLS certificates for secure communications.</li>
                      
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>

      
      <Container className="p-5 mb-4 bg-light rounded-3">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">Giesecke & Devrient</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Java Developer</strong> */}
                    <br />
                    <strong>Technology:</strong> React.js, Express.js, Node.js, MySQL
                    <br />
                    <strong> Description </strong>
                    <ul className="text-start ps-3">
                      <li><strong>Developed </strong> applictaion using <strong> MERN Stack </strong> </li>
                      <li><strong>Efficiently</strong> managed elements of the web page using virtual DOM with the help of Context API, Redux and MobX
                      </li>
                      <li>Configured and maintained MySQL database server, created SQL queries for data retrieval and updates, developed schemas, and executed JOIN operations 
                      </li>
                      <li>Employed Git for version control, including commit, clone, branch creation, and code integration.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      
      <Container className="p-5 mb-4 bg-light rounded-3">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">Citi Bank</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Java Developer</strong> */}
                    <br />
                    <strong>Technology:</strong> Docker, Ansible, Git,React.js, Express.js, Node.js
                    <br />
                    <strong> Description </strong>
                    <ul className="text-start ps-3">
                      <li><strong>Developed </strong> applictaion using <strong> MERN Stack </strong> </li>
                      <li>Built reusable and responsive UI components in React, enhancing user experience and maintaining consistency across applications.
                      </li>
                      <li>Managed complex application states using React Hooks and Redux, enabling dynamic and interactive user experiences.
                      </li>
                      <li><strong>Tested</strong> application with Jest and React testing library.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>

      
      <Container className="p-5 mb-4 bg-light rounded-3">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">BusyQA</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">DevOps and Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Java Developer</strong> */}
                    <br />
                    <strong>Technology:</strong> Docker, Jenkins, Ansible, Git, Kubernetes, Terraform, GCP, React.js, Express.js, Node.js, MongoDB
                    <br />
                    <strong> Description </strong>
                    <ul className="text-start ps-3">
                      <li>Developed full-stack applications using JavaScript technologies, including React, MongoDB, Express.js, and Node.js (MERN stack), creating dynamic Single Page Applications (SPAs) with Redux, Hooks, React Bootstrap, and Webpack </li>
                      <li>Created and managed APIs with Node.js and Express, and used GraphQL to query API data, optimizing client application performance
                      </li>
                      <li>Created CI/CD pipelines for Docker-based build and deployment processes using Jenkins, automating continuous integration and delivery workflows
                      </li>
                      <li>Managed servers on Google Cloud Platform and implemented virtualization with VMware to optimize infrastructure resources</li>
                      <li>Implemented container-based deployments using Docker, managed Docker images and registries, and configured Kubernetes clusters for container orchestration</li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      
        <Container className="p-5 mb-4 bg-light rounded-3">
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">INFINITY IT SOLUTIONS</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Specialist</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Java Developer</strong> */}
                    <br />
                    <strong>Technology:</strong> Java, Java Script, MS-SQL, Node.js
                    <br />
                    <strong> Description </strong>
                    <ul className="text-start ps-3">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                        increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      
      
    
    </div>
  );
};

export default Experience;
