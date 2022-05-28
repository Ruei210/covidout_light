export default function mapValue(obj){
    let return_obj={sex:"",
                    infect_covid:"",
                    treatment_place:"",
                    ICU_treatment:"",
                    oxygen_treatment:"",
                    revisit:"",
                    revisit_division:""
                   };
    if(obj.sex===0){return_obj.sex="女"}else if(obj.sex===1){return_obj.sex="男"};
    if(obj.infect_covid===1){return_obj.infect_covid="是"}else if(obj.infect_covid){return_obj.infect_covid="否"}
    switch (obj.treatment_place) {
        case 1:
            return_obj.treatment_place="醫院";
        break;
        case 2:
            return_obj.treatment_place="防疫旅館"
            break;
        case 3:
            return_obj.treatment_place="家裡"
            break;
        default:
            return_obj.treatment_place=null
            break;
    }
    if(obj.ICU_treatment===1){return_obj.ICU_treatment="是"}else if(obj.ICU_treatment===0){return_obj.ICU_treatment="否"}
    switch(obj.oxygen_treatment){
        case -1:
            return_obj.oxygen_treatment="不清楚";
            break;
        case 0:
            return_obj.oxygen_treatment="無";
            break;
        case 1:
            return_obj.oxygen_treatment="鼻導管";
            break;
        case 2:
            return_obj.oxygen_treatment="呼吸面罩";
            break;
        case 3:
            return_obj.oxygen_treatment="高流量鼻導管";
            break;
        case 4:
            return_obj.oxygen_treatment="氣管內管插管";
            break;
        default:
            return_obj.oxygen_treatment=null;
            break;
    }
    if(obj.revisit===1){return_obj.revisit="是"}else if(obj.revisit===0){return_obj.revisit="否"}
    switch(obj.revisit_division){
        case 1:
            return_obj.revisit_division="胸腔科";
            break;
        case 2:
            return_obj.revisit_division="感染科";
            break;
        case 3:
            return_obj.revisit_division="復健科";
            break;
        case 4:
            return_obj.revisit_division="神經科";
            break;
        case 5:
            return_obj.revisit_division="精神科";
            break;
        case 6:
            return_obj.revisit_division="其他";
            break;
        default:
            return_obj.revisit_division=null;
            break;
    }
    return return_obj
};


