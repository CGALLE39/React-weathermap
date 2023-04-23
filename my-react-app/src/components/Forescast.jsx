import React from "react";

function Forescast() {
    return <div>
        <div className="flex items-center justify-start my-6">
            <p className="text-white font-medium uppercase">
                hourly forecast
            </p>
        </div>
        <hr className="my-2" />

        <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>

            </div>

        </div>
    </div>
}

export default Forescast;