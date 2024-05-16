import React, { useState } from 'react';

export default function TextForm({ heading, mode, showAlert }) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted to uppercase!!","success");
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Converted to lowercase!!","success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        showAlert("Text cleared!!","success");
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleCopy = () => {
        var textArea = document.getElementById("mybox");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        document.getSelection().removeAllRanges();
        showAlert("Copied to clipboard!!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
        showAlert("Removed extra spaces!!","success");
    }

    return (
        <>
            <div className="container" style={{color: mode === 'dark' ? 'white' : '#020d2f' }} >
                <h1 className="mb=4">{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: mode === 'dark' ? '#50b4b7' : 'white' ,color:mode === 'dark' ? 'white' : '#020d2f'}} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleUpClick} >Convert To Uppercase</button>
                <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleloClick}>Convert To Lowercase</button>
                <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2"  style={{color: mode === 'dark' ? 'white' : '#020d2f' }}>
                <h2>Your text summary</h2>
                <p>{text.split("").filter((element)=>{return element.length !== 0}).length} word(s) and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minute read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
