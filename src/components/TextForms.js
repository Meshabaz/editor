import React, { useState } from 'react'


export default function TextForms(props) {
    const handleUc = () => {
        console.log("uppercase fired");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLc = () => {
        console.log("lowercase fired");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClear = () => {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (e) => {
        console.log("onChangeHandeled");
        setText(e.target.value)
    }

    // const initialText = [];
    const [text, setText] = useState("");

    let trimmedText = text.replace(/\s+/g, " ").trim();
    let finishedText = trimmedText.split(" ");
    let noOfWords = finishedText.length;
    if (finishedText[0] === '') {
        noOfWords = 0;
    }


    // Capitalize:- //
    const handleCapitalize = () => {
        let comeon = ''
        for (let index = 0; index < finishedText.length; index++) {
            let word = '';
            for (let j = 0; j < finishedText[index].length; j++) {
                if (j === 0) {
                    word += finishedText[index][j].toUpperCase()
                }
                else {
                    word += finishedText[index][j]
                }
            }
            if (index === finishedText.length - 1) {
                comeon += word
            } else {
                comeon += word + " ";
            }
        }
        console.log(comeon);
        setText(comeon)
    }
    // // //

    // Snake_Case //
    const handleSnake = () => {
        let newText = text.replaceAll(" ", "_");
        // newText = text.replaceAll("-", "_");
        console.log(newText);
        setText(newText)
    }
    // // //


    const handleSnakeWithCapital = () => {
        let comeon = ''
        for (let index = 0; index < finishedText.length; index++) {
            let word = '';
            for (let j = 0; j < finishedText[index].length; j++) {
                if (j === 0) {
                    word += finishedText[index][j].toUpperCase()
                }
                else {
                    word += finishedText[index][j]
                }
            }
            if (index === finishedText.length - 1) {
                comeon += word
            } else {
                comeon += word + " ";
            }
        }
        console.log(comeon);
        let newText = comeon.replaceAll(" ", "_");
        // newText = text.replaceAll("-", "_");
        setText(newText)
    }

    // Kebab-Case //
    const handleKebab = () => {
        let newText = text.replaceAll(" ", "-");
        // newText = text.replaceAll("_", "-");
        console.log(newText);
        setText(newText)
    }
    //

    // Kebab-Case & Capitalize //
    const handleKebabWithCapital = () => {
        let comeon = ''
        for (let index = 0; index < finishedText.length; index++) {
            let word = '';
            for (let j = 0; j < finishedText[index].length; j++) {
                if (j === 0) {
                    word += finishedText[index][j].toUpperCase()
                }
                else {
                    word += finishedText[index][j]
                }
            }
            if (index === finishedText.length - 1) {
                comeon += word
            } else {
                comeon += word + " ";
            }
        }
        console.log(comeon);
        let newText = comeon.replaceAll(" ", "-");
        // newText = text.replaceAll("_", "-");
        setText(newText)
    }
    //

    const handleCopy = () => {
        let text = document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#09243f', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter Text Here...' className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn  btn-primary mx-2 my-1" onClick={handleClear}>Clear TextArea</button>
                <button className="btn  btn-primary mx-2 my-1" onClick={handleCopy}>Copy To Clipboard</button>
                <button className="btn  btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <hr />
                <button className="btn btn-primary mx-2 my-1" onClick={handleUc}>In Uppercase</button>
                <button className="btn  btn-primary mx-2 my-1" onClick={handleLc}>In Lowercase</button>
                <hr />
                <button className="btn  btn-primary mx-2 my-1" onClick={handleCapitalize}>Capitalize</button>
                <button className="btn  btn-primary mx-2 my-1" onClick={handleCapitalize}>Title Case</button>
                <hr />
                <button className="btn  btn-primary mx-2 my-1" onClick={handleSnake}>Snake_Case</button>
                <button className="btn  btn-primary mx-2 my-1" onClick={handleSnakeWithCapital}>Capitalize & Snake_Case</button>
                <hr />
                <button className="btn  btn-primary mx-2 my-1" onClick={handleKebab}>Kebab-Case</button>
                <button className="btn  btn-primary mx-2 my-1" onClick={handleKebabWithCapital}>Capitalize & Kebab-Case</button>

            </div>
            <div className="container my-5" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{noOfWords} words and {text.length} characters</p>
                <p> {0.008 * noOfWords} Minutes read</p>
                <h2>Preview</h2>
                <h5>{text.length > 0 ? text : 'Write something in the TextArea to preview it here..'}</h5>
            </div>
        </>
    )
}
