import React from "react";

function Forescast({title}) {
    return <div>
        <div className="flex items-center justify-start my-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />

        <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
                     className="w-12 my-1"
                     alt=""
                />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
                     className="w-12 my-1"
                     alt=""
                />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
                     className="w-12 my-1"
                     alt=""
                />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
                     className="w-12 my-1"
                     alt=""
                />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
                     className="w-12 my-1"
                     alt=""
                />
                <p className="font-medium">22°</p>
            </div>
        </div>
    </div>
}

export default Forescast;