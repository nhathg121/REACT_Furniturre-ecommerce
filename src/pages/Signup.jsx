// react imports
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup } from "reactstrap";

import ReactLoading from "react-loading";

//styles
import "../styles/login.css";

//router
import { Link } from "react-router-dom";
//title control component
import Helmet from "../components/Helmet/Helmet";

//firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

// firebase config
import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

//toast notification
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
//
//
//
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            // update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: url,
            });
            // store user data into firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email: user.email,
              photoURL: url,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };
  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <span className="d-flex justify-content-center">
                  <ReactLoading
                    type="bubbles"
                    color={"black"}
                    height={"50%"}
                    width={"100px"}
                  />
                </span>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold  mb-4">Signup</h3>

                <Form className="auth__form" onSubmit={signup}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button type="submit" className="buy__btn auth__btn">
                    Create an account
                  </button>
                  <p>
                    Already have an account? <Link to="/login">Login </Link>now
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
