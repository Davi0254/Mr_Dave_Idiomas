import { PrivateRoute, AllowedCourse } from '../components/PrivateRoute.jsx';

import Inicio from '../pages/TuHablas/inicio.jsx';
import Modulos from '../pages/TuHablas/apostilas/modulos.jsx';

import Licoes from '../pages/TuHablas/apostilas/licoes.jsx';
import LicoesReg from '../pages/TuHablas/apostilas/regular/licao/aula00.jsx';

import M01L01Aula01 from '../pages/TuHablas/apostilas/modulo01/licao01/aula01.jsx';
import M01L01Aula02 from '../pages/TuHablas/apostilas/modulo01/licao01/aula02.jsx';
import M01L01Aula03 from '../pages/TuHablas/apostilas/modulo01/licao01/aula03.jsx';
import M01L01Aula04 from '../pages/TuHablas/apostilas/modulo01/licao01/aula04.jsx';
import M01L01Aula05 from '../pages/TuHablas/apostilas/modulo01/licao01/aula05.jsx';
import M01L01Aula06 from '../pages/TuHablas/apostilas/modulo01/licao01/aula06.jsx';

import M01L01Aula08Parte01 from '../pages/TuHablas/apostilas/modulo01/licao01/aula08/parte01.jsx';
import M01L01Aula13Parte01 from '../pages/TuHablas/apostilas/modulo01/licao01/aula13/parte01.jsx';
import M01L01Aula14 from '../pages/TuHablas/apostilas/modulo01/licao01/aula14.jsx';

import RegAula00 from '../pages/TuHablas/apostilas/regular/licao/aula00.jsx';

export default [
    {
        path: '',
        element: <AllowedCourse><Inicio /></AllowedCourse>,
    },

    // APOSTILAS

    {
        path: 'modulos',
        element: <PrivateRoute><Modulos /></PrivateRoute>,
    },
    {
        path: 'modulos/:id/licoes',
        element: <PrivateRoute><Licoes /></PrivateRoute>
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
    {
        path: 'modulos/1/licoes/5',
        element: <PrivateRoute><M01L01Aula05 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/6',
        element: <PrivateRoute><M01L01Aula06 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/8',
        element: <PrivateRoute><M01L01Aula08Parte01 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/13',
        element: <PrivateRoute><M01L01Aula13Parte01 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/14',
        element: <PrivateRoute><M01L01Aula14 /></PrivateRoute>
    },
    {
        path: 'modulos/2/licoes-regular/00',
        element: <PrivateRoute><RegAula00 /></PrivateRoute>
    },
];