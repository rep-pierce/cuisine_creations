import React from "react";
function StepsCard ({step}) {

    return(
    <div className='Step-card-div'>
        
        <p>{step.action}</p>
    </div>
    )
}

export default StepsCard;