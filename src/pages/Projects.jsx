import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// projects imports
import Blog from "../assets/projects/blog.png";
import ecommerce from "../assets/projects/e-commerce.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog Website"
              description="
              Embark on a cutting-edge blogging journey with our React-based blog app, seamlessly integrated with Tailwind CSS for a sleek and responsive design. Elevate user experience with Firebase, utilizing its robust database for efficient data management and seamless Google authentication to enhance user security. Immerse your users in a dynamic interface with eye-catching loading animations, ensuring a smooth and engaging browsing experience. Stay connected with your audience through advanced features like email notifications powered by EmailJS, keeping your users informed and engaged with the latest updates. The integration of Toasterify adds a touch of elegance to your app, providing sleek and customizable notifications that keep users in the loop without compromising on design aesthetics. T
              "
              ghLink="https://github.com/svivek19/react-blog-app.git"
              demoLink="https://react-blog-vivek.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Dress Shop"
              description="
              I am currently working on developing an e-commerce dress shop utilizing React, Tailwind CSS, and Firebase for authentication. The project aims to provide a seamless and secure shopping experience for users. Firebase Authentication is integrated to ensure a reliable and user-friendly login system. The UI is styled using Tailwind CSS, offering a responsive and visually appealing design for the dress shop. To enhance user experience, the project incorporates Toastify for displaying notifications, ensuring users are informed about their actions, such as successful logins or item additions to the cart. The shopping cart functionality is implemented to allow users to easily manage and review their selected items before proceeding to checkout. 
              "
              ghLink="https://github.com/svivek19/react-ecommerce.git"
              demoLink="https://react-dress-shop-ecommerce-vvk.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
