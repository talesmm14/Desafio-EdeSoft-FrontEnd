import { useNavigate } from "react-router-dom";
import { User } from "../../../../models/user";
import { Container } from "./styles";

interface UserCardProps {
    user: User
}


export function UserCard({ user }: UserCardProps) {

    const navigate = useNavigate();

    return (
        <div>
            <Container onClick={() => navigate(`/users/${user.id}`)}>
                <div className="user-card">
                    <h2 className="user-card-title">{user.name.firstname} {user.name.lastname}</h2>
                    <p className="user-card-username">{user.username}</p>
                    <p className="user-card-text">{user.address.city}, {user.address.street}, {user.address.number}, {user.address.zipcode}</p>
                    <p className="user-card-phone">{user.phone}</p>
                </div>
            </Container>
        </div>
    );
}