import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";

const Sotaque = () => {
    const { id } = useParams();

    const audiosUS = [
        { id: 1, titulo: 'Audios Aula 1 US' }
    ]

    const audiosUK = [
        { id: 1, titulo: 'Audios Aula 1 UK' }
    ]

    return (
        <>
            <Header />
            <div className="flex flex-col gap-16 mt-10">
                <ul className="flex flex-col items-center gap-8">
                    <h1 className="font-bold">AUDIOS US</h1>
                    {audiosUS.map((audio) => (
                        <li key={audio.id}>
                            <Link to={`${audio.id}/US/${audio.id}`}>
                                <h2 className="text-blue-600 underline">{audio.titulo}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col justify-cente items-center gap-8">
                    <h1 className="font-bold">AUDIOS UK</h1>
                    {audiosUK.map((audio) => (
                        <li key={audio.id}>
                            <Link to={`${audio.id}/UK/${audio.id}`}>
                                <h2 className="text-blue-600 underline">{audio.titulo}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center mt-6">
                <Link className="text-purple-600 underline" to={'/pages/USpeaK/módulosUSpeaK'}>Voltar</Link>
            </div>
        </>
    )
}

export default Sotaque;