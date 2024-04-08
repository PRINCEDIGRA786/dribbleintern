import React, { useContext, useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Usercon from '../contextapi/Usercontext';
import { useNavigate } from 'react-router-dom';

export default function Purpose() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [purpose, setPurpose] = useState([]);
    const context = useContext(Usercon);
    const { setUserData } = context;
    const navigate = useNavigate();

    const onSelect = (value) => {
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
            setSelectedOptions([...selectedOptions, value]);
            if (value === 'first') {
                setPurpose([...purpose, "I'm a designer looking to share my work"]);
            } else if (value === 'second') {
                setPurpose([...purpose, "I'm a designer looking to share my designer"]);
            } else {
                setPurpose([...purpose, "I'm a designer looking for design inspiration"]);
            }
        }
    };

    const isOptionSelected = (value) => {
        return selectedOptions.includes(value);
    };

    return (
        <>
            <div className='ml-10 md:ml-20 flex space-x-3 items-center pt-4'>
                <h1 className=' text-xl lg:text-3xl font-cursive text-pink-500 font-extrabold'>
                    dribble
                </h1>
                <div className='bg-slate-200 p-2 align-middle h-8 lg:h-9'>
                    <MdOutlineKeyboardArrowLeft className='lg:h-5 lg:w-5 h-3 w-3' />
                </div>
            </div>
            <div className='text-center py-2 space-y-4 md:mt-4'>
                <h1 className=' text-xl lg:text-3xl font-extrabold'>What brings you to Dribble?</h1>
                <p className='lg:text-sm text-xs text-[#383838]'>Select the options that best describe you. Don't worry, you can explore other options later.</p>
            </div>
            <div className='justify-center pt-16 lg:flex-row flex-col flex space-y-10 lg:space-y-0 md:space-x-10'>
                <div className={`relative h-72 md:w-80  group hover:cursor-pointer border-2 text-center ${isOptionSelected('first') ? 'border-red-500' : 'border-slate-300'} p-5 rounded-xl`} onClick={() => { onSelect('first') }}>
                    <div className="relative overflow-hidden h-[55%] w-[80%] mx-auto transition-transform duration-300 transform group-hover:-translate-y-20">
                        <img src={require("../pics/1.jpg")} className='absolute inset-0 w-full h-full object-cover z-10' />
                    </div>
                    <h2 className='text-lg px-4 font-extrabold transition-transform duration-300 transform group-hover:-translate-y-20'>I'm a designer looking to share my work</h2>
                    <p className='text-[#383838] hidden py-3 group-hover:block text-sm transition-transform duration-300 transform group-hover:-translate-y-20'>With over 70 million shots from a vast community of designers, Dribble is the leading source for design inspiration.</p>
                    <div className={`my-2 mx-auto h-6 w-6 border-2 border-slate-300 ${isOptionSelected('first') ? 'bg-red-500' : 'bg-white'} rounded-full p-3 transition-transform duration-300 transform group-hover:-translate-y-20`}>
                        {isOptionSelected('first') && <i className="fa-solid fa-check text-white -translate-y-3 -translate-x-[6px]"></i>}
                    </div>
                </div>
                <div className={`relative h-72 md:w-80  group hover:cursor-pointer border-2 text-center ${isOptionSelected('second') ? 'border-red-500' : 'border-slate-300'} p-5 rounded-xl`} onClick={() => { onSelect("second") }}>
                    <div className="relative overflow-hidden h-[55%] w-[80%] mx-auto transition-transform duration-300 transform group-hover:-translate-y-20">
                        <img src={require("../pics/2.jpg")} className='absolute inset-0 w-full h-full object-cover z-10' />
                    </div>
                    <h2 className='text-lg px-4 font-extrabold transition-transform duration-300 transform group-hover:-translate-y-20'>I'm looking to hire a designer </h2>
                    <p className='text-[#383838] hidden py-3 group-hover:block text-sm transition-transform duration-300 transform group-hover:-translate-y-20'>With over 70 million shots from a vast community of designers, Dribble is the leading source for design inspiration.</p>
                    <div className={`my-2 mx-auto h-6 w-6 border-2 border-slate-300 ${isOptionSelected('second') ? 'bg-red-500' : 'bg-white'}  rounded-full p-3 transition-transform duration-300 transform group-hover:-translate-y-20`}>
                        {isOptionSelected('second') && <i className="fa-solid fa-check text-white -translate-y-3 -translate-x-[6px]"></i>}
                    </div>
                </div>
                <div className={`relative h-72 md:w-80  group hover:cursor-pointer border-2 text-center ${isOptionSelected('third') ? 'border-red-500' : 'border-slate-300'} p-5 rounded-xl`} onClick={() => { onSelect("third") }}>
                    <div className="relative overflow-hidden h-[55%] w-[80%] mx-auto transition-transform duration-300 transform group-hover:-translate-y-20">
                        <img src={require("../pics/3.jpg")} className='absolute inset-0 w-full h-full object-cover z-10' />
                    </div>
                    <h2 className='text-lg px-4 font-extrabold transition-transform duration-300 transform group-hover:-translate-y-20'>I'm looking for design inspiration </h2>
                    <p className='text-[#383838] hidden py-3 group-hover:block text-sm transition-transform duration-300 transform group-hover:-translate-y-20'>With over 70 million shots from a vast community of designers, Dribble is the leading source for design inspiration.</p>
                    <div className={`my-2 mx-auto h-6 w-6 border-2 border-slate-300 ${isOptionSelected('third') ? 'bg-red-500' : 'bg-white'}  rounded-full p-3 transition-transform duration-300 transform group-hover:-translate-y-20`}>
                        {isOptionSelected('third') && <i className="fa-solid fa-check text-white -translate-y-3 -translate-x-[6px]"></i>}
                    </div>
                </div>
            </div>
            <div className='pt-6 text-center space-y-2'>
                {selectedOptions.length > 0 && <h1 className='font-semibold text-md'>Anything else? You can select multiple</h1>}
                <button className='bg-pink-600 disabled:bg-pink-300 p-3 font-extrabold text-white w-40 rounded-lg' disabled={selectedOptions.length === 0}
                    onClick={() => {
                        if (selectedOptions.length !== 0) {
                            setUserData({ "purpose": purpose });
                            navigate('/profile');
                        }
                    }}>Finish</button>
                {selectedOptions.length > 0 && <h1 className='text-sm font-semibold text-[#383838]'>or Press RETURN</h1>}
            </div>
        </>
    );
}
