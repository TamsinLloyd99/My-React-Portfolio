import React from "react";
import ProfileImage from "../Images/Profile.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="container">
        <img className="profile-image" src={ProfileImage} alt="Profile" />
        <section className="hero">
          {/* <div className="jumbotron container" id="Jumbotron"> */}
          <div className="row">
            <h1 className="display-5">About Me</h1>
            <div className="profile"></div>
            <p>
              {" "}
              Hello, I'm Tamsin, a passionate front-end web developer based in
              London. Formerly an elementary school teacher, I made a
              significant career shift to pursue my love for coding and design.
              Currently dedicated to refining my skills, I aspire to create
              engaging and user-friendly web experiences. My journey into the
              tech world has been fueled by a blend of curiosity and creativity.
              When I'm not immersed in code, you'll find me experimenting with
              new recipes in the kitchen, indulging in my love for crocheting,
              exploring pottery, or nurturing my ever-growing collection of
              indoor plants. Originally from the Orkney Isles, the connection to
              nature and my summers spent there have profoundly influenced my
              work. I strive to incorporate elements of simplicity, beauty, and
              functionality into my projects, creating digital landscapes that
              echo the wonders of the natural world. Feel free to explore my
              portfolio and get a glimpse of the unique blend of my teaching
              background and newfound tech skills. Let's connect and share our
              passions!{" "}
            </p>
          </div>
          {/* </div> */}
        </section>

        <br></br>
        <section className="skills">
          <h1 className="display-5">Technical Skills:</h1>
          <ul>
            <li>
              <strong> Front-End Development:</strong>
              <p>
                {" "}
                Proficient in building responsive and dynamic user interfaces
                using modern web technologies such as HTML, CSS, and JavaScript.
                Experienced in leveraging popular frameworks like React to
                create interactive and efficient web applications.
              </p>
            </li>
            <li>
              <strong>UI/UX Design:</strong>
              <p>
                A keen eye for design principles, with a focus on creating
                visually appealing and user-friendly interfaces. Skilled in
                translating design mockups into pixel-perfect, functional web
                elements.
              </p>
            </li>
            <li>
              <strong> Web Technologies:</strong>
              <p>
                Familiar with various web technologies, including RESTful APIs,
                AJAX, and third-party libraries. Capable of integrating external
                services and data sources to enhance web application
                functionality.
              </p>
            </li>
            <li>
              <strong>Version Control:</strong>
              <p>
                Proficient in using version control systems like Git to manage
                and track changes in code repositories, ensuring collaboration
                and codebase integrity.
              </p>
            </li>
            <li>
              <strong>Responsive Design:</strong>
              <p>
                Experienced in implementing responsive design principles to
                ensure optimal viewing experiences across a variety of devices
                and screen sizes.
              </p>
            </li>
          </ul>
          <br></br>
          <h1 className="display-5">Soft Skills:</h1>
          <ul>
            <li>
              <strong>Problem-Solving: </strong>
              <p>
                Adept at identifying and solving complex problems with a logical
                and analytical approach. Enjoys tackling challenges and finding
                innovative solutions.
              </p>
            </li>
            <li>
              <strong>Collaboration:</strong>
              <p>
                Strong team player with excellent communication skills.
                Comfortable collaborating with cross-functional teams to achieve
                project goals.
              </p>
            </li>
            <li>
              <strong>Adaptability:</strong>
              <p>
                Quick learner with a flexible mindset, able to adapt to evolving
                technologies and industry trends. Open to exploring new tools
                and frameworks to enhance skillset.
              </p>
            </li>
            <li>
              <strong> Attention to Detail:</strong>
              <p>
                Meticulous in writing clean, maintainable code and ensuring
                high-quality outputs. Pays attention to details to deliver
                polished and error-free applications.
              </p>
            </li>
            <li>
              <strong>Continuous Learning:</strong>
              <p>
                Passionate about staying up-to-date with the latest advancements
                in web development and design. Actively engaged in ongoing
                learning through online courses, workshops, and community
                involvement to enhance skill proficiency and contribute to the
                ever-evolving tech landscape.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
