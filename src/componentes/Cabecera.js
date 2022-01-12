import React from 'react'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import logo from "../imagenes/icono_variante.png";

const Cabecera=(props) => {

    var emoji = require('node-emoji')

    return(
        <div>
        <AppBar position="static" style={{ background: '#ff5000'}}>
          <Toolbar style={{width: "100%"}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
            </IconButton>
            
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo creado para la prueba" height="56" width="56"></img>
              Movies at Houm
            </Typography>
          </Toolbar>
        </AppBar>

        <Card>
          <Typography sx={{ fontSize: 14 }}  align="center" color="text.secondary" gutterBottom>
            coded with love by <Link href="https://www.linkedin.com/in/rodolfo-cuevas-7407231b5/" underline="hover">@rcuevaspantoja</Link> {emoji.get('❤️')}
          </Typography>
        </Card>

        <Typography variant="h3" className="titulo1" component="div" sx={{ flexGrow: 1 }}>
            Watched a movie or a serie at houm and want more info about it?
        </Typography>   
        </div>
    );
};
export default Cabecera;