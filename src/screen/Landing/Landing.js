import React from 'react';
import PartnerProfile from '../Matcher/PartnerProfile'
import PartnerVideo from '../Matcher/PartnerVideo';
import {useParams} from 'react-router-dom'
import Selector from '../Matcher/Selector';
function Landing () {
    let isOwnProfile = false;
    const {user_id} = useParams();
    console.log(user_id);
    if(user_id == undefined){
        isOwnProfile = true
    } else{
        isOwnProfile = false
    }

    return(
        <>
            <div className="w-full flex flex-row bg-slate-100">
                <div className="landing-left top-4 flex flex-col flex-1 pl-4 pr-0 justify-centre pt-[5vh]">
                    <PartnerVideo isOwnProfile={isOwnProfile}/>
                    {isOwnProfile ? "" : <Selector user_id={user_id}/>}
                </div>
                <div className="landing-right flex-1 w-full">
                    <PartnerProfile isOwnProfile={isOwnProfile} user_id={user_id}/>
                </div>
            </div>
        </>
    );
}

export default Landing;