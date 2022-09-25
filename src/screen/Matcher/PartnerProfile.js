import axios from 'axios';
import React,{useEffect} from 'react';
// import image1 from '../../assets/placeholders/1.jpg'
function PartnerProfile() {
    let randomImage = 'https://source.unsplash.com/random/400x400';
    // useEffect(() =>{
    //     // axios.get("https://source.unsplash.com/random").then(res =>{
    //     //     console.log(res);
    //     //     // randomImage = res.data;
    //     //     randomImage = "https://source.unsplash.com/random"
    //     })
    // },[])
    return(
        <div className="w-full flex flex-col justify-center"> 
            <img className="max-h-[25vw] rounded-lg object-scale-down" src={randomImage} alt="Profile photo of first user" />
            Partner's Profile here
        </div>
    );
}


export default PartnerProfile