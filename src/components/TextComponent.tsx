import { useState } from "react"

export function TextComponent() {

    const [username, setUsername] = useState<string>("paola cristoni");
    const [password, setPassword] = useState<string>("");
    //Uncontrolled Component --> senza value il componente si aggiorna da solo in base al suo evento. source of truth è l'input stesso
    //Controlled Component --> uso value(source of truth) per definire il comportamento del campo input, se non modifico lo stato al cambiare dell'input lui da solo non si aggiorna
    return <>
        <div>TextComponent</div>
        <div>Username: 
            <input type="text" placeholder="Inserire username"  value={username} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
        </div>
        <div>{username}</div>
        <div>Password: 
            <input type="password" placeholder="Inserire password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
        </div>        
        <div>{password}</div>
        <button onClick={() => {
            setUsername("") 
            setPassword("")}}>Pulisci</button>
    </>
}