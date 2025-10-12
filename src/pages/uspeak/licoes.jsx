import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";

const Lições = () => {
    const { moduloID } = useParams();

    const liçõesM01 = [
        { id: 2, titulo: 'Lição 2' },
        { id: 3, titulo: 'Lição 3' },
        { id: 4, titulo: 'Lição 4' },
        { id: 5, titulo: 'Lição 5' },
        { id: 6, titulo: 'Lição 6' },
    ]

    const liçõesM02 = [
        { id: 9, titulo: 'Lição 9' },
        { id: 2, titulo: 'Lição 10' },
    ]

    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-10">
                <img src="/assets/Logo_USpeaK-removebg-preview.png" alt="USpeaK" width="85" height="85" />
                <h1 className="text-center mt-10 text-2xl font-bold">
                    Módulo {moduloID}
                </h1>
            </div>
            <ul className="flex flex-col mt-10 gap-5 justify-center items-center">
                {moduloID === '1' ? (
                    <>
                        <Link to={`1/aulas`}>
                            <h2 className="text-blue-600 underline">Lição 1</h2>
                        </Link>
                        {liçõesM01.map((lição) => (
                            <li key={lição.id}>
                                <Link to={`${lição.id}/aulapage`}>
                                    <h2 className="text-blue-600 underline">{lição.titulo}</h2>
                                </Link>
                            </li>
                        ))}
                    </>
                ) : (
                    <>
                        {/* <Link to={`2/aulas`}>
                            <h2 className="text-blue-600 underline">Lição 1</h2>
                        </Link> */}
                        {liçõesM02.map((lição) => (
                            <li key={lição.id}>
                                <Link to={`${lição.id}/aulapage`}>
                                    <h2 className="text-blue-600 underline">{lição.titulo}</h2>
                                </Link>
                            </li>
                        ))}
                    </>
                )}
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