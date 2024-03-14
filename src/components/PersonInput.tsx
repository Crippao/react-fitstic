import { useState } from "react";
import { MyCustomInput } from "./MyCustomInput";

interface Person{
    readonly name : string
    readonly surname: string
}

export function PersonInput(props : {
    readonly onSave : (person :Person) => void
}) {
    const {onSave} = props;

    //let clicked : boolean;
    const [name, setName] = useState<string>("cri")
    const [surname, setSurname] = useState<string>("pao")

    return <>
    <div>
        <MyCustomInput label="Nome" required={true} onChange={(name) => {
            setName(name)
            console.log(name)
        }} />
    </div>
    <div>
        <MyCustomInput label="Cognome" required={true} onChange={(surname) => {
            setSurname(surname)
            console.log(surname)
        }} />
    </div>
    <button onClick={() => {
            const newPerson : Person = {name : name, surname : surname}
            onSave(newPerson)
            //clicked = true
            console.log("setPerson -->", newPerson )
    }}>Salva</button>
    <button onClick={() => {
        setName("")
        setSurname("")
        //clicked = false
    }}>Pulisci</button>
    {/* {clicked === true
      ? <div>Name: {name} Surname: {surname}</div>
      : <div>Non è stato salvato nulla</div>} */}

    </>
}