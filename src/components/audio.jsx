const Audio = ({  }) => {
    <div className="flex flex-col">
        <div className="flex">
            <AudioIcon width={35} height={35} />
            <p className="mt-2">Audio 01: Opening text (UK)</p>
        </div>
        <audio controls>
            <source src="/audios/uspeak/Lição_09/Audio 01: Opening text-UK.mp3" type="audio/mpeg" />
            Seu navegador não suporta esse áudio
        </audio>
    </div>
}

export default Audio;
