import React from 'react';


const ConvertTimer = (varms)=>{
    let varmsSecond = 1000
    let varmsMinute = varmsSecond * 60
    let varmsHour = varmsMinute * 60

    let hour = Math.floor(varms / varmsHour)
    let hoursRest = varms % varmsHour
    let minute = Math.floor(hoursRest / varmsMinute)
    let minutesRest = hoursRest % varmsMinute
    let seconde = Math.floor(minutesRest / varmsSecond)
    return String(hour).padStart(2, '0') +
    ':' + String(minute).padStart(2, '0') +
    ':' + String(seconde).padStart(2, '0')
}


let Timer =({varms}) => {
    
    return(
        <div className="styletimer">
        <div className="containertimer">
        <div className="timer">
       <div className="time-digits">{ ConvertTimer(varms)}</div>
       <div className="time-text">
                <div className="text">Hour</div>
                <div className="text">Minute</div>
                <div className="text">Second</div>
            </div>
    </div></div>
   </div>
    )
}
export default Timer