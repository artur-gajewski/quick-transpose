import React from "react";

export const InputBox = (props) => {
    const { setGivenChords, givenChords } = props;

    return (
        <div className="inputs">
            <input placeholder="Enter chords..." onChange={event => setGivenChords(event.target.value)} value={givenChords}/>
            <input className="clear-btn" type="button" onClick={() => setGivenChords('')} value="C" />
            <br/>
            <div className="note">Note: Seperate chords with a space</div>
        </div>
    );
}
