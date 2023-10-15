import React from "react";
import "./glitchText.css";

type GlitchTextProps = {
    text: string;
}

const GlitchText = ({text}: GlitchTextProps) => {
    return (
        <div>
            <h1 className="glitch glow">
                <span aria-hidden="true">{text}</span>
                {text}
                <span aria-hidden="true">{text}</span>
            </h1>
        </div>
    );
};

export default GlitchText;
