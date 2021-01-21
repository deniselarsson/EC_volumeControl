import React, { useState } from 'react'

import './knob/rotaryswitch.css'

function stringIsWholeNumber(s) {
    return /^-?\d+$/.test(s.trim())
}

export default function VolumeControl({min, max, startVolume, step}) {

    let [volume, setVolume] = useState(startVolume) 

    function tryChangeVolumeTo(v) {

        if (v > max) {
            v = max
        }

        if (v < min) {
            v = min
        }

        setVolume(v)
    }
    function setMin() {

        tryChangeVolumeTo(min)
    }

    function down() {
        tryChangeVolumeTo(volume - step)
    }

    function up() {
        tryChangeVolumeTo(volume + step)
    }

    function setMax() {
        tryChangeVolumeTo(max)
    }

    function volumeChanged(event) {
        let inputedText = event.target.value

        if (!stringIsWholeNumber(inputedText)) {
            inputedText = min.toString()
        }

        tryChangeVolumeTo(parseInt(inputedText))

        console.log("volumeChanged", inputedText)
    }

    function switchStyle(){

        const ratio = (volume - min) /(max - min) //0-1
        const degress = -120 + Math.round(240 * ratio) //-120 => + 120

        return {

            // backgroundColor: "lime",
            // border: "solid 3px",
            transform: `rotate(${degress}deg)`
        }
    }
    return (

        <div className="wrap">

            <div></div>
            <div className="rotaryswitchPlugin light">
                <div className="switch" style={switchStyle()}></div>
            </div>
            <div></div>

            <div>
                <button onClick={setMin}>&lt;&lt;</button>
                <button onClick={down}>&lt;</button>
            </div>
            <input onChange={volumeChanged} value={volume} />
            <div>
                <button onClick={up}>&gt;</button>
                <button onClick={setMax}>&gt;&gt;</button>
            </div>

            <div className="dim">{min}</div>
            <input readOnly value={step}/>
            <div className="dim">{max}</div>

            <div>
            <button onClick={down}>&lt;</button>
            </div>
            <div></div>
            <div>
            <button onClick={up}>&gt;</button>
            </div>
            
        </div>
    )
}