import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

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
      <Header />
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
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AulaPage;
