import { useState } from "react";
import Display from "./Display";

export default function Counter() {
    // Definizione di uno stato, di tipo number, 
    // inizializzato a 0
    const [contatore, setContatore] = useState(0);
    console.log("Counter()", contatore);

    return <>
        <Display n={contatore} color="blue" />
        <button onClick={() => {
            //SET STATO
            //senza arrow function se setto lo stato più di una volta va in sovrascrittura
            //con arrow function gli passiamo lo stato corrente + una serie di istruzioni per la modifica da eseguire 
            //setContatore(partial => partial + 2);
            //setContatore(partial => partial + 1);

            setContatore(contatore + 1);
            console.log("click!, contatore:", contatore);
        }}>premi</button>
        {contatore > 5 && <div>attenzione! maggiore di 5</div>}
    </>
}