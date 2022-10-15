import axios from 'axios';
import React,{useEffect} from 'react';
function MatchedCouple() {
    let randomImage = 'https://source.unsplash.com/random/400x400';
    return(
        <div className="w-full flex flex-col justify-center"> 
            It's matched
            <img className="max-h-[25vw] rounded-lg object-scale-down" src={randomImage} alt="Profile photo of first user" />
        </div>
    );
}


export default MatchedCouple