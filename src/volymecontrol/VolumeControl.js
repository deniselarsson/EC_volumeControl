import React from 'react'

import '/knob/rotaryswitch.css'

export default function VolymeControl() {

    return (

        <div className="wrap">
        <div></div>
        <div class="rotaryswitchPlugin light">
            <div class="switch"></div>
        </div>
        <div></div>
    
        <div>
            <button>&lt;&lt;</button>
            <button>&lt;</button>
        </div>
        <input />
        <div>
            <button>&gt;</button>
            <button>&gt;&gt;</button>
        </div>
    
        <div className="dim">33</div>
        <input readonly />
        <div className="dim">80</div>
    </div>

    )
}