import ReactPlayer from 'react-player'

function PartnerVideo() {
    return (
        <div className="flex flex-row flex-1 p-4 rounded-xl sticky">
            <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="500px" height="420px" playing={false}/>
        </div>

    );
}

export default PartnerVideo;