import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText]=useState("");
    // let [theme,setTheme]=useState({backgroundColor:"white",color:"black"});
    let [noWord,setNoWord]=useState(0);
    let [noChar,setNoChar]=useState(0);

    function changeHandler(event){
        let newText=event.target.value;
        setText(newText);
        // console.log(newText.split(" "));
        // console.log(newText.split(/[ ]+/));
        let words=newText.split(/[ ]+/);
        let wordCount=0,charCount=0;
        for (let it of words){
            if(it.length!=0){
                wordCount++;
                charCount+=it.length;
            }
        }
        setNoChar(charCount);
        setNoWord(wordCount);
    }

    function clickHandler(){
        console.log("click handler is called");
        let newText=text.toUpperCase();
        // console.log(newText);
        // text="tonmoy biswas"
        // console.log(text);
        setText(newText);
    }

    function copyText(){
        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
    }

    function removeExtraSpace(){
        let words=text.split(/[ ]+/);
        let newText=words.join(" ");
        setText(newText);
    }

    function clearText(){
        setText("");
        setNoChar(0);
        setNoWord(0);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={changeHandler} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3 my-2" onClick={clickHandler}>Convert to upper case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={copyText}>Copy text</button>
            <button className="btn btn-primary mx-3 my-2" onClick={removeExtraSpace}>Remove extra space</button>
            <button className="btn btn-primary mx-3 my-2" onClick={clearText}>Clear text</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p> {noWord} words and {noChar} characters </p>
        </div>
        </>
        
    )
}
