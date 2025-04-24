import Header from "../../../components/Header";
import { Link } from "react-router-dom";

const MódulosAudios = () => {

   const modulos = [
      { id: 1, titulo: 'Modulo 1' },
      { id: 2, titulo: 'Modulo 2' },
      { id: 3, titulo: 'Modulo 3' },
      { id: 4, titulo: 'Modulo 4' },
      { id: 5, titulo: 'Modulo 5' },
      { id: 6, titulo: 'Modulo 6' },
   ]

   return (
      <>
         <Header />
         <div className="flex flex-col items-center mt-10">
            <img src="../../assets/Logo_USpeaK-removebg-preview.png" alt="USpeaK" width="70" height="70"></img>
            <h1 className="text-center mt-10 text-2xl font-bold">Módulos</h1>
         </div>
         <ul className="flex flex-col mt-10 gap-5 justify-center items-center">
            {modulos.map((modulo) => (
               <li key={modulo.id}>
                  <Link to={`${modulo.id}/licoes`}>
                     <h2 className="text-blue-600 underline">{modulo.titulo}</h2>
                  </Link>
               </li>
            ))}
         </ul>
         <Link
            to="/uspeak"
            className="text-purple-600 underline mt-10 block text-center"
         >
            Voltar
         </Link>
      </>
   )
}

export default MódulosAudios;