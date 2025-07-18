import { Link, useParams } from "react-router-dom";
import Header from "../../../components/Header";

const Lições = () => {
  const { id } = useParams();

   const lições = [
      { id: 1, titulo: 'Lição 1' },
      { id: 2, titulo: 'Lição 2' },
      { id: 3, titulo: 'Lição 3' },
      { id: 4, titulo: 'Lição 4' },
      { id: 5, titulo: 'Lição 5' },
      { id: 6, titulo: 'Lição 6' },
      { id: 8, titulo: 'Lição 8' },
      { id: 13, titulo: 'Lição 13' },
   ]

   return (
      <>
         <Header />
         <div className="flex flex-col items-center mt-10">
            <img src="/assets/1._Logo_Aquí_Tu_Hablas-removebg-preview.png" alt="USpeaK" width="85" height="85"></img>
            <h1 className="text-center mt-10 text-2xl font-bold">
               Módulo {id}
            </h1>
         </div>
         <ul className="flex flex-col mt-10 gap-5 justify-center items-center">
            {lições.map((lição) => (
               <li key={lição.id}>
                  <Link to={`${lição.id}`}>
                     <h2 className="text-blue-600 underline">{lição.titulo}</h2>
                  </Link>
               </li>
            ))}
         </ul>
         <Link
            to="/tuhablas/modulos"
            className="text-purple-600 underline mt-10 block text-center"
         >
            Voltar aos Módulos
         </Link>
      </>
   )
}

export default Lições;