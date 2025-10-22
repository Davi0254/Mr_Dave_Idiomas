import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Audio from '../../components/audio';

const AulaPage = () => {
  const { licaoID } = useParams();

  // Se você souber quantas páginas a aula tem, coloque aqui.
  // Exemplo: 20 páginas
  const pageCount = 25;

  // Gera lista de nomes com padding "0001"
  const pages = Array.from({ length: pageCount }, (_, i) => {
    const idx = i + 1; // '0001', '0002', ...
    return `/imagens_apostila_uspeak/licao${licaoID}/aula-${licaoID}_page-${idx}.jpg`;
  });

  return (
    <>
      <Header
      />
      <div className="bg-stone-200 flex flex-col items-center">
        {pages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`pagina ${i + 1}`}
            width={800}
            onError={(e) => {
              // opcional: esconder imagem que deu 404
              e.currentTarget.style.display = 'none';
            }  
        }
          />
        ))}
      </div>
      {/* <Audio licaoID={licaoID}  idx={idx}/> */}
    </>
  );
};

export default AulaPage;

// import { useParams } from 'react-router-dom';
// import Header from '../../components/Header';
// // import AudioIcon from '../../../src/';

// // 🔊 Componente de áudio individual
// const AudioPlayer = ({ titulo, src }) => (
//   <div className="flex flex-col items-start mt-3 mb-6">
//     <div className="flex items-center gap-2">
//       {/* <AudioIcon width={35} height={35} /> */}
//       <p className="mt-2 font-medium">{titulo}</p>
//     </div>
//     <audio controls className="mt-1 w-80">
//       <source src={src} type="audio/mpeg" />
//       Seu navegador não suporta esse áudio.
//     </audio>
//   </div>
// );

// const AulaPage = () => {
//   const { licaoID } = useParams();

//   const pageCount = 25;

//   // Gera nomes das páginas automaticamente
//   const pages = Array.from({ length: pageCount }, (_, i) => {
//     const idx = (i + 1).toString().padStart(4, '0');
//     return {
//       id: i + 1,
//       src: `/imagens_apostila_uspeak/Lição ${licaoID}/Lição ${licaoID} - Inglês A1 Reg_page-${idx}.jpg`,
//     };
//   });

//   // 🔗 Define quais páginas terão áudios abaixo
//   const audios = [
//     {
//       page: 2,
//       titulo: 'Áudio 01: Opening text (UK)',
//       arquivo: `Audio 01: Opening text-UK.mp3`,
//     },
//     {
//       page: 2,
//       titulo: 'Áudio 01: Opening text (US)',
//       arquivo: `Audio 01: Opening text-US.mp3`,
//     },
//     {
//       page: 3,
//       titulo: 'Áudio 02: Vocabulary',
//       arquivo: `Audio 02 - Vocabulary.mp3`,
//     },
//     {
//       page: 5,
//       titulo: 'Áudio 03: Dialogue',
//       arquivo: `Audio 03 - Dialogue.mp3`,
//     },
//   ];

//   return (
//     <>
//       <Header licaoID={licaoID} />
//       <div className="bg-stone-200 flex flex-col items-center">
//         {pages.map((page) => (
//           <div key={page.id} className="flex flex-col items-center">
//             <img
//               src={page.src}
//               alt={`página ${page.id}`}
//               width={800}
//               onError={(e) => (e.currentTarget.style.display = 'none')}
//             />

//             {/* Renderiza todos os áudios associados a essa página */}
//             {audios
//               .filter((a) => a.page === page.id)
//               .map((a, i) => (
//                 <AudioPlayer
//                   key={i}
//                   titulo={a.titulo}
//                   src={`/audios/uspeak/Lição_${licaoID}/${a.arquivo}`}
//                 />
//               ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AulaPage;
