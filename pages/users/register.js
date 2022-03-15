import axios from "axios";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const [message, setMessage] = useState();
    const username = useRef();
    const email = useRef();
    const password = useRef();
    useEffect(() => {
        // ! get the user info  from the server (the real user)
        axios
            .get("/api/users")
            .then((res) => {
                setLoading(false);
                setUser(res.data.user);
                console.log(user);
            })
            .catch((error) => console.log(error));
    }, []);

    // ! handle the form submition
    const handleSubmitForm = (e) => {
        e.preventDefault();

        // ! get user info from the form.
        let usernameValue = username.current.value;
        let emailValue = email.current.value;
        let passwordValue = password.current.value;

        // ! check if the user exist or not.
        if (
            usernameValue === user.username &&
            emailValue === user.email &&
            passwordValue === user.password
        ) {
            console.log("authenticate");
        } else {
            console.log("not authenticate");
        }
    };

    return (
        <>
            <div>{message && message.success}</div>
            <form
                className='bg-slate-700 w-96 m-auto h-auto mt-10  items-center flex flex-col'
                onSubmit={(e) => {
                    handleSubmitForm(e);
                }}
            >
                <div className='w-full border-2 border-slate-600'>
                    <input
                        ref={username}
                        type='text'
                        name='username'
                        placeholder='Username'
                        id=''
                        className='w-full bg-slate-700 px-4 py-2 '
                    />
                </div>
                <div className='w-full border-2 border-slate-600'>
                    <input
                        ref={email}
                        type='text'
                        name='email'
                        placeholder='Email'
                        id=''
                        className='w-full bg-slate-700 px-4 py-2'
                    />
                </div>
                <div className='w-full border-2 border-slate-600 hover:outline-none focus:outline-none focus:border-none'>
                    <input
                        ref={password}
                        type='text'
                        name='password'
                        placeholder='Password'
                        id=''
                        className='w-full bg-slate-700 px-4 py-2'
                    />
                </div>
                <button
                    onClick={(e) => {
                        handleSubmitForm(e);
                    }}
                    type='submit'
                    className='bg-gray-400 text-slate-800 px-6  py-2 mt-5 rounded-lg hover:bg-slate-600 hover:text-white hover:scale-110 transition-all duration-100'
                >
                    Sign Up
                </button>
                <div className='my-5'>
                    I have aleardy an account{" "}
                    <Link href='/users/login'>
                        <a className='bg-gray-400 text-slate-800 px-5 py-1 mt-5 rounded-lg hover:bg-slate-600 hover:text-white hover:scale-110 transition-all duration-100'>
                            Sign In
                        </a>
                    </Link>
                </div>
            </form>
        </>
    );
};

export default Register;
