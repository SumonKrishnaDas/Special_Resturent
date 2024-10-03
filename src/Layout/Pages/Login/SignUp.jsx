import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
              Swal.fire({
                    title: "The user has been successfully created.",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  });

            })
            .catch(error => {
                console.error("Error during sign up:", error.message);
            });
    };

    return (
        <>
        <Helmet>
            <title>SignUp</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className="input input-bordered"
                            />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className="input input-bordered"
                            />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                })}
                                placeholder="Password"
                                className="input input-bordered"
                            />
                            {errors.password?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be at least 10 characters long</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercase letter, one lowercase letter, one number, and one special character</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a><Link to="/login">Alredy Have a Account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;
