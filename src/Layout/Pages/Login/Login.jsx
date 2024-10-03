import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';

    const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const [captchaError, setCaptchaError] = useState('');
    const Navigate=useNavigate();
    const location= useLocation();
    const from =location.state?.from?.pathname||"/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // Handle successful login
                console.log("User signed in:", user);
                Navigate(from,{replace:true})
            })
            .catch(error => {
                console.error("Error during sign in:", error.message);
                // Display error to the user or take further action
            });
    };
    const handleCaptchaValidation = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
            setCaptchaError('');
        } else {
            setDisabled(true);
            setCaptchaError('Captcha is incorrect. Please try again.');
        }
    };
    
      return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleCaptchaValidation} placeholder="Type the captcha" className="input input-bordered" required />
                                {captchaError && <p className="text-red-500">{captchaError}</p>}
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" className="btn btn-success" value="Login" />
                            </div>
                        </form>
                        <p><small>New here?</small> <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
