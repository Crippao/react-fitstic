import { useEffect, useState } from "react";
import Display from "./Display";

export default function Counter(props: {
    readonly initialValue? : number;
}) {
    // Definizione di uno stato, di tipo number, 
    // inizializzato a 0
    const {initialValue = 0} = props;

    const [contatore, setContatore] = useState(initialValue);
    console.log("Counter()", contatore);

    //primo parametro callback per impostare il comportamento
    //secondo paramentro lista di dipendenze di cui si ascolta il cambiamento (opzionale),     
    useEffect(()=>{
        console.log("useEffect() --> initialValue:", initialValue);
        setContatore(initialValue);
        return ()=> console.log("return di useEffect", initialValue)
    }, [initialValue])

    return <>
        <Display n={contatore} color="blue" />
        <button onClick={() => {
            //SET STATO
            //senza arrow function se setto lo stato più di una volta va in sovrascrittura
            //con arrow function gli passiamo lo stato corrente + una serie di istruzioni per la modifica da eseguire 
            //setContatore(partial => partial + 2);
            //setContatore(partial => partial + 1);

            setContatore(contatore + 1);
            //console.log("click!, contatore:", contatore);
        }}>premi</button>
        {contatore > 5 && <div>attenzione! maggiore di 5</div>}
    </>
}