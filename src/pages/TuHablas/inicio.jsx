import { Link } from "react-router-dom";
import Header from "../../components/Header";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BackgroundEspanhol from '/assets/plano_de_fundo/apostila-espanhol.png';
import BackgroundAudio from "/assets/plano_de_fundo/audios-espanhol.png";

const TuHablasPágina = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-10">
                <img src="/assets/plano_de_fundo/capa-espanhol.png" alt="capa-espanhol" width="400" height="200"></img>
                <div className="flex flex-col justify-center items-center mt-15 gap-10 sm:flex-row cursor-pointer">
                    <Link to={'modulos'}>
                        <Card sx={{ width: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={BackgroundEspanhol}
                                title="Material de estudo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Material de estudo
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Acesse o material de estudo
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link to={''}>
                        <Card sx={{ width: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={BackgroundAudio}
                                title="audio espanhol"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Áudios das aulas
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Ouça os áudios
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

export default TuHablasPágina;