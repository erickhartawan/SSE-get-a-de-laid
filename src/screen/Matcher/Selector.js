
function Selector(props) {
    const {user_id} = props
    const handleNoLove = () =>{
        console.log("NoLove Clicked");
    }
    const handleYesLove = () =>{
        console.log("Love Clicked");
    }
    return ( 
        <div className="w-full flex flex-row justify-between px-2 py-1">
            <div 
                className="w-12 h-12 rounded-full bg-red-400 flex justify-center items-center cursor-pointer"
                onClick={handleNoLove}>No</div>
            <div 
                className="w-12 h-12 rounded-full bg-green-400 flex justify-center items-center cursor-pointer"
                onClick={handleYesLove}
                >Yes</div>
        </div>
    );
}

export default Selector;