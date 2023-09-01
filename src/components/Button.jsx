import React  from 'react';

const Button = ({ resetGame }) => {
    return <button onClick={() => resetGame()}>New Game</button>;
};

export default Button;