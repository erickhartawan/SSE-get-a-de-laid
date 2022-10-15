import React from 'react';
import ReactPlayer from 'react-player'
import PartnerProfile from '../Matcher/PartnerProfile'
function Landing () {
    return(
        <div className="w-full flex flex-row">
            <div className="landing-left flex flex-row flex-1 p-4 justify-centre">
                <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="400px" height="240px" playing={true}/>
            </div>
            <div className="landing-right w-full p-4 justify-center">
                <PartnerProfile />
            </div>

        </div>
    );
}

export default Landing;