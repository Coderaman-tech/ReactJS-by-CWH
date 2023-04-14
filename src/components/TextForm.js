import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("UpperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick=()=>{
        let newText="";
        setText(newText);

    }

    //to copy content written in text area
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
    }

    const handleTitleCaseClick=()=>{
          let newText=text.split(".")
          for (var i = 0; i < newText.length; i++) {
           newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        
        }
        
        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        const str2 = newText.join(".");
        console.log(str2);
        setText(str2);
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
        // console.log(text);
    }
    
    const [text, setText] = useState("");
//text+=newtext
//   text="next text"//wrong way to change state
//    setText("new text"); // correct way to change the state


    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleTitleCaseClick}>Title Case</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>


        </div>

        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>Words:{text.split(" ").length} and Characters:{text.length}</p>
            <p>Minutes read:{0.008*text.split(" ").length}</p>
            <p>Sentence:{text.split(".").length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
