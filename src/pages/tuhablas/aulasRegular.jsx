import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";

const Aulas = () => {

    const aulas = [
        { id: 0, titulo: 'Aula 00' },
        { id: 1, titulo: 'Aula 1' },
    ]

    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-10">
                <img src="/assets/1._Logo_Aquí_Tu_Hablas-removebg-preview.png" alt="USpeaK" width="85" height="85"></img>
                <h1 className="text-center mt-10 text-2xl font-bold">
                    Regular
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