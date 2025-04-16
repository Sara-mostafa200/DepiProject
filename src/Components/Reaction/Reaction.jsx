import { useState,  } from "react";

const Reaction = () => {

    const [likes, setLikes] = useState(0);
    const [isVisible , setIsVisible] = useState(false);
    const [heartCount , setHeartCount] = useState(0)
    const [handCount , setHandCount] = useState(0)
    const [lampCount , setLampCount] = useState(0)
    const [laughCount , setLaughCount] = useState(0)

    const handleLike = () => {
        setLikes(likes + 1); 
        }
    const handleDislike = () => {
        if (likes>0){
        setLikes(likes - 1);
        }
        };
        const handleEmojiClick = (emojiType) => {
            if (emojiType === 'heart') {
            setHeartCount(heartCount + 1);
            } else if (emojiType === 'hand') {
            setHandCount(handCount + 1);
            } else if (emojiType === 'lamp') {
            setLampCount(lampCount + 1);
            } else if (emojiType === 'laugh') {
                setLaughCount(laughCount + 1);
                }

        };

        


return (
    <div className='flex'>
        <div className="p-2 mt-2">
        <button onClick={handleLike}
        className='  hover:scale-125 transition-transform duration-300' >
            <i className="fa-regular fa-thumbs-up text-white text-2xl"></i>
        </button>
        <span className='text-white p-1 '>{likes}</span> 
        </div>
        <button onClick={handleDislike}
            className=' hover:scale-125 transition-transform duration-300 p-2  mt-3'
            ><i className="fa-regular fa-thumbs-down text-white text-2xl"></i></button>
        <button 
        className="text-xl mt-4 mx-2 pr-2 hover:scale-125 transition-transform duration-300 border-r border-white  h-7" 
        onClick={() => setIsVisible(!isVisible)}>
        <i className="fa-regular fa-face-smile text-white text-3xl"></i>
        </button>
        {isVisible && (
        <div className="flex   mt-3 ">
        <button onClick={() => handleEmojiClick('heart')} className="text-white text-l px-2 m-1 rounded-xl  border border-white h-6  hover:scale-125 transition-transform duration-300 ">
        <i className="fa-solid fa-heart text-pink-600 text-xl"></i> {heartCount}
        </button>
        <button onClick={() => handleEmojiClick('hand')} className="text-white text-l px-2 m-1 rounded-xl  border border-white h-6  hover:scale-125 transition-transform duration-300">
        👋 {handCount}
        </button>
        <button onClick={() => handleEmojiClick('lamp')} className="text-white text-l  px-2 m-1 rounded-xl  border border-white h-6   hover:scale-125 transition-transform duration-300">
        <i className="fa-regular fa-lightbulb text-yellow-400 text-xl"></i> {lampCount}
        </button>
        <button onClick={() => handleEmojiClick('laugh')} className="text-white text-l  px-2 m-1 rounded-xl  border border-white h-6   hover:scale-125 transition-transform duration-300">
        😄 {laughCount}
        </button>
        </div>
    )}
        </div>
    )
}
export default   Reaction ;