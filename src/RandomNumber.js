import { useState } from "react"

function RandomNumber() {

    var [number, setNumber] = useState(null)

    function generate() {
        var random = Math.floor(Math.random() * 100) + 1
        setNumber(random)
    }

    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "#6A5ACD",
            color: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
        }}>
            <h1>Random Number Generator</h1>

          
            {number === null 
                ? <p>NO NUMBER GENERATED YET</p> 
                : <h1>{number}</h1>
            }

            <button 
                onClick={generate} 
                style={{
                    margin: "10px",
                    backgroundColor: "#14B8A6",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px"
                }}>
                Generate Random Number
            </button>
        </div>
    )
}

export default RandomNumber