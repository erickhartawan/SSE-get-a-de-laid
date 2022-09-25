import axios from 'axios';
import React,{useEffect} from 'react';
import { Masonry } from '@mui/lab';
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
    let name = "Elon Musk"; // string
    let gender = "Male"; // string
    let age = 51; // number
    let interest = ['Electric Cars', 'Space Colonies', 'Tunnels', 'AI']; // array of text
    let photos = ['https://i.imgur.com/aVTkclb.jpeg',
                'https://i.imgur.com/7gm1pfG.jpeg',
                'https://i.imgur.com/0f1XJOA.jpeg',
                'https://i.imgur.com/W3GgSlH.jpeg',
                'https://i.imgur.com/dYWukdq.png',
                'https://i.imgur.com/PtbFyi9.jpeg'

            ]; // array of url
    let travelInterest = ["Flinders Range", "Mount Lofty", "The University of Adelaide"]; // array of text
    
    return(
        <div className="w-full flex flex-col justify-start items-start p-4"> 
            <img className="max-h-[25vw] rounded-lg object-scale-down flex-start" src={randomImage} alt="Profile photo of first user" />
            <div>{name}</div>
            <div>{gender}</div>
            <div>{age}</div>
            {interest.map((each,index) =>{
                return <div key={index}>{each}</div>
            })}
            <div className="photos masonary">
                <Masonry
                    columns={3}
                    spacing={2}
                    defaultHeight={300}
                >
                        {photos.map((each,index) => (
                            <div key={index}> 
                                <img src={each}  />
                            </div>
                        ))}
                </Masonry>
            </div>
            {travelInterest.map((each,index) =>{
                return <div key={index}>{each}</div>
            })}
        </div>  

        
    );
}


export default PartnerProfile