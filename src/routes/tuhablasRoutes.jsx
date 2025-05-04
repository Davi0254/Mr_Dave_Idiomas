import PrivateRoute from '../components/PrivateRoute.jsx';

import Inicio from '../pages/TuHablas/inicio.jsx';
import Módulos from '../pages/TuHablas/apostilas/modulos.jsx';

import Lições from '../pages/TuHablas/apostilas/licoes.jsx';

import M01L01Aula01 from '../pages/TuHablas/apostilas/modulo01/licao01/aula01.jsx';
import M01L01Aula02 from '../pages/TuHablas/apostilas/modulo01/licao01/aula02.jsx';
import M01L01Aula03 from '../pages/TuHablas/apostilas/modulo01/licao01/aula03.jsx';
import M01L01Aula04 from '../pages/TuHablas/apostilas/modulo01/licao01/aula04.jsx';

export default [
    {
        path: '',
        element: <PrivateRoute><Inicio /></PrivateRoute>,
    },

    // APOSTILAS

    {
        path: 'modulos',
        element: <PrivateRoute><Módulos /></PrivateRoute>,
    },
    {
        path: 'modulos/:id/licoes',
        element: <PrivateRoute><Lições /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/1',
        element: <PrivateRoute><M01L01Aula01 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/2',
        element: <PrivateRoute><M01L01Aula02 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/3',
        element: <PrivateRoute><M01L01Aula03 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/4',
        element: <PrivateRoute><M01L01Aula04 /></PrivateRoute>
    },
];