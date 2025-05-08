import React from "react";
// import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ContactKeeper from "../../assets/img/projects/Contact_keeper.jpg";
import L_GetGitHubInfo from "../../assets/img/projects/Github_Finder.jpg";
import L_Booklist from "../../assets/img/projects/Book_list.jpg";
import L_Itlogger from "../../assets/img/projects/it-logger.jpg";
import L_FoodOrder from "../../assets/img/projects/foodorder.jpg";


// skills

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaProjectDiagram } from 'react-icons/fa';

import "./projects-timeline.styles.css";

const TimeLine = () => {
    return (
      <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <VerticalTimeline>
            {/* Food Order  */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/05/2025"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<FaProjectDiagram />}
          >
            <h3 className="vertical-timeline-element-title">Food Order</h3>
            <img src={L_FoodOrder} alt="Contact Keeper" className="img-fluid" />
            <p><strong>Description:</strong> Can Order Food using MERN stack.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>Select and order food</li>
              <li>Real-time API calls with backend</li>
            </ul>
            <p><strong>Tech used:</strong> React, Node.js, Express, MongoDB</p><br/>
            <div>
            <a href="https://github.com/bhagyaadvik1993/food-order-app.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-secondary">SOURCE CODE</button>
                </a>
                
            </div>
          </VerticalTimelineElement>
          {/* Contact Keeper */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="20/03/2024"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<FaProjectDiagram />}
          >
            <h3 className="vertical-timeline-element-title">Contact Keeper</h3>
            <img src={L_ContactKeeper} alt="Contact Keeper" className="img-fluid" />
            <p><strong>Description:</strong> This app keeps contact list of each registered user using the MERN stack.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>Hold contact information</li>
              <li>Real-time API calls with backend</li>
            </ul>
            <p><strong>Tech used:</strong> React, Node.js, Express, MongoDB</p><br/>
            <div>
            <a href="https://github.com/Bhagy-advik/Contact-keeper.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-secondary">SOURCE CODE</button>
                </a>
                
             
            </div>
          </VerticalTimelineElement>
  
          {/* GitHub Info */}
          <VerticalTimelineElement
            date="19/09/2023"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<FaProjectDiagram />}
          >
            <h3 className="vertical-timeline-element-title">Get GitHub Info</h3>
            <img src={L_GetGitHubInfo} alt="GitHub Info" className="img-fluid" />
            <p><strong>Description:</strong> Search GitHub users and view their public profiles using GitHub API.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>Search GitHub profiles</li>
              <li>Real-time API calls</li>
            </ul>
            <p><strong>Tech used:</strong> HTML5, CSS3, React, GitHub API</p><br/>
            <div>
        
                <a href="https://github.com/Bhagy-advik/GithubFinder.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-secondary">SOURCE CODE</button>
                </a>
              {/* <UrlButton href="https://githubfinder23456.netlify.app/" target="_blank">SEE LIVE</UrlButton> */}
              {/* <UrlButton href="https://github.com/Bhagy-advik/GithubFinder.git" target="_blank">SOURCE CODE</UrlButton> */}
            </div>
          </VerticalTimelineElement>
  
          {/* Book List */}
          <VerticalTimelineElement
            date="21/01/2022"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<FaProjectDiagram />}
          >
            <h3 className="vertical-timeline-element-title">Book List App</h3>
            <img src={L_Booklist} alt="Book List" className="img-fluid" />
            <p><strong>Description:</strong> Save and manage book entries.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>Register new books</li>
              <li>Delete and track entries</li>
            </ul>
            <p><strong>Tech used:</strong> HTML5, Bootstrap 4, JavaScript</p><br/>
            <div>
            <a href="https://github.com/Bhagy-advik/Book-list.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-secondary">SOURCE CODE</button>
                </a>
                
              {/* <UrlButton href="https://github.com/Bhagy-advik/Book-list.git" target="_blank">SOURCE CODE</UrlButton> */}
            </div>
          </VerticalTimelineElement>
  
          {/* IT Logger */}
          <VerticalTimelineElement
            date="14/03/2021"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<FaProjectDiagram />}
          >
            <h3 className="vertical-timeline-element-title">IT Logger</h3>
            <img src={L_Itlogger} alt="IT Logger" className="img-fluid" />
            <p><strong>Description:</strong> React app to track IT department tasks using JSON Server.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>Track IT issues</li>
              <li>Mock backend with JSON Server</li>
            </ul>
            <p><strong>Tech used:</strong> HTML5, CSS3, Bootstrap 4, React, Redux</p><br/>
            <div>
                <a href="https://github.com/Bhagy-advik/it-logger.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-secondary">SOURCE CODE</button>
                </a>
              {/* <UrlButton href="https://github.com/Bhagy-advik/it-logger.git" target="_blank">SOURCE CODE</UrlButton> */}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  };
  

export default TimeLine;
