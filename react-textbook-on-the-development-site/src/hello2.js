import React from "react";

const Children = () => {
    return <p>Hello World 2</p>;
};

const Hello = () => {
    return (
        <div>
            <Children />
        </div>
    );
};
export default Hello;
