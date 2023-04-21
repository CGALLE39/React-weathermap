import React from "react";
import {UilSearcb, UilLocationPoint} from "@iconscout/react-unicons";

function Inputs() {
    return(
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text"
                       placeholder="Search uwu"
                       className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholer:lowercase"
                />
                <UilSearcb size={25} className=""/>
                <UilLocationPoint size={25}/>
            </div>
        </div>
    );
}

export default Inputs;