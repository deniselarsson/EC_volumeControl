import React, { useState } from 'react'

import './knob/rotaryswitch.css'

function stringIsWholeNumber(s) {
    return /^-?\d+$/.test(s.trim())
}

export default function VolumeControl() {

    let [volume, setVolume] = useState(50) // "React Hooks"

    const min = 0
    const max = 100

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
        tryChangeVolumeTo(volume - 1)
    }

    function up() {
        tryChangeVolumeTo(volume + 1)
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
    return (


        <div className="wrap">

            <div></div>
            <div className="rotaryswitchPlugin light">
                <div className="switch"></div>
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
            <input readOnly />
            <div className="dim">{max}</div>

            <div></div>
            <div>{volume}</div>
            <div></div>

        </div>
    )
}