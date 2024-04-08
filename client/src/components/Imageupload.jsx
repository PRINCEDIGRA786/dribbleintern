import React, { useState, useRef, useContext } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Usercon from '../contextapi/Usercontext';

export default function Imageupload() {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const context=useContext(Usercon);
    const{setUserData}=context;
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage( file);
        setTimeout(() => {
            
            handleImageUpload();
        }, 1000);
    };

    const handleImageUpload = async () => {
        const imageData = new FormData();
        imageData.append('file', image);
        imageData.append('cloud_name', 'portfoli');
        imageData.append('upload_preset', 'portfolio');
    
        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/portfoli/image/upload', {
                method: 'POST',
                body: imageData,
                // Remove 'mode' option or set it to 'cors' to ensure proper CORS handling
            });
    
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
    
            const data = await response.json();
            console.log(data);
            setImage(data.secure_url);
            alert("Uploaded ----");
            setUserData({"profilepic": image});
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    

    const handleChooseImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='flex space-x-3 phone:flex-col space-y-2 phone:space-y-2'>
            <label htmlFor="profileImage" className="relative flex items-center justify-center w-36 h-36 rounded-full overflow-hidden border border-gray-400">
                {image ? (
                    <img src={image} alt="Selected" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <i className="fas fa-camera text-gray-400"></i>
                    </div>
                )}
                <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    ref={fileInputRef}
                    className="absolute inset-0 opacity-0"
                    onChange={handleImageChange}
                />
            </label>
            <div className='space-y-5 pl-7'>
            <button className='p-1 border-[1.2px] h-8 rounded-md border-slate-300 text-[#383838] text-xs font-extrabold' onClick={handleChooseImage}>Choose Image</button>
            <p className='text-xs font-semibold text-[#383838] flex cursor-pointer' onClick={()=>{
                setImage("https://cdn-icons-png.flaticon.com/512/666/666201.png");
                setUserData({"profilepic": "https://cdn-icons-png.flaticon.com/512/666/666201.png"});}}><MdOutlineKeyboardArrowLeft className='h-4 w-4 rotate-180'/>Or choose one of our defaults</p>      
            </div>
            {/* <button className='p-2 bg-green-400 text-xs font-extrabold' onClick={handleImageUpload}>Upload</button> */}
        </div>
    );
}
