import { useEffect, useState } from "react";
import Header from "./components/header";
import Letter from "./components/Letter";
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

function Home(){


    const [nameSearch, setNameSearch] = useState("");
    const [letters, setLetters] = useState([]);
    const [allLetters, setAllLetters] = useState("");
    const navigate = useNavigate();

    function searchLetter(){
        setNameSearch("");
    }

    const lettersCollectionRef = collection(db, "letters");

    async function getLetters(){
        try {
            const data = await getDocs(lettersCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data()}));
            setLetters(filteredData);
            setAllLetters(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    function searchLetter() {
        if (nameSearch.trim() === "") {
        setLetters(allLetters); //show all if input is empty
        } else {
        const filtered = allLetters.filter((letter) =>
            letter.recipient.toLowerCase() === nameSearch.toLowerCase()
        );
        setLetters(filtered);
        }
    }

    useEffect(() => {
        getLetters();
    }, []);

    return(
        <>
            <Header/>
            <div className="search-container">
                <input value={nameSearch} type="text" placeholder="insert your name.." onChange={(e) => setNameSearch(e.target.value)}></input>
                <button onClick={searchLetter}>Search</button>
            </div>
            <div className="result-status-container">
                <h5>{letters.length} results found.</h5>  
            </div>

            <button className="create-button" onClick={() => {navigate("/create")}}>+</button>
            <div className="letter-container">
                {letters.map((letter, index) => ( 
                    <Letter 
                        key={index}
                        recipient={letter.recipient}
                        message={letter.message}
                        color={letter.color}
                    />
                ))}
            </div>
        </>
    );
}
export default Home