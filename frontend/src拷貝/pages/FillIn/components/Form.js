import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";


export default function Form() {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:567'
    })
    const [info, setInfo] = useState({
        name: "",
        email: "",
        id_number: "",
        sex: "",
        birth_date: "",
        date: "",
        infect_covid: "",
        treatment_place: "",
        infect_date: "",
        ICU_treatment: "",
        oxygen_treatment: "",
        discharged_date: "",
        revisit: "",
        revisit_division: ""
    })
    const navigate = useNavigate()
    const handleChange = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/create',
            new URLSearchParams(info).toString()
        )
            .then((response) => {
                if (response.data.createState === true) {
                    navigate('/submitSuccess', { state: info })
                }
            })
            .catch()

    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <h3 className='bg-warning mb-0'>基本資料</h3>
                    </div>
                    <div className='col-12 mx-auto'>
                        <div className="row mb-3">
                            <label className='col-sm-4 col-form-label col-auto text-sm-end required-mark' htmlFor="name" >姓名
                            </label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="text" name="name" id="name" value={info.name} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end' htmlFor="date" >就診日期</label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="date" name="date" id="date" value={info.date} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end required-mark' htmlFor="sex">性別</label>
                            <div className="inputGroup radioGroup col-sm-4 d-flex align-items-center">
                                <div className='form-check me-3'>
                                    <input className='form-check-input' type="radio" name="sex" id="male" value={1} onChange={handleChange} required />
                                    <label className='form-check-label' htmlFor="male ">男</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="sex" id="female" value={0} onChange={handleChange} required />
                                    <label className='form-check-label' htmlFor="female">女</label>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end required-mark' htmlFor="birth_date">出生年月日</label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="date" name="birth_date" id="birth_date" value={info.birth_date} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end required-mark' htmlFor="email" >信箱</label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="email" name="email" id="email" value={info.email} onChange={handleChange} placeholder="表單提交後，將寄送驗證碼至此信箱" required />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end required-mark' htmlFor="id_number" >身分證</label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="text" name="id_number" id="id_number" maxLength="10" minLength="10" value={info.id_number} onChange={handleChange} required />
                            </div>
                        </div>

                        { /*原本沒有病例號, 你在看一下需不需要*/}
                        {/* <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end' htmlFor="" >病例號</label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="text" name="" id="" value="" onChange={handleChange} />
                            </div>
                        </div> */}
                    </div>

                    <div className='col-12 mb-3'>
                        <h3 className='bg-warning mb-0'>Covid19相關資料</h3>
                    </div>
                    <div className='col-12 mx-auto'>
                        <div className="row mb-3">
                            <label className='col-sm-4 col-form-label col-auto text-sm-end required-mark' htmlFor="infect_covid" >是否曾為COVID確診個案</label>
                            <div className="inputGroup radioGroup col-sm-4 d-flex align-items-center">
                                <div className='form-check me-3'>
                                    <input className='form-check-input' type="radio" name="infect_covid" id="infect_true" value={1} onChange={handleChange} required />
                                    <label className='form-check-label' htmlFor="infect_true">是</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="infect_covid" id="infect_false" value={0} onChange={handleChange} required />
                                    <label className='form-check-label' htmlFor="infect_false">否</label>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end' htmlFor="infect_date" >確診日期</label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="date" name="infect_date" id="infect_date" value={info.infect_date} onChange={handleChange} />
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end required-mark' htmlFor="treatment_place" >COVID治療地點</label>
                            <div className="inputGroup selectGroup col-sm-4">
                                {/* <div className="formText">同時符合 優先選擇 醫院{'>'}防疫旅館{'>'}家裡</div> */}
                                <select className='form-select' defaultValue={0} name="treatment_place" onChange={handleChange} >
                                    <option disabled value={0}>同時符合多項，優先選擇數字較小者</option>
                                    <option value={1} required >醫院</option>
                                    <option value={2} required>防疫旅館</option>
                                    <option value={3} required>家裡</option>
                                </select>
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end fs-small py-sm-0' htmlFor="oxygen_treatment"> COVID治療期間<br className="d-none d-sm-block" />最嚴重的氧氣使用經驗</label>
                            <div className="inputGroup selectGroup col-sm-4">
                                <select className='form-select' name="oxygen_treatment" defaultValue={-2} onChange={handleChange}>
                                    <option value={-2} disabled>若您不清楚，請點選不清楚</option>
                                    <option value={-1} >不清楚</option>
                                    <option value={0}  >無</option>
                                    <option value={1}  >鼻導管</option>
                                    <option value={2}  >呼吸面罩</option>
                                    <option value={3}  >高流量鼻導管</option>
                                    <option value={4}  >氣管內管插管</option>
                                </select>
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end fs-small ' htmlFor="ICU_treatment">COVID治療期間<br className="d-none d-sm-block" />是否入住加護病房</label>
                            <div className="inputGroup radioGroup col-sm-4 d-flex align-items-center">
                                <div className='form-check me-3'>
                                    <input className='form-check-input' type="radio" name="ICU_treatment" id="ICU_true" value={1} onChange={handleChange} />
                                    <label className='form-check-label' htmlFor="ICU_true">是</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="ICU_treatment" id="ICU_false" value={0} onChange={handleChange} />
                                    <label className='form-check-label' htmlFor="ICU_false">否</label>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end fs-small py-sm-0' htmlFor="discharged_date">出院日期<br className="d-none d-sm-block" />{`(如在家治療，請以解隔日期作紀錄)`}</label>
                            <div className="inputGroup col-sm-4">
                                <input className='form-control' type="date" name="discharged_date" id="discharged_date" value={info.discharged_date} onChange={handleChange} />
                            </div>
                        </div>

                        <div className='row mb-3 align-items-center'>
                            <label className='col-sm-4 col-form-label col-auto text-sm-end fs-small ' htmlFor="revisit" >COVID之後<br className="d-none d-sm-block" />是否因為COVID定期回診</label>
                            <div className="inputGroup radioGroup col-sm-4 d-flex align-items-center">
                                <div className='form-check me-3'>
                                    <input className='form-check-input' type="radio" name="revisit" id="revisit_true" value={1} onChange={handleChange} />
                                    <label className='form-check-label' htmlFor="revisit_true">是</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="revisit" id="revisit_false" value={0} onChange={handleChange} />
                                    <label className='form-check-label' htmlFor="revisit_false">否</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className='col-sm-4 col-form-label col-auto text-sm-end fs-small py-sm-0' htmlFor="revisit_division">如有因COVID定期回診<br className="d-none d-sm-block" />請選回診科別</label>
                            <div className="inputGroup selectGroup col-sm-4">
                                <select className='form-select' defaultValue={0} name="revisit_division" onChange={handleChange}>
                                    <option value={0} > </option>
                                    <option value={1} >胸腔科</option>
                                    <option value={2} >感染科</option>
                                    <option value={3} >復健科</option>
                                    <option value={4} >神經科</option>
                                    <option value={5} >精神科</option>
                                    <option value={6} >其他</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 text-center my-4'>
                                <button className='btn btn-primary' type="submit">提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
