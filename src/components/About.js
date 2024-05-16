// //  import React  from 'react'

// // export default function About(props) {

// //     // const[mystyle, setmyStyle]=useState({
// //     //     color:'black',
// //     //     backgroundColor:'white'
// //     // })
  
// //     let mystyle={
// //         color: props.mode==='dark'?'white':'#195e7f',
// //         backgroundColor: props.mode==='dark'?'#195e7f':'white',
// //     }

// //   return (
// //     <div className="container" style={{  color: props.mode==='dark'?'white':'#195e7f',}} >
// //         <h2>About Us</h2>
// //                 <div className="accordion" id="accordionExample" style={mystyle}>
// //                 <div className="accordion-item">
// //                     <h2 className="accordion-header">
// //                     <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
// //                       <strong>Analyze your text</strong>  
// //                     </button>
// //                     </h2>
// //                 <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
// //                 <div className="accordion-body" style={mystyle}>
// //                     UniqueCodes gives you a way to analyze your text quicly and efficently. Be it word count char count and etc.
// //                 </div>
// //                 </div>
// //                 </div>
// //                 <div className="accordion-item">
// //                     <h2 className="accordion-header">
// //                     <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
// //                         <strong> free to use</strong>
// //                         </button>
// //                     </h2>
// //                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
// //                 <div className="accordion-body" style={mystyle}>
// //                     UniqueCodes is a free charctercounter tool that provides instant character count & word count statistics for a given text. UniqueCodes report the number of word and characters. Thus it is suitable for writing text with word/ character limit.
// //                 </div>
// //                 </div>
// //                 </div>
// //                 <div className="accordion-item">
// //                     <h2 className="accordion-header">
// //                     <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
// //                       <strong>Browser compatible</strong> 
// //                         </button>
// //                     </h2>
// //                     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
// //                     <div className="accordion-body" style={mystyle}>
// //                       This word counter softwer work in any web browser such a chrome , firefox, Internet explorer, Safari, Opera, it suit to count character in facebook, blog, books, exel document, pdf document, essay, etc. 
// //                     </div>
// //                 </div>
// //             </div>
// //         </div> 
// //         {/* <div className="container">
// //             <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btntext}</button>
// //         </div> */}
// //     </div>
// //   )
// // }




// import React from 'react'

// export default function About(props) {

//     // const [myStyle, setMyStyle] = useState({
//     //     color: 'black',
//     //     backgroundColor: 'white'
//     // }) 
//     let myStyle = {
//         color: props.mode ==='dark'?'white':'#042743',
//         backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
//     }
    
//     return (
//         <div className="container">
//             <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
//             <div className="accordion" id="accordionExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingOne">
//                     <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                     <strong>Analyze Your text </strong>
//                     </button>
//                     </h2>
//                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                     <div className="accordion-body" style={myStyle}>
//                     Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingTwo">
//                     <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                     <strong>Free to use </strong>
//                     </button>
//                     </h2>
//                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                     <div className="accordion-body" style={myStyle}>
//                     TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingThree">
//                     <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                     <strong>Browser Compatible </strong>
//                     </button>
//                     </h2>
//                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                     <div className="accordion-body" style={myStyle}>
//                     This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

//                     </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }





import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
