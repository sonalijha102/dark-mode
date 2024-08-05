import React, { useState } from 'react'



export default function Textform(props) {


    const handleupClick = () => { //onclick event//
        console.log("uppercase clicked")
        let newtext = text.toUpperCase()
        setText(newtext)


    }
    const handleloClick = () => { //onclick event//
        console.log("lowercase clicked")
        let newtext = text.toLowerCase()
        setText(newtext)


    }
    const handleclearClick = () => { //onclick event//
        let newtext = '';
        setText(newtext)
    }
    const handleCopy = () => {//copy text event//


        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const speak = () => {//speak event//
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleExtraSpace = () => {
        console.log("space remove")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    } 

    const handleonchange = (event) => {//onchange event
        console.log("on change")
        setText(event.target.value);

    }


    const [text, setText] = useState('enter text here ');
    // text="new text";
    // setText("new text");
















    return (
        <>
            <h1>{props.heading} </h1>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">UserName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="sonali@123" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className='container'style={{backgroundColor: props.mode=== 'light'?'gray':'black'}}></div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"> textarea</label>
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode=== 'dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="7" ></textarea>
            </div>
            <div>

                <button className="button1 mx-2" id="button" onClick={handleupClick}>SHOW TO UPPERCASE</button>
                <button className="button2 mx-2" id="button" onClick={handleloClick}>SHOW TO LOWERCASE</button>
                <button className="button3 mx-2" id="button" onClick={handleclearClick}>clear</button>
                <button className="button4 mx-2" id="button" onClick={handleCopy}>copy Text</button>
                <button type="submit" id="speak" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button className="button5 mx-2" id="button" onClick={handleExtraSpace}>remove Extra Space</button>

            </div>
            <div className='container' my-5>

                <h1>your text summery</h1>
                <p id='content'>
                    <p>word {text.split("").length}</p>
                    <p>charecters {text.length}</p>
                    <p> {0.008 * text.split("").length} Minute read </p>
                    <h1>preview</h1>
                    <p>{text}</p>




                </p>

            </div>

        </>
    );

}
