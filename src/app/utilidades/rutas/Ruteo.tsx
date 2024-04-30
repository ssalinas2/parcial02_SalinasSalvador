import { Route, Routes } from "react-router-dom";
import { ConciertoAdmin } from "../../componentes/conciertos/ConciertoAdmi";
import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear";
import { ConciertoListar } from "../../componentes/conciertos/ConciertoListar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Inicio } from "../../componentes/contenedor/Inicio";


export const Ruteo= ()=>{

    return(
        <Routes>
            <Route  path="/" element={<Inicio/>}/>
            
            <Route path="/conAdmin" element={<ConciertoAdmin/>}/>
            <Route path="/conCrear" element={<ConciertoCrear/>}/>
            <Route path="/ConListar" element={<ConciertoListar/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="*" element={<NoEncontrado/>}/>
        </Routes>
        
    );

};
