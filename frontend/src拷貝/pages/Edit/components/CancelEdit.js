import { useNavigate } from "react-router-dom"
export default function CancalEdit({ classes = "" }) {
  const navigate = useNavigate()
  function toUserView() {
    navigate('/userView')
  }
  return (
    <button className={classes} onClick={toUserView}>取消修改</button>
  )
}
