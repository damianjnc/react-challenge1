import React from 'react';

const userOutput = (props) => {
    return(
    <div>
        <p>My paragraph 1. my username is {props.myusername}</p>
        <p>My paragraph 2 halinkas username is {props.userid}</p>
    </div>
    );
};

export default userOutput;