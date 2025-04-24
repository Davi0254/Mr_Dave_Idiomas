import { Link } from "react-router-dom";
import Header from "../../../../../../components/Header";

const AudiosUS = () => {
    return (
        <>
            <Header />
            <h1 className="text-center mt-10">AUDIOS INGLES AMERICANO</h1>
            <div className="flex flex-col mt-14 items-center h-screen">
            <Link className="text-purple-600 underline mb-10" to={'/pages/USpeaK/aulasAudios'}>Voltar</Link>
                <div className="flex flex-col gap-10">
                    <div className="flex gap-1">
                    <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1pF2dXMzDoj2LWgtdFvfSrzLf_45J6D8a/view?usp=sharing'}
                        >
                            Audio 01 - Opening Text (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1smm5pNmyqReiuNPO8mWySbA_imuCi79E/view'}
                        >
                            Audio 02 - My first words (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1YqrcJeNKYhzbhzi6Mk7AaxdEcPr5hkhR/view?usp=sharing'}
                        >
                            Audio 03 - Frases de exemplo (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1PwMPa4HY6AU6nSJ5d2gKvivYwDtsqAZ8/view?usp=sharing'}
                        >
                            Audio 04 - Cumprimentos (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1eKs2nl1pnzFo9QJOgq2gu-O2s1qtVAtT/view?usp=sharing'}
                        >
                            Audio 05 - Pedindo algo (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1kJ1Fi7be1RPAoCqASsoWmcJEAuU6ZLg0/view?usp=sharing'}
                        >
                            Audio 06 - Expressões (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1Lds_07VcSXbw-LxlWoOyvz8OMEoJXRU1/view?usp=sharing'}
                        >
                            Audio 07 - Perguntas (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1du9XBYCvHF7dYdN2M9IsIF_CA34j1DU2/view?usp=sharing'}
                        >
                            Audio 08 - Pedindo permissão (US)
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <img src="/assets/sound-max-svgrepo-com.svg" alt="lesson" width={25} />
                        <Link
                            className="text-blue-600 underline"
                            to={'https://drive.google.com/file/d/1rc1byM18bAkYMA3ss220RO2vzn197S6k/view?usp=sharing'}
                        >
                            Audio 09 - Letra H (US)
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AudiosUS;