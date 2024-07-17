import React, { useState } from 'react';

const FileInput = ({ label, value, onChange, accept }) => 
{
    return (
        <React.Fragment>
            <label>{label}</label>
            <input 
                type="file"
                value={value}
                onChange={onChange}
                accept={accept}/>
        </React.Fragment>
    );
}

export default FileInput;

