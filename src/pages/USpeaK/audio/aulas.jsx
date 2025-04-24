import Header from "../../../components/Header";
import { Link, useParams } from "react-router-dom";

const AulasAudios = () => {
    const { id } = useParams();

    const aulas = [
        { id: 1, titulo: 'Aula 1' },
        { id: 2, titulo: 'Aula 2' },
        { id: 3, titulo: 'Aula 3' },
        { id: 4, titulo: 'Aula 4' },
        { id: 5, titulo: 'Aula 5' },
        { id: 6, titulo: 'Aula 6' },
    ]

    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-10">
                <img src="/assets/Logo_USpeaK-removebg-preview.png" alt="USpeaK" width="70" height="70"></img>
                <h1 className="text-center mt-10 text-2xl font-bold">Audios Lição {id}</h1>
            </div>
            <ul className="flex flex-col mt-10 gap-5 justify-center items-center">
                {aulas.map((aula) => (
                    <li key={aula.id}>
                        <Link to={`${aula.id}/sotaque`}>
                            <h2 className="text-blue-600 underline">{aula.titulo}</h2>
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

export default AulasAudios;