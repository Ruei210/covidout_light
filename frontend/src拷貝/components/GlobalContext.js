import { createContext } from "react";
const GlobalContext = createContext({
    name: "",
    email: "",
    id_number: "",
    sex: "",
    birth_date: "",
    date: "",
    infect_covid: "",
    treatment_place: "",
    infect_date: "",
    ICU_treatment: null,
    oxygen_treatment: "",
    discharged_date: "",
    revisit: "",
    revisit_division: ""
});

export default GlobalContext;
