import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { getUserById } from "../../store/reducers/userSlice";
import { UserForm } from "./components/UserForm";

export function UserEdit(){
    
  const { userId } = useParams<{ userId: string }>();
  const user = useAppSelector((state) => getUserById(state, userId));


  return (
    <div>
      <UserForm user={user}></UserForm>
    </div>
  );
}