// import { Link, useParams } from 'react-router-dom';
// import Header from '../../components/Header';

// const Clases = () => {
//     const { moduloId } = useParams();

//     const aulas = [
//         { id: '1', titulo: 'Aula 1' },
//         { id: '2', titulo: 'Aula 2' },
//         { id: '3', titulo: 'Aula 3' },
//         { id: '4', titulo: 'Aula 4' },
//         { id: '5', titulo: 'Aula 5' },
//         { id: '6', titulo: 'Aula 6' },
//     ];

//     return (
//         <>
//             <Header />
//             <h1>Módulo {moduloId}</h1>
//             <ul>
//                 {aulas.map(l => (
//                     <li key={l.id}>
//                         <Link to={`/modulos/${moduloId}/aulas/${l.id}`} className='underline text-blue-600'>
//                             {l.titulo}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//             <Link to='/modulos' className='text-purple-600'>Voltar</Link>
//         </>
//     );
// };

// export default Clases;



import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";

const Aulas = () => {

    const aulas = [
        { id: 1, titulo: 'Aula 1' },
        { id: 2, titulo: 'Aula 2' },
        { id: 3, titulo: 'Aula 3' },
        { id: 4, titulo: 'Aula 4' },
        { id: 5, titulo: 'Aula 5' },
        { id: 6, titulo: 'Aula 6' },
        { id: 8, titulo: 'Aula 8' },
        { id: 13, titulo: 'Aula 13' },
        { id: 14, titulo: 'Aula 14' },
    ]

    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-10">
                <img src="/assets/1._Logo_Aquí_Tu_Hablas-removebg-preview.png" alt="USpeaK" width="85" height="85"></img>
                <h1 className="text-center mt-10 text-2xl font-bold">
                    Conversacao
                </h1>
            </div>
            <ul className="flex flex-col mt-10 gap-5 justify-center items-center">
                {aulas.map((aula) => (
                    <li key={aula.id}>
                        <Link to={`${aula.id}`}>
                            <h2 className="text-blue-600 underline">{aula.titulo}</h2>
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

export default Aulas;