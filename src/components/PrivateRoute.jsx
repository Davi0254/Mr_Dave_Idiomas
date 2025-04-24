import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { token, loading } = useAuth();

    if (loading) {
        return <div>Loading ...</div>
    }

    return token ? children : <Navigate to="/" />
}

export default PrivateRoute;