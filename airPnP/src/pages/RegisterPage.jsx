import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async(e)=>{
        e.preventDefault();
       await axios.post('/register',{
        name,
        email,
        password
       });
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={submitHandler}>
                    <input type="text" placeholder="Alpha" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member? <Link to={'/login'} className="underline text-black">Login</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage