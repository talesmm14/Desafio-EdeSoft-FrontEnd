import { Bell, Search, ShoppingCart, User } from "react-feather";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export function NavBar() {
    return (
        <Container>
            <div className="menu">
                <Link className="nav-button" to="/">Principal</Link>
                <Link className="nav-button" to="/users">Usuários</Link>
                <Link className="nav-button" to="/users/create">Novo Usuário</Link>
                <Link className="nav-button" to="products/create">Novo Produto</Link>
            </div>
            <div className="right">
                <Search color="#026E78" />
                <ShoppingCart color="#026E78" />
                <User color="#026E78" />
            </div>
        </Container>
    );
}