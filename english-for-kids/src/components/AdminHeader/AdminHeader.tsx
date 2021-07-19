import { Link } from "react-router-dom";
import { AdminHeaderStyled } from "./AdminHeader.styled";

interface IAdminHeaderProps {
  setLogIn: (status: boolean) => void;
}

export const AdminHeader: React.FC<IAdminHeaderProps> = ({ setLogIn }) => {
  return (
    <AdminHeaderStyled>
      <div>
        <span>Categories</span>
        <span>Words</span>
      </div>
      <Link to="/" onClick={() => setLogIn(false)}>
        LogOut
      </Link>
    </AdminHeaderStyled>
  );
};
