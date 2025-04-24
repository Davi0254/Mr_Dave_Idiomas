import { Link } from "react-router-dom";
import Header from "../../../../../../components/Header";

const AudiosUK = () => {
    return (
        <>
            <Header />
            <h1 className="text-center mt-10">AUDIOS INGLES BRITANICO</h1>
            <div className="flex flex-col mt-14 items-center h-screen">
                <Link className="text-purple-600 underline mb-10" to={'/pages/USpeaK/aulasAudios'}>Voltar</Link>
                <div className="flex flex-col gap-10">
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1wTtoWrc7GRZzn_9cv1NrLHuVDrtJMC-3/view'}
                        >
                            Audio 02 - My first words (UK)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1AmdRA2Psn4MyBZJUcF6o93Z7lSqdFDUu/view?usp=sharing'}
                        >
                            Audio 03 - Frases de exemplo (UK)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1X2JdCyJyhAzviGNVUyBuQBu5b9SkPcS3/view?usp=sharing'}
                        >
                            Audio 04 - Cumprimentos (UK)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1NIb473TgBUkokS-BVP4u6JzvmO2EOMgR/view?usp=sharing'}
                        >
                            Audio 05 - Pedindo algo (UK)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/17w1I0tHRIYpMeZlSfAdZwUe3fn7tbk5G/view?usp=sharing'}
                        >
                            Audio 06 - Expressões (UK)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1Zjz-FgeuxhM_ycOuRithDbnWrwiIPZYo/view?usp=sharing'}
                        >
                            Audio 07 - Perguntas (UK)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1yCIuHscP7FhoAh6QseBosaiipP6Uxewj/view?usp=sharing'}
                        >
                            Audio 08 - Pedindo permissão (UK)
                        </Link>
                    </div>
                    <div className="flex gap-1 mb-5">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1U6K0z4I-zQi4588v0gNJ1lQSWA-_t1dE/view?usp=sharing'}
                        >
                            Audio 09 - Letra H (UK)
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AudiosUK;