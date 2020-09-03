import React, { useState } from "react";
import { transpose } from 'chord-transposer';
import { Controls} from './components/Controls';
import { Metadata} from './components/Metadata';
import { Chords} from './components/Chords';
import { InputBox} from './components/InputBox';
import { Credits } from './components/Credits';

import './App.css';

const App = () => {
    const defaultScale = 'C Dm Em F G Am Bm';
    const [currentTransposition, setCurrentTransposition] = useState(0);
    const [givenChords, setGivenChords] = useState('');

    const transposeDown = () => {
        setCurrentTransposition(
            (currentTransposition - 1) < -11 ? 0 : currentTransposition - 1
        );
    }

    const transposeUp = () => {
        setCurrentTransposition(
            (currentTransposition + 1) > 11 ? 0 : currentTransposition + 1
        );
    }

    const resetTranspose = () => {
        setCurrentTransposition(0);
    }

    const allowedChords = [
        'C', 'D', 'E', 'F', 'G', 'A', 'B',
        'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
        'C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'B7',
        'Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm',
        'Db', 'Eb', 'Gb', 'Ab', 'Bb',
        'Dbm', 'Ebm', 'Gbm', 'Abm', 'Bbm',
        'C#', 'D#', 'F#', 'G#',
        'C#m', 'D#m', 'F#m', 'G#m',
    ];

    const chordsFound = givenChords.split(' ').map(
        chord => chord.charAt(0).toUpperCase() + chord.slice(1)
    );
    const allowedChordsFound = chordsFound.filter(chord => allowedChords.includes(chord)).join(' ').trim();
    const songChords = transpose(allowedChordsFound ? allowedChordsFound : defaultScale).up(currentTransposition).toString();
    const songChordsOriginal = transpose(allowedChordsFound ? allowedChordsFound : defaultScale).up(0).toString();
    const songChordsTransposedArray = songChords.split(' ');

    return (
        <div className="app">
            <div className="app-content">
                <h1>Quick Transpose</h1>
                <InputBox setGivenChords={setGivenChords} givenChords={givenChords} />
                <Chords
                    songChordsTransposedArray={songChordsTransposedArray}
                    songChordsOriginal={songChordsOriginal}
                    defaultScale={defaultScale}
                />
                <Metadata currentTransposition={currentTransposition} />
                <Controls
                    transposeDown={transposeDown}
                    transposeUp={transposeUp}
                    resetTranspose={resetTranspose}
                />
                <Credits />
            </div>
        </div>
    );
}

export default App;
