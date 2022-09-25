import React from 'react';
import PartnerProfile from '../Matcher/PartnerProfile'
import PartnerVideo from '../Matcher/PartnerVideo';
function Landing () {
    return(
        <div className="w-full flex flex-row">
            <div className="landing-left flex flex-row flex-1 p-4 justify-centre">
                <PartnerVideo />
            </div>
            <div className="landing-right w-full p-4">
                <PartnerProfile />
            </div>

        </div>
    );
}

export default Landing;