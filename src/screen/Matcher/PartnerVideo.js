import ReactPlayer from 'react-player'

function PartnerVideo(props) {
    const {isOwnProfile} = props
    console.log(isOwnProfile)
    return (
        <div className="flex flex-col rounded-xl">
            <h3 className="partner-interest font-semibold text-2xl text-primary mt-2 justify-center mb-4">{isOwnProfile ? "Your video profile": "Check this video profile"}</h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="50vw" height="420px" playing={false}/>
        </div>

    );
}

export default PartnerVideo;