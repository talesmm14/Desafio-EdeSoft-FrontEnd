import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/hooks";
import { User } from "../../../../models/user";
import { updateUserAsync, addUserAsync } from "../../../../store/reducers/userSlice";
import { Container } from "./styles";

type UserProps = {
    user?: User | null;
}


export function UserForm({ user: data }: UserProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState<User>({
        id: 0,
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: ''
        },
        address: {
            city: '',
            street: '',
            number: '',
            zipcode: '',
            geolocation: {
                lat: '',
                long: ''
            }
        },
        phone: ''
    });

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    useEffect(() => {
        if (data) {
            setUser(data);
            setIsEditing(true);
        }
    }, [data])

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(isEditing ? updateUserAsync(user) : addUserAsync(user))
            .then(() => {
                navigate('/users');
            });

    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const keys = name.split('.');
        if (keys.length > 1) {
            const updateNestedState = (obj: any, keys: string[], value: any) => {
                const key = keys[0];
                const remainingKeys = keys.slice(1);

                if (remainingKeys.length === 0) {
                    return {
                        ...obj,
                        [key]: value
                    };
                }

                return {
                    ...obj,
                    [key]: updateNestedState(obj[key], remainingKeys, value)
                };
            }

            setUser(prevState => updateNestedState(prevState, keys, value));
        }
        else {
            setUser((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    }
    return (
        <Container>
            <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label className="label-form" htmlFor="username">Usuário:</label>
                        <input className="input-form" type="text" id="username" name="username" value={user.username} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="password">Senha:</label>
                        <input className="input-form" type="password" id="password" name="password" value={user.password} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="firstname">Nome:</label>
                        <input className="input-form" type="text" id="firstname" name="name.firstname" value={user.name.firstname} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="lastname">Sobrenome:</label>
                        <input className="input-form" type="text" id="lastname" name="name.lastname" value={user.name.lastname} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="lat">Lat:</label>
                        <input className="input-form" type="text" id="lat" name="address.geolocation.lat" value={user.address.geolocation.lat} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="long">Long:</label>
                        <input className="input-form" type="text" id="long" name="address.geolocation.long" value={user.address.geolocation.long} onChange={handleInputChange} required />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label className="label-form" htmlFor="city">Cidade:</label>
                        <input className="input-form" type="text" id="city" name="address.city" value={user.address.city} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="street">Rua:</label>
                        <input className="input-form" type="text" id="street" name="address.street" value={user.address.street} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="number">Número:</label>
                        <input className="input-form" type="text" id="number" name="address.number" value={user.address.number} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="zipcode">CEP:</label>
                        <input className="input-form" type="text" id="zipcode" name="address.zipcode" value={user.address.zipcode} onChange={handleInputChange} required />

                        <label className="label-form" htmlFor="phone">Telefone:</label>
                        <input className="input-form" type="text" id="phone" name="phone" value={user.phone} onChange={handleInputChange} required />
                    </div>
                </div>

                <button className="button-form" type="submit">{isEditing ? 'Salvar usuário' : 'Cadastrar usuário'}</button>
            </form>
        </Container>
    );
}