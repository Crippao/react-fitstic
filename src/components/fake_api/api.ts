import { UserDTO } from "./UserDTO";

const HOSTNAME = "https://reqres.in"

export async  function FetchUsers() {
    const response = await fetch(HOSTNAME+"/api/users?delay=2");
    const users : UserDTO[] = (await response.json()).data;
    return users;
}