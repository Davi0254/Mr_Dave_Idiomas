import { PrivateRoute, AllowedCourse } from '../components/PrivateRoute.jsx';
import Inicio from '../pages/uspeak/inicio.jsx';
import Modulos from '../pages/uspeak/modulos.jsx';
import Aulas from '../pages/uspeak/aulas.jsx';
import AulaPage from '../pages/uspeak/aulaPage.jsx';
import Licoes from '../pages/uspeak/licoes.jsx';
import AulaPageL01 from '../pages/uspeak/licao01.jsx';

export default [
    {
        path: '',
        element: <AllowedCourse><Inicio /></AllowedCourse>,
    },
    {
        path: 'uspeakmodulos',
        element: <PrivateRoute><Modulos /></PrivateRoute>,
    },

    // rota única que serve todas as aulas
    {
        path: 'uspeakmodulos/:moduloID/licoes',
        element: <PrivateRoute><Licoes /></PrivateRoute>
    },
    {
        path: 'uspeakmodulos/:moduloID/licoes/:licaoID/aulapage',
        element: <PrivateRoute><AulaPage /></PrivateRoute>
    },
    {
        path: 'uspeakmodulos/:moduloID/licoes/1/aulas',
        element: <PrivateRoute><AulaPageL01 /></PrivateRoute>
    },
    {
        path: 'uspeakmodulos/:moduloID/licoes/:licaoID/aulas/:aulaId/aulapage',
        element: <PrivateRoute><AulaPage /></PrivateRoute>
    },
];