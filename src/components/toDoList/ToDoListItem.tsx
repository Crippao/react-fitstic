import { Button } from "antd";

export function ToDoListItem(props: {
    item : string,
    index : number,
    onDelete : (i : number) => void
}) {
    const {item, index, onDelete} = props;

    return <>
        <div>
            <span>{index} - {item}</span>
            <Button type="default" onClick={() => {
                console.log("Eliminazione oggetto: ", item)
                onDelete(index)
            }}>Elimina</Button>
        </div>
        
    </>
}