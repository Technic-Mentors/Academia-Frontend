import React, { useContext, useEffect, useState } from "react";
// import FrontendDeveloper from "../img/front-end-developer-course.avif";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import courseEnroll from "../img/course-enrollment.avif";
import registerInstructor from "../img/instructor-register.avif";
import schoolRegister from "../img/school-register.avif";
import { useParams, Link } from "react-router-dom";
import MyContext from "../contexts/Mycontexts";
import frontendDeveloper from "../img/front-end-developer-course.avif";

function Coursedetail() {
  const { allCourse } = useContext(MyContext);
  const [Title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");
  const { title } = useParams();
  const pureTitle = title.replace(/-/g, " ");

  const getCourse = async () => {
    const res = await fetch(
      `https://accademia-backend.vercel.app/api/auth/getcorse/${Title}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setCategory(data.categoryy);
    setCourse(data.courseTitle);
  };
  const getCorse = async () => {
    const res = await fetch(
      `https://accademia-backend.vercel.app/api/auth/getcorse/${pureTitle}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setCategory(data.categoryy);
    setCourse(data.courseTitle);
  };
  useEffect(() => {
    getCourse();
    getCorse();
  }, [pureTitle, Title]);
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <section className="courses-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="course-head py-5 text-dark">
                <h1 className="">{course.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="course-data py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-9">
              <div className="overview bg-white p-3 mb-4">
                <h2>Course Overview</h2>
                <p style={{ fontWeight: "initial" }}>{course.description}</p>

                <ul style={{ lineHeight: "2.5rem", padding: 0, margin: 0 }}>
                  <li>
                    <CheckCircleIcon
                      className="list-icon"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    &nbsp;Course Instructor:{" "}
                    <strong> {course.instructorName} </strong>
                  </li>
                  <li>
                    <CheckCircleIcon
                      className="list-icon"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    &nbsp;Course Duration: <strong> {course.duration} </strong>
                  </li>
                  <li>
                    <CheckCircleIcon
                      className="list-icon"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    &nbsp;Course Category:{" "}
                    <strong> {category.category} </strong>
                  </li>
                  {(course.days && course.days!== "undefined") && (

                  <li>
                    <CheckCircleIcon
                      className="list-icon"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    &nbsp;Classes In A Week:{" "}
                    <strong> {course.days} </strong>
                  </li>
                  )}
                  {(course.timeSlot && course.timeSlot!== "undefined") && (

                  <li>
                    <CheckCircleIcon
                      className="list-icon"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    &nbsp;Class Timings:{" "}
                    <strong> {course.timeSlot} </strong>
                  </li>
                  )}
                </ul>
              </div>

              <div className="course-img">
                <img src={course.image} alt="" className="img-fluid" />
              </div>
              <div className="row">
                {course.learning && (
                  <div className="col-md-5 listing mt-4">
                    <div className="learning-outcomes py-2">
                      <h3>{course.moduleName1}</h3>
                      <ul
                        style={{ lineHeight: "2.5rem", padding: 0, margin: 0 }}
                      >
                        {course.learning &&
                          course.learning.split("\n").map((line, lineindex) => {
                            return (
                              <li key={lineindex}>
                                <CheckCircleIcon className="list-icon" />
                                &nbsp;{line}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                )}

                {course.content && (
                  <div className="col-md-5 listing mt-4">
                    <div className="learning-outcomes py-2">
                      <h3>{course.moduleName2}</h3>
                      <ul
                        style={{ lineHeight: "2.5rem", padding: 0, margin: 0 }}
                      >
                        {course.content &&
                          course.content.split("\n").map((line, lineindex) => {
                            return (
                              <li key={lineindex}>
                                <CheckCircleIcon className="list-icon" />
                                &nbsp;{line}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                )}

                <div
                  className="py-3 mt-3 text-center text-white"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    borderRadius: "25px",
                  }}
                >
                  <h4>To enroll contact our Project Manager HINA IJAZ</h4>
                  {/* <Link to="https://wa.me/923360445963" target="blank" className="lead text-white fw-bold"><WhatsAppIcon />&nbsp;+92 336 0445963</Link> */}

                  <a
                    style={{ color: "#fff", fontWeight: "bold" }}
                    href={`https://wa.me/923360445963?text=Greetings, I want to register for the course: ${encodeURIComponent(
                      course.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    &nbsp;Contact Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 course-cards c1">
              <div className="card enroll-card">
                <Link to="/signin">
                  <div className="enroll-content">
                    <img
                      src={courseEnroll}
                      alt="enroll-in-course"
                      className="img-fluid"
                    />
                    <h3>Want To Enroll In The Course?</h3>
                    <p>
                      Waste no time and be part of the best online learning
                      platform!
                    </p>
                    <button>Enroll Now</button>
                  </div>
                </Link>
              </div>

              <div className="card enroll-card c2">
                <Link to="/signin">
                  <div className="enroll-content">
                    <img
                      src={registerInstructor}
                      alt="register-as-instructor"
                      className="img-fluid"
                    />
                    <h3>Join Today And Teach Globally!</h3>
                    <p>
                      Express your teaching skills in front of students at a
                      bigger stage.
                    </p>
                    <button>Register Now</button>
                  </div>
                </Link>
              </div>
              <div className="card enroll-card c3">
                <Link to="/signin">
                  <div className="enroll-content">
                    <img src={schoolRegister} alt="" className="img-fluid" />
                    <h3>Your School Needs Recognition!</h3>
                    <p>
                      Register your school on Mentors Academia and get found!
                    </p>
                    <button>Register Your School</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <h1>People Also Search For</h1>
          {allCourse &&
            allCourse
              .filter((course) => course.categoryId === category._id)
              .map((course) => {
                return (
                  <div className="col-md-3 py-3">
                    <Link
                      to={`/course-details/${course.title.replace(/ /g, "-")}`}
                      onClick={() => setTitle(course.title)}
                    >
                      {" "}
                      <div className="card courses">
                        <div className="course-content">
                          <img
                            src={
                              course.image ? course.image : frontendDeveloper
                            }
                            alt=""
                            className="img-fluid"
                            style={{ height: "170px", width: "100%" }}
                          />
                        </div>
                        <div className="course-title p-2 mt-2">
                          <h3>{course.title.slice(0, 35) + "..."}</h3>
                          <hr />
                          <p>
                            Duration: <b>{course.duration}</b>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Coursedetail;
