import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const Modulos = () => {
    const modulos = [
        { id: 1, titulo: 'conversacao' },
        { id: 2, titulo: 'regular' },
    ];

    return (
        <>
            <Header />
            <div className='flex flex-col justify-center gap-10 items-center h-100'>
                <img src="/assets/1._Logo_Aquí_Tu_Hablas-removebg-preview.png" alt="USpeaK" width="85" height="85"></img>
                <h1 className="text-center mt- text-2xl font-bold">
                    Conversacao
                </h1>
                <ul className='flex flex-col'>
                    {modulos.map(m => (
                        <li key={m.id}>
                            <Link to={`${m.titulo}/aulas`} className='text-blue-600'>
                                {m.titulo}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Modulos;