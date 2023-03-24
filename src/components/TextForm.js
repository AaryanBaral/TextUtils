import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const ChangeUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Text changes to UpperCase","success");
    }
    const ChangeClearClick = ()=>{
        setText("");
        props.ShowAlert("Text cleared","success");
    }
    const handelOnChange = (event)=>{
        setText(event.target.value)
    }
    const ChangeLoClick = (event )=>{
        let newText = text.toLowerCase();
        props.ShowAlert("Text changed to LowerCase","success");
        setText(newText);
    }
    const CopyText = (event )=>{
        navigator.clipboard.writeText(text);
        props.ShowAlert("Text ccopied","success");
    }
    const RemoveExtraSpace = (event )=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.ShowAlert("Extra Space removed from text","success");
    }
  return (
    <>
    <div className='container my-5' style={props.style}>
        <h1>{props.heading}</h1>
        <div className="mb-3" style={props.style}>
            <textarea className="form-control" style={props.style} value = {text} onChange={handelOnChange} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={ChangeUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={ChangeLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={ChangeClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={CopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={props.style}>
        <h1 style={props.style}>Your Text Summary.</h1>
        <p style={props.style}>Your text has {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters.</p>
        <h3 style={props.style}>{0.01 * text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} Minute of read time</h3>
        <h2 style={props.style}>Summary.</h2>
        <p style={props.style}>{text.length===0?"Enter text in the textbox":text}</p>
    </div>
    </>
  )
}
