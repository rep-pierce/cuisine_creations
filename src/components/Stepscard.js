import React from "react";
function StepsCard ({step}) {

    return(
    <div>
        <h2>Steps</h2>
        <p>{step.action}</p>
    </div>
    )
}

export default StepsCard;