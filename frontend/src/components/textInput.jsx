import React, { useState } from 'react';

const TextInput = ({ label, value, onChange }) => 
{
    return (
        <React.Fragment>
            <label>{label}</label>
            <input 
                type="text"
                value={value}
                onChange={onChange}/>
        </React.Fragment>
    );
}

export default TextInput;