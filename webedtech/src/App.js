import course1Image from './c.jpeg';
import course2Image from './rea.jpg';
import course3Image from './pyth.jpeg';

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from './LoginForm';
import Login  from './LoginForm';
import Register  from './LoginForm';

ReactDOM.render(
  <React.StrictMode>
    {/* Your existing code */}
    <LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);


function App() {
  return (
    
    <div className="app">
      <head>
        <title>My Web App</title>
      </head>
      <body>
      
      <div id="root"></div>

      <script src="path/to/react.js"></script>
      <script src="path/to/react-dom.js"></script>
      <script src="path/to/your-react-app.js"></script>

      <header>
        <h1>Ed Tech Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><button onclick="#">Logout</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h2>Welcome to our Ed Tech platform!</h2>
            <p>Explore our courses and enhance your learning experience.</p>
            <a href="#" className="cta-button">Get Started</a>
          </div>
        </section>
        <section>
          <h2>Popular Courses</h2>
          <div className="course-cards">
            <div className="course-card">
              <img src={course1Image} alt="Course 1" />
              <h3>Course 1</h3>
              <p>Course description goes here.</p>
              <a href="#">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src={course3Image} alt="Course 2" />
              <h3>Course 2</h3>
              <p>Course description goes here.</p>
              <a href="#">Enroll Now</a>
            </div>
            <div className="course-card">
              <img src={course2Image} alt="Course 3" />
              <h3>Course 3</h3>
              <p>Course description goes here.</p>
              <a href="#">Enroll Now</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p></p>
      </footer>
      </body>
      
    </div>
  );
}

export default App;

