import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaGithub,
  FaTruck,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/Modal";
import { FaCheck } from "react-icons/fa";

const Signup = () => {
  const { addUser, checkEmail, checkPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    if (!email | !password) {
      setMessage("Insert your email and password");
      console.log("Insert your email and password");
      return;
    } else if (!checkEmail(email)) {
      setMessage("Insert a valid email");
      console.log("Insert a valid email");
      return;
    } else if (!checkPassword(password)) {
      setMessage("Password must contain 8 characters");
      console.log("Password must contain 8 characters");
      return;
    }
    console.log("User form" + email + password);
    addUser(email, password);
    setSuccess("User account crested successfuly!");
    setModalOpened(true);
    cleanForm();
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  const cleanForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <section className="">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start vh-100"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container mt-5">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="d-flex">
                  <FaTruck size={50} />
                  <h1>&nbsp;Fleet Control</h1>
                </div>
                <h1 className="mb-5 display-3 fw-bold ls-tight">
                  The best way
                  <br />
                  <span className="text-primary">to control your fleet!</span>
                </h1>
                <h4
                  className="fw-light"
                  style={{ color: "hsl(217, 10%, 50.8%)" }}
                >
                  Manage logistics operations efficiently! Access your
                  information from any device and track it in real time
                  operation indicators.
                </h4>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSignup}>
                      <div className="row">
                        <div className="mb-4">
                          <div className="text-center">
                            <h1 className="text-center">&nbsp;Register</h1>
                          </div>
                          <p className="fw-lighter fs-4 text-center">
                            Register to access the platform
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              name="firstName"
                              className="form-control"
                              // value={formData.firstName}
                              // onChange={handleInputChange}
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example2"
                              name="lastName"
                              className="form-control"
                              // value={formData.lastName}
                              // onChange={handleInputChange}
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => [
                            setEmail(e.target.value),
                            setMessage(""),
                          ]}
                          placeholder="Email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          name="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => [
                            setPassword(e.target.value),
                            setMessage(""),
                          ]}
                          placeholder="Password"
                        />
                      </div>

                      <div className="d-flex">
                        <button
                          onClick={handleSignup}
                          className="btn btn-primary btn-block mb-4 w-100"
                        >
                          Register
                        </button>
                      </div>
                      <div className="text-center">
                        <p>
                          Already have an account?{" "}
                          <Link to="/login">Login</Link>
                        </p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <FaFacebook
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></FaFacebook>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <FaGoogle
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></FaGoogle>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <FaTwitter
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></FaTwitter>
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <FaGithub
                            className="bi me-2"
                            width="30"
                            height="30"
                          ></FaGithub>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            open={modalOpened}
            onClose={() => setModalOpened(!modalOpened)}
          >
            <div>
              <FaCheck style={{ color: "#4daf23" }} />
              &nbsp; {success} &nbsp;
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Signup;
