import React from 'react';

const Calculate = ({props}) => {
    let user = [2,1,2,1,1];
    let sum = 0;
    for(let num of user) {
        sum += num;
    }
    return (
        <h1>{sum}</h1>
    );
}

export default Calculate;