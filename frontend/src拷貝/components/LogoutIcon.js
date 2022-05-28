import { useNavigate } from "react-router-dom";
import axios from "axios";

//可以去共用 global
const api = axios.create({
  baseURL: "http://127.0.0.1:567",
});

export default function LogoutIcon() {
  const navigate = useNavigate();

  function toFillIn() {
    api
      .get("/logout")
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div onClick={toFillIn}>
      <img src={require("./img/logout.png")} alt="logout" width="80%" />
    </div>
  );
}
