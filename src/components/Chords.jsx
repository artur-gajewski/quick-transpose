import React from "react";

export const Chords = (props) => {
    const { songChordsTransposedArray, songChordsOriginal, defaultScale } = props;
    const songChords = songChordsTransposedArray.filter(chord => (chord !== ''));

    return (
        <div>
            <table className="chords">
                {songChordsOriginal === defaultScale &&
                    <thead>
                        <tr>
                            <td>I</td>
                            <td>ii</td>
                            <td>iii</td>
                            <td>IV</td>
                            <td>V</td>
                            <td>vi</td>
                            <td>vii&deg;</td>
                        </tr>
                    </thead>
                }
                <tbody>
                    <tr>
                        {songChords.map((chord, index) => <td key={index}>{chord}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
