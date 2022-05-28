import LoginIconAfterLogin from "../../components/LoginIconAfterLogin";
import EditIcon from "./components/EditIcon";
import LogoutIcon from "../../components/LogoutIcon";
export default function UserTitle() {
  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      <LogoutIcon />
      <EditIcon />
      <LoginIconAfterLogin />
    </div>
  );
}
