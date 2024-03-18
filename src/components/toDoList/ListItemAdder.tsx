import { Button } from "antd";
import { useState } from "react";

export function ListItemAdder(props: {
    onAdd : (item : string) => void
 }) {
    const { onAdd } = props;
    const [newItem, setNewItem] = useState<string>("");

    return <>
        <input type="text" value={newItem} onChange={(ev) => {
            //console.log("Nuovo item digitato: ", ev.target.value);
            setNewItem(ev.target.value);
        }} />
        <Button type="default" onClick={() => {
            console.log("Aggiunta nuovo elemento: ", newItem);
            onAdd(newItem);
            setNewItem("");
        }}>Aggiungi</Button>
    </>
}