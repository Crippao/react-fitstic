import { Card, Space } from "antd";
import { UserDTO } from "./UserDTO";

export function ListItem(props: {
    readonly user : UserDTO,
}) {

    const {user} = props;
    return <>
        <Space direction="vertical" size={16} style={{padding: "10px"}}>
            <Card title={"User " + user.id} cover={<img alt="example" src={user.avatar} />} style={{padding: "10px", width: 300, borderColor: "black"}}>
                <p>{user.first_name} {user.last_name}</p>
                <p>{user.email}</p>
            </Card>
        </Space>
    </>
}