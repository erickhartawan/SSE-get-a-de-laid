import {useNavigate} from 'react-router-dom'

function Selector(props) {
    const {user_id} = props
    const navigate = useNavigate();
    const handleNoLove = () =>{
        console.log("NoLove Clicked");
        let next = parseInt(user_id) + 1;
        navigate(`/user/${next}`);
    }
    const handleYesLove = () =>{
        console.log("Love Clicked");
        navigate('/chatroom');
    }
    return ( 
        <div className="w-full flex flex-row justify-between px-2 py-1">
            <div 
                className="w-12 h-12 rounded-full bg-red-400 flex justify-center items-center cursor-pointer text-white"
                onClick={handleNoLove}>No</div>
            <div 
                className="w-12 h-12 rounded-full bg-green-400 flex justify-center items-center cursor-pointer text-white"
                onClick={handleYesLove}
                >Yes</div>
        </div>
    );
}

export default Selector;