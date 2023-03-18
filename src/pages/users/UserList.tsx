import { useAppSelector } from "../../hooks/hooks";
import { selectUsers } from "../../store/reducers/userSlice";
import { UserCard } from "./components/UserCard";

export function UserList() {

    const users = useAppSelector(selectUsers);

    return (
        <div>
            <div className="user-list">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}