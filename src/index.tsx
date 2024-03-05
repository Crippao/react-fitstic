// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

export{}

enum WeekDays {
  MONDAY, 
  TUESDAY,
  WEDNESDAY
}

let myday:WeekDays = WeekDays.MONDAY;
let dayArray: WeekDays[] = [ WeekDays.MONDAY,WeekDays.TUESDAY, WeekDays.WEDNESDAY];
console.log(myday)
console.log(dayArray);

interface Point {
  readonly x:number;
  readonly y:number;
}

interface Point3D extends Point {
  z:number;
}
const p : Point3D = {x:5,y:6,z:65}
const p2: Point3D = p;
console.log("p",p); //{x:5,y:6,z:65}
console.log("p2",p2); //{x:5,y:6,z:65}

p2.z = 55;
console.log("p",p); //{x:5,y:6,z:55}
console.log("p2",p2); //{x:5,y:6,z:55}

const p3 :Point3D = {...p} //spread operator
console.log("p3",p3);

const {x,y,z} = p;
console.log("x =",x)
console.log("y =",y)
console.log("z =",z)

// interfaccia funzionale
interface Sum {
  (n1:number,n2:number) : number;
}

const somma : Sum = (n1:number,n2:number) => {return n1+n2}

interface PointWithSum {
  readonly x:number;
  readonly y:number;
  readonly z?:number;
  readonly sum:Sum;
}

const myPointSum :PointWithSum = {
  x: 2,
  y: 19,
  sum: somma
}

console.log("MyPointSum.sum =",myPointSum.sum(myPointSum.x,myPointSum.y))

//MAP
const array1 = [1,2,3]
const arrayDouble = array1.map((e) => e*2)
console.log("array1 =",array1)
console.log("arrayDouble =",arrayDouble)

const array2 : number[] = null as any;
//solo se array2 non è null faccio il map, poi se il primo non è null restituisco il risultato 
//del map altrimenti restituisco il secondo risultato([])
const arrayDouble2 = array2?.map((e) => e*2) ?? []; 
console.log("array2 =",array2)
console.log("arrayDouble2 =",arrayDouble2)

//FILTER
const arr1 = [1,2,3,4]
const arr2 = arr1.filter((e)=> (e%2) === 0)
console.log("arr1 =",arr1)
console.log("arr2 =",arr2)