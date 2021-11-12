import { Link } from "react-router-dom";
import { AdminHeaderStyled } from "./AdminHeader.styled";

export const AdminHeader: React.FC = () => {
  return (
    <AdminHeaderStyled>
      <div>
        <Link to="/edit_category">Categories</Link>
        <span>Words</span>
      </div>
      <Link
        to="/"
        onClick={() => {
          localStorage.removeItem("login");
        }}
      >
        LogOut
      </Link>
    </AdminHeaderStyled>
  );
};
