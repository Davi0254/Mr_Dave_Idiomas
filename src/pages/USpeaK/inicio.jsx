import { Link } from "react-router-dom";
import Header from "../../components/Header";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BackgroundIngles from '/assets/plano_de_fundo/apostila-ingles.png';
import BackgroungAudio from "/assets/plano_de_fundo/audios-ingles.png";

const USpeaKPágina = () => {
    return (
        <>
           <Header />
            <div className="flex flex-col items-center mt-10">
            <img src="/assets/plano_de_fundo/capa-ingles.png" alt="capa-ingles" width="400" height="200"></img>
                <div className="flex flex-col justify-center items-center mt-15 gap-10 sm:flex-row cursor-pointer">
                    <Link to={'modulos'}>
                        <Card sx={{ width: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={BackgroundIngles}
                                title="material de estudo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Material de estudo
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Acesse o material de estudo do curso
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link to={'audios'}>
                        <Card sx={{ width: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={BackgroungAudio}
                                title="audio"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Áudios das aulas
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Ouça os áudios do curso
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>

                </div>
                <div className="flex flex-col items-center mb-5">
                    <Link className="text-purple-600 underline mt-10" to={'/home'}>Voltar</Link>
                </div>
            </div>
        </>
    )
}

export default USpeaKPágina;