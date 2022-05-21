import './Login.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = (username, email, password) => {
        const data = {
            username,
            email,
            password: password
        };
        axios.post('http://localhost:8000/api/v1/dj-rest-auth/login/', data)
            .then((res) => {
                console.log(res);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setMessage(err.response.data.msg.toString());
            })
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values) =>  {
            handleLogin(values.username, values.email, values.password);
        },
        validationSchema: Yup.object({
            username: Yup.string().trim().required("username is required"),
            email: Yup.string().trim().required("email is required"),
            password: Yup.string().trim().required("password is required"),
        })
    });

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /> <br/>
                    {formik.errors.username ? <div>{formik.errors.username} </div> : null}

                    <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /> <br/>
                    {formik.errors.email ? <div>{formik.errors.email} </div> : null}

                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    /> <br/>
                    {formik.errors.password ? <div>{formik.errors.password} </div> : null}
                </div>
                <div hidden={false}>
                    {message}
                </div>
                <div className="RegisterBtn">
                    <button type="submit" disabled={loading}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;