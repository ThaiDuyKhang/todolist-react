import React from "react";

export const Time = () => {
    const date = new Date();
    const currentDay = date.getDay();
    if(currentDay == 0){
        var sunDay = "Chủ nhật";
    }
    for(var i=1; i<=6; i++){
            if(currentDay == i){
                var sunDay = "Thứ " + (i+1);
            }
        }
  return (
    <div>
      <span id="day">{sunDay + ", "}</span>
      <span id="date">{"Ngày " + date.toLocaleString()}</span>
    </div>
  );
};
