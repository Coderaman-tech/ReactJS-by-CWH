import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("UpperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
        // console.log(text);
    }
    const [text, setText] = useState("Enter text here");
//text+=newtext
//   text="next text"//wrong way to change state
//    setText("new text"); // correct way to change the state


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>

        </div>
    )
}
