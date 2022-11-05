import axios from 'axios';
import React,{useEffect} from 'react';
import { Masonry } from '@mui/lab';
import OtherUsers from './OtherUsers.json';
import { useSelector } from 'react-redux'
// import image1 from '../../assets/placeholders/1.jpg'
function PartnerProfile(props) {
    const {isOwnProfile,user_id} = props

    let randomImage = 'https://source.unsplash.com/random/400x400?face';
    // useEffect(() =>{
    //     // axios.get("https://source.unsplash.com/random").then(res =>{
    //     //     console.log(res);
    //     //     // randomImage = res.data;
    //     //     randomImage = "https://source.unsplash.com/random"
    //     })
    // },[])

    let name = ""; // string
    let gender = ""; // string
    let age = 0; // number
    let interest = []; // array of text
    let photos = []; // array of url
    let travelInterest = []; // array of text
    
    //Selector to get data from store
    // bit inefficient but it's ok
    name = useSelector(state => state.currUser.userName);
    gender = useSelector(state => state.currUser.gender);
    age = useSelector(state => state.currUser.age)
    interest = useSelector(state => state.currUser.interest);
    photos = useSelector(state => state.currUser.photos);
    travelInterest = useSelector(state => state.currUser.travelInterest);
    
    if(isOwnProfile == false){
        const displayData = OtherUsers.filter(e => e.userId == user_id);
        console.log(displayData)
        if(displayData.length > 0){
            name = displayData[0].name
            gender = displayData[0].gender
            age = displayData[0].age
            interest = displayData[0].interest
            photos = displayData[0].photos
            travelInterest = displayData[0].travelInterest
        }
    }
        
    //Handle Click images
    const handleClickImages = (url) =>{
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    if(name.length == 0){
        return (
            <div className="w-full flex justify-center">
                <h3 className="partner-interest font-semibold text-2xl text-primary mt-2 justify-center">user not found</h3>
            </div> 
        )
    }else{
        return(
            <div className="w-full flex flex-col justify-start items-start p-4"> 
                <div className="partner-hero-img justify-center align-center w-full">
                    <img className="max-h-[35vh] rounded-lg object-scale-down flex-start" src={randomImage} alt="Profile photo of first user" />
                </div>
                <div className="partner-text-info p-2 px-4 mt-10 flex-col bg-slate-100 justify-center">
                    <div className="about-partner-jumbo text-primary font-bold text-2xl justify-center"> About this person: </div>
                    <div className="partner-main-info mt-2 justify-center">{name} | {gender} | {age}</div>
                    <div className="interest-list flex-col">
                        <h3 className="partner-interest font-semibold text-2xl text-primary mt-2 justify-center">Topic Interests: </h3>
                        <ul className="list-disc flex-col justify-center">
                            {interest.map((each,index) =>{
                                return <li className="justify-center" key={index}>{each}</li>
                            })}
                        </ul>
                        <h3 className="partner-interest font-semibold text-2xl text-primary mt-2 justify-center"> Travelling Interest: </h3>
                        {travelInterest.map((each,index) =>{
                            return <div className="justify-center" key={index}>{each}</div>
                        })}

                    </div>
                    <div className="photos masonary flex flex-col justify-center">
                        <h3 className="partner-interest font-semibold text-2xl text-primary mt-2 justify-center mb-2 "> Other Images: </h3>
                        <Masonry
                            columns={2}
                            spacing={1}
                            defaultHeight={500}
                        >
                            {photos.map((each,index) => (
                                <div key={index} onClick={() => handleClickImages(each)}> 
                                    <img src={each}  />
                                </div>
                            ))}
                        </Masonry>
                    </div>
                </div>
            </div>  

            
        );
    }
}


export default PartnerProfile