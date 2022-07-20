import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "../style/Login_Register.css";
import axios from 'axios';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import UserSchema from "../schemas/UserRegisterSchema";

const Register = () => {

    const formValue = {name: '', email: '', password: ''};
    const navigate = useNavigate();

    async function handleSubmit(values){
        // store values
        const user = {
            name: values.name,
            email: values.email,
            password: values.password
        };
        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: "https://steps-ua.herokuapp.com/users/signup",
                data: user,
            });
            navigate('/login');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="maindiv">
            <div className="backarrow">
                <Link to={"/login"}>
                    <svg
                        width="15"
                        height="27"
                        viewBox="0 0 15 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.8205 0.620071C14.454 0.0864919 13.7508 -0.148228 13.2549 0.0976033C13.0126 0.217684 0.247861 12.7286 0.112174 12.9789C0.0504629 13.0928 1.58925e-07 13.3272 1.60986e-07 13.5C1.63047e-07 13.6728 0.0504629 13.9072 0.112174 14.0211C0.247861 14.2714 13.0126 26.7823 13.2549 26.9024C13.7508 27.1482 14.454 26.9135 14.8205 26.3799C15.016 26.0955 15.06 25.5643 14.9119 25.2769C14.8645 25.1849 12.1667 22.4974 8.9168 19.3048L3.00784 13.5L8.9168 7.69523C12.1667 4.50256 14.8645 1.81513 14.9119 1.72309C15.06 1.43573 15.016 0.904524 14.8205 0.620071Z"
                            fill="#393C6A"
                        />
                    </svg>
                </Link>
            </div>

            <div style={{height: "2rem"}}>
                <p style={{fontSize: 25, fontFamily: "ManropeBold"}}>
                    Primeira vez na Steps?
                </p>
                <p style={{fontSize: 25, fontFamily: "ManropeBold"}}>
                    Cria uma conta!
                </p>
            </div>
            <section className="form">
                <Formik
                    validateOnBlur
                    initialValues={formValue}
                    validationSchema={UserSchema}
                    onSubmit={handleSubmit}
>
                    {({handleSubmit}) => (
                <Form>
                    <div className="innerForm">
                        <p style={{fontSize: 15}}>Preenche os seguintes campos:</p>
                        <div>
                            <label className="label" for="name">
                                Nome
                            </label>
                            <Field
                                className="input"
                                type="text"
                                id="name" name="name"
                            />
                            <ErrorMessage name="name" component="div"/>
                        </div>

                        <div>
                            <label className="label" for="email">
                                Email
                            </label>
                            <Field className="input" type="text"
                                   id="email" name="email"/>
                            <ErrorMessage name="email" component="div"/>
                        </div>

                        <div>
                            <label className="label" for="password">
                                Password
                            </label>
                            <Field className="input" type="password"
                                   id="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                        </div>

                        {/*<div>
            <label className="label" for="password">
              Repete a password
            </label>
            <input className="input" type="text" id="password" />
          </div>*/}

                        <div style={{paddingTop: "2rem"}}>

                            <button className="blueButton" type="submit" onClick={handleSubmit}>
                                Registar
                            </button>

                        </div>
                    </div>
                </Form>
                    )}
                </Formik>
            </section>
            <div style={{display: "flex", justifyContent: "center"}}>
                <svg
                    width="26"
                    height="9"
                    viewBox="0 0 26 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="4.19831" cy="4.19855" r="4.19831" fill="white"/>
                    <circle cx="21.6182" cy="4.19819" r="4.19831" fill="#393C6A"/>
                </svg>
            </div>
        </div>
    );
};

export default Register;
