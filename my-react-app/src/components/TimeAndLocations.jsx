import React from "react";

function TimeAndLocations() {
    return (
    <div>
            <div className="flex items-center justify-center my-6">
               <p className="text-white text-xl font-extralight">
                   Weekday, 00 Month Year | Local time: Time
               </p>
            </div>

                <div className="flex items-center justify-center my-3">
                    <p className="text-white text-3xl font-medium">
                        Austin, TX
                    </p>
                </div>
            </div>
    );
    }

export default TimeAndLocations;