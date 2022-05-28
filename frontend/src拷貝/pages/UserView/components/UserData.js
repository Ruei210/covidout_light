import { useContext } from 'react';
import GlobalContext from '../../../components/GlobalContext';
import mapValue from '../../../global/mapValue'
import EditIcon from './EditIcon';

export default function UserData() {
    let ctx = useContext(GlobalContext);
    let mapinfo = mapValue(ctx);
    return (
        <div className='container'>
            <div className="row">
                <div className='col-12 mb-3'>
                    <h3 className='bg-warning mb-0'>基本資料</h3>
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-6 col-sm-6 text-end'>
                            <label className='mb-3' htmlFor="name">姓名:</label>
                        </div>
                        <div className='col-6 col-sm-6'>
                            <p className='mb-0'>{ctx.name || '未填寫'}</p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className='row'>
                        <div className='col-6 col-sm-6 text-end'>
                            <label className='mb-3' htmlFor="date" >就診日期</label></div>
                        <div className='col-6 col-sm-6'>
                            <p className='mb-0'>{ctx.date || '未填寫'}</p></div>
                    </div>
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-6 col-sm-6 text-end'>
                            <label className='mb-3' htmlFor="birth_date">出生年月日</label></div>
                        <div className='col-6 col-sm-6'>
                            <p className='mb-0'>{ctx.birth_date || '未填寫'}</p></div>
                    </div>
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-6 col-sm-6 text-end'>
                            <label className='mb-3' htmlFor="sex">性別:</label>
                        </div>
                        <div className='col-6 col-sm-6'>
                            <p className='mb-0'>{mapinfo.sex || '未填寫'}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-6 col-sm-6 text-end'>
                            <label className='mb-3' htmlFor="email" >信箱:</label>
                        </div>
                        <div className='col-6 col-sm-6'>
                            <p className='mb-0'>{ctx.email || '未填寫'}</p></div>
                    </div>
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-6 col-sm-6 text-end'>
                            <label className='mb-3' htmlFor="id_number" >身分證:</label></div>
                        <div className='col-6 col-sm-6'>
                            <p className='mb-0'>{ctx.id_number || '未填寫'}</p></div>
                    </div>
                </div>
            </div>

            <div className='col-12 mb-3'>
                <h3 className='bg-warning mb-0'>Covid19相關資料</h3>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="infect_covid" >是否曾為COVID確診個案</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{mapinfo.infect_covid || '未填寫'}</p></div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="infect_date" >確診日期</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{ctx.infect_date || '未填寫'}</p></div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="treatment_place" >COVID治療地點</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{mapinfo.treatment_place || '未填寫'}</p></div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="oxygen_treatment" className='fs-small'>COVID治療期間<br className="d-none d-sm-block" />最嚴重的氧氣使用經驗</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{mapinfo.oxygen_treatment || '未填寫'}</p></div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="ICU_treatment" className='fs-small'>COVID治療期間<br className="d-none d-sm-block" />是否入住加護病房</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{mapinfo.ICU_treatment || '未填寫'}</p></div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="discharged_date"> 出院日期</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{ctx.discharged_date || '未填寫'}</p></div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="revisit" className='fs-small' >COVID之後<br className="d-none d-sm-block" />是否因為COVID定期回診</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{mapinfo.revisit || '未填寫'}</p></div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className='row'>
                    <div className='col-6 col-sm-6 text-end'>
                        <label htmlFor="revisit_division" className='fs-small' >如有因COVID定期回診<br className="d-none d-sm-block" />請選回診科別</label></div>
                    <div className='col-6 col-sm-6'>
                        <p className='mb-0'>{mapinfo.revisit_division || '未填寫'}</p></div>
                </div>
            </div>
            <div className='col-12 text-center my-4'>
                <EditIcon classes='btn btn-primary' text='修改' />
            </div>
        </div>
    )
} 
