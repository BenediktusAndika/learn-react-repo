import Reac, { useState } from "react"

const LearnStateString = () => {

    const [name, setName] = useState("?")

    const changeName = () => {
       return (name == "?" ? setName("Dika") : setName("?"))
    }

    return (
        <>
            <div>
                <h1>Nama : {name}</h1>
                <button type="button" onClick={() => changeName()}>Click to change name!</button>
            </div>
        </>
    )
}

export default LearnStateString