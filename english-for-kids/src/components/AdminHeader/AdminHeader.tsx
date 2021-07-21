import { Link } from "react-router-dom";
import { AdminHeaderStyled } from "./AdminHeader.styled";

interface IAdminHeaderProps {
  setLogIn: (status: boolean) => void;
}

export const AdminHeader: React.FC<IAdminHeaderProps> = ({ setLogIn }) => {
  return (
    <AdminHeaderStyled>
      <div>
        <Link to="/edit_category">Categories</Link>
        <span>Words</span>
      </div>
      <Link
        to="/"
        onClick={() => {
          setLogIn(false);
          localStorage.removeItem("login");
        }}
      >
        LogOut
      </Link>
    </AdminHeaderStyled>
  );
};
