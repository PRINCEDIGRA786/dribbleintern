import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Imageupload from './Imageupload';
import Usercon from '../contextapi/Usercontext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const context = useContext(Usercon);
    const { setUserData, createuser, userdata, sendEmail } = context;

    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
        setDisabled(value === '');
    };

    return (
        <>
            <div className='ml-10 md:ml-20 flex space-x-2 items-center pt-4'>
                <h1 className='text-3xl font-cursive text-pink-500 font-extrabold'>
                    dribble
                </h1>
                <div className='bg-slate-200 p-2 align-middle h-9'>
                    <MdOutlineKeyboardArrowLeft className='h-5 w-5' />
                </div>
            </div>
            <div className='mx-[10%] md:mx-[27%]'>
                <div className='space-y-3 pt-4'>
                    <h1 className='text-3xl font-extrabold'>Welcome! Let's create your profile</h1>
                    <p className='text-sm text-[#383838]'>Let others get to know you better! You can do these later</p>
                </div>
                <div className='pt-4'>
                    <h2 className='text-lg font-extrabold'>Add an avatar</h2>
                </div>
                <div className='py-6'>
                    <Imageupload />
                </div>
                <div className='pt-4 space-y-4'>
                    <h2 className='text-lg font-extrabold'>Add your location</h2>
                    <input
                        type="text"
                        placeholder="Enter a location"
                        value={location}
                        onChange={handleLocationChange}
                        className="border-b border-gray-400 w-[40vw] text-xs lg:text-sm focus:border-blue-500 outline-none"
                        />
                </div>
                <div className='pt-8 space-y-2'>
                    <button
                        className='text-white font-semibold w-40 lg:w-60 p-2 px-2 bg-pink-600 disabled:bg-pink-300'
                        onClick={async () => {
                            
                             setUserData({ "location": location })
                            
                            if (!disabled ) {
                                // createuser(userdata);
                                sendEmail();
                                if(createuser(userdata)){
                                    alert("profile created successfully")
                                    navigate('/vpage')
                                }
                            }
                        }}
                        disabled={disabled}>Next</button>
                    {!disabled && <p className='text-sm font-semibold text-[#383838]'>or Press RETURN</p>}
                </div>
            </div>
        </>
    );
}
