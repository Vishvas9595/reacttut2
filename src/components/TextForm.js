// // import React, { useState } from 'react';

// // export default function TextForm({ heading, mode, showAlert }) {
// //     const [text, setText] = useState('');

// //     const handleUpClick = () => {
// //         let newText = text.toUpperCase();
// //         setText(newText);
// //         showAlert("Converted to uppercase!!","success");
// //     }
// //     const handleloClick = () => {
// //         let newText = text.toLowerCase();
// //         setText(newText);
// //         showAlert("Converted to lowercase!!","success");
// //     }
// //     const handleClearClick = () => {
// //         let newText = '';
// //         setText(newText);
// //         showAlert("Text cleared!!","success");
// //     }
// //     const handleOnChange = (e) => {
// //         setText(e.target.value);
// //     }
// //     const handleCopy = () => {
// //         var textArea = document.getElementById("mybox");
// //         textArea.select();
// //         navigator.clipboard.writeText(textArea.value);
// //         document.getSelection().removeAllRanges();
// //         showAlert("Copied to clipboard!!","success");
// //     }
// //     const handleExtraSpaces = () => {
// //         let newText = text.split(/\s+/).join(" ");
// //         setText(newText);
// //         showAlert("Removed extra spaces!!","success");
// //     }

// //     return (
// //         <>
// //             <div className="container" style={{color: mode === 'dark' ? 'white' : '#020d2f' }} >
// //                 <h1 className="mb=4">{heading}</h1>
// //                 <div className="mb-3">
// //                     <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: mode === 'dark' ? '#50b4b7' : 'white' ,color:mode === 'dark' ? 'white' : '#020d2f'}} id="mybox" rows="8"></textarea>
// //                 </div>
// //                 <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleUpClick} >Convert To Uppercase</button>
// //                 <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleloClick}>Convert To Lowercase</button>
// //                 <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
// //                 <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
// //                 <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
// //             </div>
// //             <div className="container my-2"  style={{color: mode === 'dark' ? 'white' : '#020d2f' }}>
// //                 <h2>Your text summary</h2>
// //                 <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} word(s) and {text.length} characters</p>
// //                 <p>{0.008 * text.split("").length} Minute read</p>
// //                 <h2>Preview</h2>
// //                 <p>{text.length > 0 ? text : "Nothing to preview"}</p>
// //             </div>
// //         </>
// //     );
// // }




// import React, {useState} from 'react'


// export default function TextForm(props) {
//     const handleUpClick = ()=>{
//         let newText = text.toUpperCase();
//         setText(newText)
//         props.showAlert("Converted to uppercase!", "success");
//     }

//     const handleLoClick = ()=>{ 
//         let newText = text.toLowerCase();
//         setText(newText)
//         props.showAlert("Converted to lowercase!", "success");
//     }

//     const handleClearClick = ()=>{ 
//         let newText = '';
//         setText(newText);
//         props.showAlert("Text Cleared!", "success");
//     }

//     const handleOnChange = (event)=>{
//         setText(event.target.value) 
//     }

//     // Credits: A
//     const handleCopy = () => {
//         navigator.clipboard.writeText(text); 
//         props.showAlert("Copied to Clipboard!", "success");
//     }

//     // Credits: Coding Wala
//     const handleExtraSpaces = () => {
//         let newText = text.split(/[ ]+/);
//         setText(newText.join(" "));
//         props.showAlert("Extra spaces removed!", "success");
//     }

//     const [text, setText] = useState(''); 
//     // text = "new text"; // Wrong way to change the state
//     // setText("new text"); // Correct way to change the state
//     return (
//         <>
//         <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
//             <h1 className='mb-4'>{props.heading}</h1>
//             <div className="mb-3"> 
//             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
//             </div>
//             <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
//             <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
//             <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
//             <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
//             <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//         </div>
//         <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
//             <h2>Your text summary</h2>
//             <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
//             <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
//             <h2>Preview</h2>
//             <p>{text.length>0?text:"Nothing to preview!"}</p>
//         </div>
//         </>
//     )
// }





import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
