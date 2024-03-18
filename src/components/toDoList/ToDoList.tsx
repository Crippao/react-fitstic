import { useEffect, useState } from "react";
import { ListItemAdder } from "./ListItemAdder";
import { ToDoListItem } from "./ToDoListItem";


export function ToDoList() {
    const [listItem, setListItem] = useState<string[]>(["cane","gatto"]);
    
    useEffect(() => {
        console.log("useEffect: ", listItem);        
    },[listItem]) 

    function deleteItem(index) {
        const postDeleteList = listItem.filter((elem, i) => i !== index)
        return postDeleteList;
    }
    return <>
        <h1>To Do List</h1>
        <div>
            <h2>Aggiungi nuovo item</h2>
            <ListItemAdder onAdd={(newItem) => {
                const newListItem : string[] = listItem.concat(newItem);
                setListItem(newListItem);
            }}/>
        </div>
        <h2>Aggiungi nuovo item</h2>
        {listItem.map((item,index) => 
            <ToDoListItem key={index} item={item} index={index} onDelete={(indice) => {
                const newList = deleteItem(index)
                setListItem(newList);
                console.log("spile to: ", listItem)
            }} />
    )}
    </>
}