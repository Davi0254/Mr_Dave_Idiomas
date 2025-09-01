import { Link, useParams } from "react-router-dom";
import Header from "../../../../components/Header";

const Lições = () => {
   const { id } = useParams();

   const lições = [
      { id: 8, titulo: 'Lição 8' },
      { id: 9, titulo: 'Lição 9' },
      { id: 10, titulo: 'Lição 10' },
   ]

   return (
      <>
         <Header />
         <div className="flex flex-col items-center mt-10">
            <img src="/assets/Logo_USpeaK-removebg-preview.png" alt="USpeaK" width="85" height="85" />
            <h1 className="text-center mt-10 text-2xl font-bold">
               Módulo 2
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
            to="/uspeak/modulos"
            className="text-purple-600 underline mt-10 block text-center"
         >
            Voltar aos Módulos
         </Link>
      </>
   )
}

export default Lições;