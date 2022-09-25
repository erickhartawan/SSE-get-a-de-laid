import ReactPlayer from 'react-player'

function PartnerVideo() {
    return (
        <div className="flex flex-row flex-1 p-4 self-center justify-center rounded-xl">
            <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="500px" height="420px" playing={true}/>
        </div>

    );
}

export default PartnerVideo;