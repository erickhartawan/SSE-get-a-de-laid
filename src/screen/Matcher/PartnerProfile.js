import axios from 'axios';
import React,{useEffect} from 'react';
import { Masonry } from '@mui/lab';
// import image1 from '../../assets/placeholders/1.jpg'
function PartnerProfile() {
    let randomImage = 'https://source.unsplash.com/random/400x400?people';
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
                'https://i.imgur.com/PtbFyi9.jpeg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC3g042dfnfma62D0LdTmDJp3FxCE4t5Tnw&usqp=CAU',
                'https://i0.wp.com/realibleworldnews.com/wp-content/uploads/2021/05/elonmusk.wario_-2.jpg?fit=1196%2C720&ssl=1'


            ]; // array of url
    let travelInterest = ["Flinders Range", "Mount Lofty", "The University of Adelaide"]; // array of text
    
    return(
        <div className="w-full flex flex-col justify-start items-start p-4 bg-slate-100"> 
            <div className="partner-hero-img justify-center align-center w-full">
                <img className="max-h-[25vw] rounded-lg object-scale-down flex-start" src={randomImage} alt="Profile photo of first user" />
            </div>
            <div className="partner-text-info p-2 px-4 mt-10 flex-col bg-slate-100">
                <div className="about-partner-jumbo text-primary font-bold text-3xl"> About this person: </div>
                <div className="partner-main-info mt-2">{name} | {gender} | {age}</div>
                <div className="interest-list flex-col">
                    <h3 className="partner-interest font-semibold text-2xl text-primary pb-2"> Here are the interests of {name}</h3>
                    <ul className="list-disc flex-col">
                        {interest.map((each,index) =>{
                            return <li key={index}>{each}</li>
                        })}
                    </ul>

                </div>
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
        </div>  

        
    );
}


export default PartnerProfile