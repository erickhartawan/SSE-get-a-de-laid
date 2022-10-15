import React from "react";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function TripLocationInfo() {
    return (
        <div className="flex flex-col">
            <div className="my-10 text-5xl self-center">Trip Details</div>
        </div>
    );
  }

export default TripLocationInfo