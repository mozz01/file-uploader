import React, { Component, useState } from 'react';
import TextInput from './textInput';
import FileInput from './fileInput';
// import axios from 'axion';

class UserForm extends Component 
{
    constructor(props)
    {
        super(props);
        this.handleReset = this.handleReset.bind(this);
        this.state = 
        {
            description: '',
            file: ''
        };
    }
    
    handleDescriptionChange = (e) =>
    {
        this.setState({
            description: e.target.value
        });
    }

    handleFileChange = (e) =>
    {
        this.setState({
            file: e.target.value
        });
    }

    handleSubmit = async () =>
    {
        try
        {
            const response = await fetch("http://localhost:5000/upload", 
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state)
                }
            );

            if(!response.ok)
            {
                throw new Error('Failed to fetch.');
            }

            const result = await response.json();
            console.log("Success:", result);
        }
        catch(err)
        {
            
            console.error("Error caught:", err);
            alert("error");
        }


        return;
    };
        

    handleReset()
    {
        this.setState({
            description: '',
            file: ''
        });
    };
    

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='Entry'>
                    <TextInput label="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                </div>
                <div className='Entry'>
                    <FileInput label="Upload File" value={this.state.file} onChange={this.handleFileChange} accept=".jpg"/>
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={this.handleReset}>Reset</button>
            </form>
        );
    }
}

// export Upload component
export default UserForm;