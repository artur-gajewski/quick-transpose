import React from "react";

export const Controls = (props) => {
    const { transposeDown, transposeUp, resetTranspose } = props;

    return (
        <div className="controls">
            <input type="button" onClick={() => transposeUp()} value="Transpose Up" />
            <input type="button" onClick={() => transposeDown()} value="Transpose Down" />
            <input type="button" onClick={() => resetTranspose()} value="RESET" />
        </div>
    );
}
