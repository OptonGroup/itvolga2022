import React from "react";
import './animate.css'
import like from "./img/like.svg"

const Animate = function({text, classN=""}){
    classN += " anim";
    return (
        <div className={classN} data-testid="anim">
            <div className='circle'>
                <img src={like} alt=''></img>
            </div>
            <p className="firstAttention">{text}</p>
        </div>
    )
}

export default Animate;