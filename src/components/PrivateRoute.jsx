import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { token, loading } = useAuth();
    if (loading) {
        return <div>Loading ...</div>
    }

    return token ? children : <Navigate to="/" />
}

export const AllowedCourse = ({ children }) => {
    const { cursos } = useAuth();
    const coursePath = location.pathname;

    if (cursos === null) {
        alert('Por favor, recarregue a página novamente')
        return <Navigate to='/home' />
    }

    if (cursos?.includes(coursePath)) {
        return children
    } else {
        alert(`você não tem acesso ao curso ${coursePath.split('/')[1]}`)
        return <Navigate to='/home' />
    }
}

