import React from 'react';
function VacIndicator(props){
    const status = props.status;

    let backgroundColor1 = "";
    let backgroundColor2 = "";
    { status[0] === "true" ? backgroundColor1 = "bg-green-600" : backgroundColor1 = "bg-red-400"}
    { status[1] === "true" ? backgroundColor2 = "bg-green-600" : backgroundColor2 = "bg-red-400"}
    return(
        <div className='flex flex-row w-24 h-6'>
            <div className={`first-dose ${backgroundColor1} w-full h-full flex justify-center items-center border-2 border-black` }>
                <div className="text-white text-xs">1st</div>
            </div>
            <div className={`secon-dose ${backgroundColor2} w-full h-full flex justify-center items-center border-2  border-black border-l-0` }>
                <div className="text-white text-xs">2nd</div>
            </div>
        </div>
    );
}

export default VacIndicator