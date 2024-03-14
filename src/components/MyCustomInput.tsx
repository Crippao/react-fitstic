import { useState } from "react";

export function MyCustomInput(props : {
    readonly label : string
    readonly required : boolean
    readonly onChange : (text :string) => void
}) {

    const [username, setUsername] = useState<string>("");
    const {required, label, onChange} = props;

    return <>
    {username.length === 0 && required === true && <div>Username = Campo obbligatorio</div>}
        <div>
            <label>{label} {required === true && <span>*</span>}</label>
            <input type="text" value={username} onChange={(e) => {
                setUsername(e.target.value);
                
                onChange(e.target.value);
            }} />
        </div>        
    </>
}