import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { getUserById, deleteUserAsync } from "../../../store/reducers/userSlice";
import { Container } from "./styles";

export function UserDetail() {
    const { userId } = useParams<{ userId: string }>();
    const user = useAppSelector((state) => getUserById(state, userId));
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function deleteUser() {
        if (!user) return;
        const confirmed = window.confirm('Deseja deletar esse usuário?');
        if (confirmed) {
            dispatch(deleteUserAsync(user.id)).then(() => {
                navigate(-1);
            });
        }
    }
    return (
        !user ?
            <p>Nenhum usuário encontrado</p>
            :
            <Container>
                <div className="user-card">
                    <h2 className="user-card-title">{user.name.firstname} {user.name.lastname}</h2>
                    <p className="user-card-username">{user.username}</p>
                    <p className="user-card-text">{user.address.city}, {user.address.street}, {user.address.number}, {user.address.zipcode}</p>
                    <p className="user-card-phone">{user.phone}</p>
                    <h2 className="user-card-geo">Localização {user.address.geolocation.lat}, {user.address.geolocation.long}</h2>
                </div>
                <div className="buttons">
                    <Button onClick={() => { navigate(`edit`) }}>Editar</Button>
                    <Button onClick={deleteUser} color="red">Deletar</Button>
                </div>
            </Container>
    );
}