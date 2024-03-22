import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../components/containers/Inicio";
import { CamiCrear } from "../../components/camisas/CamiCrear";
import { CamiLista } from "../../components/camisas/CamiLista";
import { CamiAdmi } from "../../components/camisas/CamiAdmi";
import { CamiActualizar } from "../../components/camisas/CamiActualizar";
import { Acerca } from "../../components/otros/Acerca";
import { NoEncontrado } from "../../components/containers/NoEncontrado";

export const  Ruteo = () =>{
    return(

        <Routes>
            <Route path="/" element ={<Inicio/>}/>
            <Route path="/camcre" element ={<CamiCrear/>}/>
            <Route path="/camlis" element ={<CamiLista/>}/>
            <Route path="/camadm" element ={<CamiAdmi/>}/>
            <Route path="camactal/:codigo" element ={<CamiActualizar/>}/>

            <Route path="/acer" element ={<Acerca/>}/>

            <Route path="*" element ={<NoEncontrado/>}/>
        </Routes>
    )
}