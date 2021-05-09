import {useEffect, useState} from "react";
import './App.css';

const App = () => {
    const [characters, setCharacters] = useState([]);
    const url = "https://www.breakingbadapi.com/api/characters";
    const title = "Breaking Bad Characters";

    useEffect(() => {
        fetch(url, {method: "GET"})
            .then(response => {
                if (response.ok)
                    return response.json();
                return Promise.reject(response);
            })
            .then(data => {
                setCharacters(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const clickHandler = () => {
        console.log("TEST");
    }

    const Header = () => {
        return <h1>{title}</h1>
    }

    const CardButton = ({character}) => {
        return (
            <button onClick={clickHandler} className="card">
                <h2>{character.name}</h2>
                <img src={character.img} alt=""/>
                <p>{character.nickname} | {character.status}</p>
            </button>
        )
    }

    return (
        <div>
            <Header/>
            {characters &&
            <div>
                {characters.map((character, index) => {
                    return (
                        <CardButton key={index} character={character}/>
                    )
                })}
            </div>
            }
        </div>
    );
}

export default App;
