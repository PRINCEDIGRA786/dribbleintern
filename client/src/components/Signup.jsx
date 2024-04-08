import React, { useContext } from 'react';
import { useState } from 'react';
import Usercon from '../contextapi/Usercontext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        agreeTerms: false,
    });
    const [errorinput, setErrorinput] = useState('');
    const [error, setError] = useState("");
    const isFormValid = () => {
        const requiredFields = ['name', 'username', 'email', 'password', "agreeTerms"];
        for (const field of requiredFields) {
            if (!formData[field]) {
                setError(`Please fill in the ${field} field.`);
                setErrorinput(`${field}`);
                return false;
            }
        }
        return true;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = () => {
        setFormData({
            ...formData,
            agreeTerms: !formData.agreeTerms,
        });
    };

    const context = useContext(Usercon);
    const { setUserData } = context;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setError("fine submited");
            setUserData(formData);
            navigate('/purpose');
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/3 flex items-center">
                <img src={require("../pics/signup.jpg")} alt="Image" className="h-full w-full object-cover" />
            </div>
            <div className="md:w-2/3 bg-gray-100 flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <div className="text-right font-extrabold text-black mb-4">
                        Already a member? <a href="#" className="text-blue-500">Sign in</a>
                    </div>
                    <h1 className="text-2xl font-extrabold mb-6">Sign up to Dribble</h1>
                    {error && <p className='text-red-400 text-sm font-extrabold mt-2'>&#x2022; {error}</p>}
                    <form>
                      <div className='flex lg:flex-row lg:space-x-4 flex-col space-x-0'>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-md font-extrabold">Name</label>
                            <input type="text" id="name" name="name" placeholder='Name'
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 ${errorinput === 'name' ? "bg-red-100" : "bg-[#bebbbb46] "}
                                    p-2 w-full pl-4 font-semibold focus:outline-none rounded-lg`} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-md font-extrabold">Username</label>
                            <input type="text" id="username" name="username" placeholder='Username'
                                value={formData.username}
                                onChange={handleChange}
                                className={`mt-1 ${errorinput === 'username' ? "bg-red-100" : "bg-[#bebbbb46] "}
                                    p-2 w-full pl-4 font-semibold focus:outline-none rounded-lg`} />
                        </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-md font-extrabold">Email</label>
                            <input type="email" id="email" placeholder='Email' name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 ${errorinput === 'email' ? "bg-red-100" : "bg-[#bebbbb46] "}
                                    p-2 w-full pl-4 font-semibold focus:outline-none rounded-lg`} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-md font-extrabold">Password</label>
                            <input type="password" id="password" name="password" placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                                className={`mt-1 ${errorinput === 'password' ? "bg-red-100" : "bg-[#bebbbb46] "}
                                    p-2 w-full pl-4 font-semibold focus:outline-none rounded-lg`} />
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-6 w-6 text-blue-500"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="ml-2 text-gray-700 text-sm font-semibold">
                                    Creating an account means you're okay with our
                                    <span className="text-blue-700">Terms of Services, Privacy Policy</span>
                                    and default Notification Settings
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
