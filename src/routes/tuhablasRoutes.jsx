import { PrivateRoute, AllowedCourse } from '../components/PrivateRoute.jsx';
import Inicio from '../pages/tuhablas/inicio.jsx';
import Modulos from '../pages/tuhablas/modulos.jsx';
import AulasConv from '../pages/tuhablas/aulasConversacao.jsx';
import AulasReg from '../pages/tuhablas/aulasRegular.jsx/'
import AulaPageConv from '../pages/tuhablas/aulaPageConv.jsx';
import AulaPageReg from '../pages/tuhablas/aulaPageReg.jsx';
// import NotFound from '../pages/NotFound.jsx';


export default [
    {
        path: '',
        element: <AllowedCourse><Inicio /></AllowedCourse>,
    },
    {
        path: 'modulos',
        element: <PrivateRoute><Modulos /></PrivateRoute>,
    },

    // rota única que serve todas as aulas
    {
        path: 'modulos/conversacao/aulas',
        element: <PrivateRoute><AulasConv /></PrivateRoute>
    },
     {
        path: 'modulos/regular/aulas',
        element: <PrivateRoute><AulasReg /></PrivateRoute>
    },
    {
        path: 'modulos/conversacao/aulas/:aulaId',
        element: <PrivateRoute><AulaPageConv /></PrivateRoute>
    },
    {
        path: 'modulos/regular/aulas/:aulaId',
        element: <PrivateRoute><AulaPageReg /></PrivateRoute>
    },
  
    // {
    //     path: '*',
    //     element: <NotFound />
    // }
];