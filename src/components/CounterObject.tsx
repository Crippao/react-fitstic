import { useState } from "react";
import Display from "./Display";

interface State {
    readonly value : number
}

export default function Counter() {
    // Definizione di uno stato, di tipo object, con una proprietà che è un numero
    // inizializzato a 0    

    const [state, setState] = useState<State>({value: 0});
    
    console.log("Counter()", state);

    return <>
        <Display n={state.value} color="blue" />
        <button onClick={() => {
            //creo un nuovo oggetto di tipo State, clonando l'oggetto che ho già, a cui poi modifico il valore incrementandolo di 1
            //L'unico modo per far reagire react alla modifica interna di un oggetto è cambiargli il puntamento di riferimento creando un nuovo oggetto
            const newState : State = { 
                ...state,
                value : state.value + 1
            }

            setState(newState);

            //modifico l'attuale valore di state.value e lo passo al setState
            //MA NON MODIFICO IL COMPONENTE
            //state.value = state.value + 1;
            //setState(state);
            console.log("click!, contatore:", newState);
        }}>premi</button>
        {state.value > 5 && <div>attenzione! maggiore di 5</div>}
    </>
}