import { useEffect, useState } from 'react';
import { ListItem } from './ListItem';
import { UserDTO } from './UserDTO';
import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Button, Spin } from 'antd';
import { FetchUsers } from './api';


// async function logMovies() {
//     const response = await fetch("https://reqres.in/api/users?page=1");
//     const users : UserDTO[] = (await response.json()).data;
//     console.log(users);
//     return users;
// }

export function ListCaller() {

    const [user, setUser] = useState<UserDTO[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();

    async function getUserList() {
        setIsLoading(true);
        setUser([]);
        try {
            const users = await FetchUsers();
            setUser(users);
        } catch (e) {            
            setError(e.message);
            console.log("Errore: " + e.message)
        }        
        setIsLoading(false);
    }

    useEffect(() => {
        getUserList()
    }, [])


    return<>
        {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
        <Button onClick={() => {
            console.log("New request");
            getUserList();
        }}>Refresh</Button>
        {error === undefined ?
            <div>
                {user.map((elem, index) =>  <ListItem key={index} user={elem} />)}
            </div>
        : 
            <Alert
                message="GET non riuscita"
                description={error}
                type="error"
                showIcon
            />
        }
        
        
    </>
}