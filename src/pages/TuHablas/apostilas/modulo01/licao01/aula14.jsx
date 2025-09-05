import Header from "../../../../../components/Header";

import { ReactComponent as AudioIcon } from "../../../../../audio-svgrepo-com.svg";

const Aula14 = () => {
    return (
        <>
            <Header />
            <div className="bg-white flex flex-col items-center">
                <img src="/imagens_apostila_tuhablas/Clase14/Clase 14 - ATH Conv_page-0001.jpg" alt="pagina 01" width={800} />
                <img src="/imagens_apostila_tuhablas/Clase14/Clase 14 - ATH Conv_page-0002.jpg" alt="pagina 02" width={800} />
                <div className="flex flex-col">
                    <div className="flex">
                        <AudioIcon width={35} height={35} />
                        <p className="mt-2">Áudio 01: Abertura </p>
                    </div>
                    <audio controls>
                        <source src="/audios/aqui_tu_hablas/licao14/Áudio 01: Abertura.mp3" type="audio/mpeg" />
                        Seu navegador não suporta esse áudio
                    </audio>
                </div>
                <img src="/imagens_apostila_tuhablas/Clase14/Clase 14 - ATH Conv_page-0003.jpg" alt="pagina 03" width={800} />
                <div className="flex flex-col">
                    <div className="flex">
                        <AudioIcon width={35} height={35} />
                        <p className="mt-2">Áudio 02: Ejemplo </p>
                    </div>
                    <audio controls>
                        <source src="/audios/aqui_tu_hablas/licao14/Áudio 02: Ejemplo.mp3" type="audio/mpeg" />
                        Seu navegador não suporta esse áudio
                    </audio>
                </div>
                <img src="/imagens_apostila_tuhablas/Clase14/Clase 14 - ATH Conv_page-0004.jpg" alt="pagina 03" width={800} />
                <div className="flex flex-col">
                    <div className="flex">
                        <AudioIcon width={35} height={35} />
                        <p className="mt-2">Audio 03: Conversación </p>
                    </div>
                    <audio controls>
                        <source src="/audios/aqui_tu_hablas/licao14/Audio 03: Conversación.mp3" type="audio/mpeg" />
                        Seu navegador não suporta esse áudio
                    </audio>
                </div>
                <img src="/imagens_apostila_tuhablas/Clase14/Clase 14 - ATH Conv_page-0005.jpg" alt="pagina 03" width={800} />
            </div>
        </>
    )
}

export default Aula14;