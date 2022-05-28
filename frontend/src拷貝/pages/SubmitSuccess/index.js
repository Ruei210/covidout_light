import { useLocation } from "react-router-dom"
export default function Fndex() {
  let location =useLocation();
  let info=location.state;
  return (
    <div>
      <p>驗證碼已寄至{info.email}請查收</p>
      <p>您可透過Email和驗證碼再次登入系統，修改表單內容</p>
    </div>
  )
}

