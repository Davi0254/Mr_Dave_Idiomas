import { PrivateRoute, AllowedCourse } from '../components/PrivateRoute.jsx';

import Inicio from '../pages/USpeaK/inicio.jsx';
import Módulos from '../pages/USpeaK/apostilas/modulos.jsx';

import Lições from '../pages/USpeaK/apostilas/licoes.jsx';

import Aulas from '../pages/USpeaK/apostilas/aulas.jsx';

import M01L01Aula01 from '../pages/USpeaK/apostilas/modulo01/licao01/aula01.jsx';
import M01L01Aula02 from '../pages/USpeaK/apostilas/modulo01/licao01/aula02.jsx';
import M01L01Aula03 from '../pages/USpeaK/apostilas/modulo01/licao01/aula03.jsx';
import M01L01Aula04 from '../pages/USpeaK/apostilas/modulo01/licao01/aula04.jsx';
import M01L01Aula05 from '../pages/USpeaK/apostilas/modulo01/licao01/aula05.jsx';
import M01L01Aula06 from '../pages/USpeaK/apostilas/modulo01/licao01/aula06.jsx';

import LiçõesAudios from '../pages/USpeaK/audio/licoes.jsx';
import MódulosAudios from '../pages/USpeaK/audio/modulos.jsx';
import AudiosSotaque from '../pages/USpeaK/audio/sotaque.jsx';
import M01L01A01AudiosUK from '../pages/USpeaK/audio/modulo01/licao01/aula01/UK.jsx';
import M01L01A01AudiosUS from '../pages/USpeaK/audio/modulo01/licao01/aula01/US.jsx';

import M01L02 from '../pages/USpeaK/apostilas/modulo01/lição 02.jsx';
import M01L03 from '../pages/USpeaK/apostilas/modulo01/lição 03.jsx';
import M01L04 from '../pages/USpeaK/apostilas/modulo01/lição 04.jsx';
import M01L05 from '../pages/USpeaK/apostilas/modulo01/lição 05.jsx';
import M01L06 from '../pages/USpeaK/apostilas/modulo01/lição 06.jsx';

export default [
    {
        path: '',
        element: <AllowedCourse><Inicio /></AllowedCourse>,
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
        path: 'modulos/:id/licoes/:id/aulas',
        element: <PrivateRoute><Aulas /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/1/aulas/1',
        element: <PrivateRoute><M01L01Aula01 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/1/aulas/2',
        element: <PrivateRoute><M01L01Aula02 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/1/aulas/3',
        element: <PrivateRoute><M01L01Aula03 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/1/aulas/4',
        element: <PrivateRoute><M01L01Aula04 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/1/aulas/5',
        element: <PrivateRoute><M01L01Aula05 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/1/aulas/6',
        element: <PrivateRoute><M01L01Aula06 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/2',
        element: <PrivateRoute><M01L02 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/3',
        element: <PrivateRoute><M01L03 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/4',
        element: <PrivateRoute><M01L04 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/5',
        element: <PrivateRoute><M01L05 /></PrivateRoute>
    },
    {
        path: 'modulos/1/licoes/6',
        element: <PrivateRoute><M01L06 /></PrivateRoute>
    },
    

    // AUDIOS

    {
        path: 'audios',
        element: <PrivateRoute><MódulosAudios /></PrivateRoute>,
    },
    {
        path: 'audios/:id/licoes',
        element: <PrivateRoute><LiçõesAudios /></PrivateRoute>
    },
    {
        path: 'audios/:id/licoes/:id/sotaque',
        element: <PrivateRoute>< AudiosSotaque/></PrivateRoute>
    },
    {
        path: 'audios/1/licoes/1/sotaque/1/UK/1',
        element: <PrivateRoute>< M01L01A01AudiosUK/></PrivateRoute>
    },
    {
        path: 'audios/1/licoes/1/sotaque/1/US/1',
        element: <PrivateRoute>< M01L01A01AudiosUS/></PrivateRoute>
    },
];