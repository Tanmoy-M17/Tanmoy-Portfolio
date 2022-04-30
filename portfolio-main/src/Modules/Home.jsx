import React from "react";
import CustomNav from "../Components/NavBar";
import { Container, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import CodingSvg from "../Icons/coding.jsx";
import useWindowDimensions from "../utils/dimensionHelper";

// library.add()

const Home = ({ history }) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <CustomNav />
      <div
        className="position-absolute"
        style={{
          height: "100vh",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <Container className="h-100">
          <div className="d-flex h-100">
            <div className={`my-auto ${width > 760 ? "w-50" : ""}`}>
              <div>
                <div className="">
                  <span className="color-customBlueLight h5 font-weight-bold">
                    Hello !
                  </span>
                  <br />
                  <span className="color-customBlue h1 font-weight-bold">
                    I'm Tanmoy Mondal
                  </span>
                  <br />
                  <span className="color-customBlueLight h3">
                    I'm a <span className="font-weight-bold">full stack web</span>{" "}
                    developer
                  </span>
                  <br />
                  <br />
                  <span className="color-customBlueLight h5">
                    {/*
               */}
                    Passionate Full Stack Web Developer with a specialization in MERN stack.
                     Skilled, collaborative and attentive developer with a drive to develop the most relevant
                     products. Always looking forward to learning something new to strengthen skills learned.
                     I enjoy turning complex problems into simple. When I'm not pushing codes, you'll find me cooking,
                     chilling out with friends or working out in the gym. 
                  </span>
                  <br />
                </div>
                <div>
                  <div className="d-flex mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Tanmoy-M17"
                      className="color-customBlue p-0 mr-3"
                    >
                      <FontAwesomeIcon size="2x" icon={faGithubSquare} />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/tanmoy-mondal-73947b233/"
                      className="color-customBlue p-0 mr-3"
                    >
                      <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </a>
                  </div>
                  <br />
                  <Button
                    className="bg-customBlue font-weight-bold shadow border-0"
                    onClick={() => window.open("/resume1.pdf", "_blank")}
                  >
                    Resume
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block ">
              {/* <CodingSvg /> */}
              <Image
                src="images/tanmoy.jpg"
                thumbnail
                fluid
                className="profilePic"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
