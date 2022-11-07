import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import OtherUsers from '../Matcher/OtherUsers.json';



function PartnerVideo(props) {
    const fallbackVideo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    let userVideo = useSelector(state => state.currUser.dpLink)

    const {isOwnProfile, user_id} = props
    if(isOwnProfile == false){
        const displayData = OtherUsers.filter(e => e.userId == user_id);
        console.log(displayData)
        if(displayData.length > 0){
            userVideo = displayData[0].dpLink
        }
    }
    return (
        <div className="flex flex-col rounded-xl">
            <h3 className="partner-interest font-semibold text-2xl text-primary mt-2 justify-center mb-4">{isOwnProfile ? "Your video profile": "Check this video profile"}</h3>
            <ReactPlayer url={userVideo} width="50vw" height="420px" playing={false}/>
        </div>

    );
}

export default PartnerVideo;