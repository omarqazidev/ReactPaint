import React from 'react';

interface StringToJSXProps {
    html: string;
}

export const StringToJSX: React.FC<StringToJSXProps> = ({ html }) => {
    return (
        <div
            className="rendered"
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        ></div>
    );
};
