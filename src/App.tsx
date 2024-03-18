import React, { useEffect, useMemo, useState } from 'react';
import styles from './App.module.scss';
import logo from "./assets/logo512.png";
import Display from './components/Display';
import Counter from './components/Counter';
import { TextComponent } from './components/TextComponent';
import CounterObject from './components/CounterObject';
import { MyCustomInput } from './components/MyCustomInput';
import { PersonInput } from './components/PersonInput';
import { IncrementDisplayComponent } from './components/IncrementDisplayComponent';
import { ToDoList } from './components/toDoList/ToDoList';
import { ListItemAdder } from './components/toDoList/ListItemAdder';
import { Button, Divider } from 'antd';
import { ListCaller } from './components/fake_api/ListCaller';
import { BrowserRouter, Link, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

// function calcolo(n:number) {
//   console.log("calcolo con: ", n)
//   return n*2;
// }

export default function App() {
  return<>
    <BrowserRouter>
      <div>
        <Link to={"/"}>Home Page </Link>
        <Link to={"userList"}>List of Users </Link>
        <Link to={"toDoList"}>To do List </Link>
      </div>
      <Routes>
          <Route path='/' element={<div>Home Page</div>}/>
          <Route path='userList' element={<ListCaller/>} />
          <Route path='toDoList' element={<ToDoList/>} />
      </Routes>
    </BrowserRouter>
  </>
}

//   // const [textState, setTextState] = useState("");
//   // const [initialValue, setInitialValue] = useState(10);

//   //Si possono memoizzare solo funzioni pure, cioè che a parità di input restituiscno lo stesso output
//   //UseMemo DEVE avere un return con il valore da memoizzare
//   // const risultatoCalcolo = useMemo(()=>{
//   //   return calcolo(initialValue);
//   // },[initialValue])  

//   //Se imposto un array vuoto allora l'effetto verrà applicato solo in fase di primo montaggio del componente
//   // useEffect(()=>console.log("useEffect on mount"), [])

//   return <>
    // {/*<ListCaller/> */}
//     {/* <ToDoList/> */}

//     {/* {initialValue !== 20 && <IncrementDisplayComponent/>} */}
//     {/* se modifico una prop il componente viene rerenderizzato */}
//     {/* se modifico la key il componente viene reinizializzato, quindi tutti gli stati tornano al valora iniziale */}
//     {/* <Counter initialValue={initialValue}/> */}
//     {/* <Counter key={initialValue}/> */}
//     {/* <button onClick={() => setInitialValue(20)}>Imposta a 20</button>
//     <div>value: {initialValue}</div>
//     <div>Risultato calcolo: {risultatoCalcolo}</div> */}
//     {/* <CounterObject /> */}
//     {/* <TextComponent/> */}
//     {/* <div>
//       <MyCustomInput required={true} label='Username' onChange={(text) => {
//         console.log(text);
//         setTextState(textState);
//         }}/>
//     </div> */}
//     {/* <PersonInput onSave={(person) => console.log(person)}></PersonInput> */}   
//     {/* <Button type="primary">Button</Button> */}
//   </>

const sum = (n1: number, n2: number) => {
  return n1 + n2
}

export function MyComponent() {
  // function sum(n1: number, n2: number) {
  //   return n1 + n2;
  // }

  let num: number = 5;
  let str: string = "ciao!";
  let bool: boolean = true;

  // Rendering condizionale con variabile di appoggio
  let val: JSX.Element | null = null;
  if (bool === true) {
    val = <div>bool è true</div>
  }
  else {
    val = <div>bool è false</div>
  }

  let varAppoggio;
  switch (num) {
    case 1: {
      varAppoggio = <div>num è 1</div>;
      break;
    }
    case 2: {
      varAppoggio = <div>num è 2</div>;
      break;
    }
    default: {
      varAppoggio = <div>altro!</div>;
      break;
    }
  }

  let risultatoSomma = sum(2, 2);

  return <div>
    <h2>myComponent!</h2>
    <div>num: {num}</div>
    <div>str: {str}</div>
    <div>bool: {bool} Attenzione! I booleani non vengono visualizzati</div>
    {val}

    {/* Rendering condizionale con operatore ternario */}
    {bool === true
      ? <div>bool è true</div>
      : <div>bool è false</div>}

    {/* Rendering tramite and logico  */}
    {bool === true && <div>bool è true</div>}

    {/* Null non viene visualizzato */}
    {null}

    {varAppoggio}

    <div>Risultato somma: {risultatoSomma}</div>
    <div>Risultato somma: {sum(3, 4)}</div>

  </div>;
}


export function CyclicRenderingComponent() {
  let array = [2, 4, 6, 7];

  let arrayDiJsx = [];
  for (let i = 0; i < array.length; i++) {
    arrayDiJsx.push(<div key={i}>arrayDiJsx posizione {i}: {array[i]}</div>);
  }

  return <>
    <h4>Rendering ciclico</h4>
    {array.map((item, index) => <div key={index}>Num {index}: {item}</div>)}
    {arrayDiJsx}
  </>
}