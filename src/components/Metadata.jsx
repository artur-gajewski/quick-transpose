import React from "react";

export const Metadata = (props) => {
    const { currentTransposition } = props;

    return (
        <div className="metadata">
            Transposed: {currentTransposition ? currentTransposition : 'None'}
        </div>
    );
}
