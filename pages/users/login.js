import Link from "next/link";
import { useState } from "react";

const Login = () => {
    const [loading, setLoading] = useState(false);
    return (
        <form className='bg-slate-700 w-96 m-auto h-auto mt-10  items-center flex flex-col'>
            <div className='w-full border-2 border-slate-600'>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    id=''
                    className='w-full bg-slate-700 px-4 py-2 '
                />
            </div>
            <div className='w-full border-2 border-slate-600'>
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    id=''
                    className='w-full bg-slate-700 px-4 py-2'
                />
            </div>
            <div className='w-full border-2 border-slate-600 hover:outline-none focus:outline-none focus:border-none'>
                <input
                    type='text'
                    name='password'
                    placeholder='Password'
                    id=''
                    className='w-full bg-slate-700 px-4 py-2'
                />
            </div>
            <button
                type='submit'
                className='bg-gray-400 text-slate-800 px-6  py-2 mt-5 rounded-lg hover:bg-slate-600 hover:text-white hover:scale-110 transition-all duration-100'
            >
                Sign In
            </button>
            <div className='my-5'>
                I Dont't have an account{" "}
                <Link href='/users/register'>
                    <a className='bg-gray-400 text-slate-800 px-5 py-1 mt-5 rounded-lg hover:bg-slate-600 hover:text-white hover:scale-110 transition-all duration-100'>
                        Sign Up
                    </a>
                </Link>
            </div>
        </form>
    );
};

export default Login;
