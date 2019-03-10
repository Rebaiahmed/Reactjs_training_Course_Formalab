import React from 'react';
// Simple (stateless) React component
const Headline = () => {
    return <h1>React stateless Component </h1>
}


const Intro = () => (
    <div>
        <Headline />
        <p>Welcome to the React world!</p>
    </div>
)