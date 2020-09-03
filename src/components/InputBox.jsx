import React from "react";

export const InputBox = (props) => {
    const { setGivenChords } = props;

    return (
        <div className="inputs">
            <input placeholder="Enter chords..." onChange={event => setGivenChords(event.target.value)}/>
        </div>
    );
}
