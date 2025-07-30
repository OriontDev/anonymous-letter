import Header from "./components/header";
import Letter from "./components/Letter";
import Color from "./components/Color";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";


function Create(){

    const lettersCollectionRef = collection(db, "letters");

    const [recipient, setRecipient] = useState("");
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("white");

    const navigate = useNavigate();

    const style = {
        padding: "5px",
        height: "400px",
        width: "400px",         // fixed width
        border: "solid 5px black",
        display: "flex",
        flexDirection: "column",
        flexShrink: "0",        // prevent shrinking
        boxSizing: "border-box",
        borderRadius: "10px"
    };

    const titleStyle = {
        padding: "10px",
    }

    const textBoxStyle = {
        height: "100%",
        resize: "none",
        fontSize: "1.5rem",
        fontWeight: "bold",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: color
    }

    const titleBoxStyle = {
        display: "flex",
    }
    const titleInputStyle = {
        fontSize: "1.6rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "transparent",
        border: "none",
        padding: "0",
    }

    const createTitleStyle = {
        display: "flex",
        justifyContent: "center",
        fontSize: "3rem",
        margin: "0",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "gainsboro"
    }



    async function createLetter(){
        if(recipient !== "" && message !== ""){
            try {
                await addDoc(lettersCollectionRef, {
                    recipient: recipient,
                    message: message,
                    color: color,
                });
                navigate("/");
            } catch (err) {
                console.error(err);
            }
        } 
    }

    return(
        <>
            <Header/>
            <h1 style={createTitleStyle}>Create a letter</h1>
            <div className="create-box-container">
                <div style={style}>
                    <div style={titleBoxStyle}>
                        <h1 style={titleStyle}>to: </h1>
                        <input placeholder="insert name.." style={titleInputStyle} onChange={(e) => setRecipient(e.target.value.toLowerCase())}></input>
                    </div>
                    <hr></hr>
                    <textarea type="text" style={textBoxStyle} onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <div className="color-container">
                    <Color color="white" onColorPicked={setColor}/> 
                    <Color color="gold" onColorPicked={setColor}/> 
                    <Color color="skyblue" onColorPicked={setColor}/> 
                    <Color color="salmon" onColorPicked={setColor}/> 
                    <Color color="grey" onColorPicked={setColor}/> 
                    <Color color="lemonchiffon" onColorPicked={setColor}/> 
                    <Color color="palegreen" onColorPicked={setColor}/> 
                    <Color color="plum" onColorPicked={setColor}/> 
                    <Color color="lavender" onColorPicked={setColor}/> 
                    <Color color="lightpink" onColorPicked={setColor}/> 
                    <Color color="limegreen" onColorPicked={setColor}/> 
                    <Color color="peru" onColorPicked={setColor}/>                 
                </div>
            </div>
            <div className="create-letter-button-container">
                <button onClick={() => {navigate("/"); createLetter()}}>Submit</button>
            </div>


        </>
    );
}
export default Create