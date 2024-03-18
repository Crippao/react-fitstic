import { useEffect, useState } from "react";

export function IncrementDisplayComponent(){
    const [value, setValue] = useState(0)   
    
    useEffect(()=>{
        const intervalRef = setInterval(()=> {        
            setValue(value + 1)
            console.log(value)
        }, 1000)
        return () => {clearInterval(intervalRef)}
    }, [value])    
    
    return <>
        <div>{value}</div>
    </>
}