import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/auth/auth_actions";
import "./logout_item.css";

const LogoutItem = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <li className="logout_item" onClick={handleLogout}>
      <p className="logout_item_txt">Logout</p>
    </li>
  );
};

export default LogoutItem;
