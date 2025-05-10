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
   
    return !cursos?.includes(coursePath) ? alert('operação não permitida') : children
}

