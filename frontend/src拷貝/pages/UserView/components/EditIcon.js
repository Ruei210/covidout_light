import { useNavigate } from "react-router-dom"

export default function EditIcon({ classes = "", text = "EditIcon" }) {
  const navigate = useNavigate();
  function toEdit() {
    navigate('/edit')
  }
  return (
    <div className={classes} onClick={toEdit}>
      <img src={require("./img/edit.png")} alt="edit" width="80%"/>
    </div>
  )
}
