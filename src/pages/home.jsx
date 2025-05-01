import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { logout } = useAuth();
  
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen gap-10 mt-10">
        <Link className="flex flex-col items-center cursor-pointer" to='/uspeaK'>
          <img src="/assets/Logo_USpeaK-removebg-preview.png" alt="USpeaK" width="200" height="200"></img>
          <p className="font-bold">CURSO DE INGLÊS</p>
        </Link>
        <Link className="flex flex-col items-center cursor-pointer mb-10" to={'/tuhablas'}>
          <img src="/assets/1._Logo_Aquí_Tu_Hablas-removebg-preview.png" alt="Aquí Tu Hablas" width="200" height="200"></img>
          <p className="font-bold">CURSO DE ESPANHOL</p>
        </Link>
        <Link className="text-purple-600 underline" onClick={logout} to={'/'}>Sair</Link>
      </div>
    </>
  )
}

