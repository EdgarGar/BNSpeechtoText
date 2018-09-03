import React from 'react';
import PropTypes from 'prop-types';
import {Header, Jumbotron} from 'watson-react-components';

// eslint-disable-mnext-lin =
const DESCRIPTION = ' WATSON El asistente para el monitoreo de llamadas para tarjetas de credito ';

var styles = {
  color: 'black',
  backgroundColor: '#f8565a',
  fontWeight: 'bold'
};

var styles2 = {
  width: "100%",
  height: "300px",
  color: 'black',
  backgroundColor: '#cbbabb',
  fontWeight: 'bold'
};

export default function Layout({children}) {
  return (<html lang="en">
    <head>
      <title>
        Speech to Text Demo
      </title>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon"/>
      <link rel="stylesheet" href="/css/watson-react-components.min.css"/>
      <link rel="stylesheet" href="/css/style.css"/>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
    </head>

    <body>

      <section class="intro0">
        <div class="intro-cuerpo" style={styles}>
          <div class="container">
            <div class="col-md-8 col-md-offset-2">
              <h1 class="texto-bienvenidos">BANORTE
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section class="intro">
        <div class="intro-cuerpo" style={styles2}>
          <div class="container">
            <div class="col-md-8 col-md-offset-2">
              <center>
                <p></p>
                <p></p>
                <p></p>
                <h1 class="texto-bienvenidos">Bienvenidos</h1>
                <p class="intro-texto">
                  WATSON El asistente para el monitoreo de llamadas para tarjetas de credito</p>
                <p class="intro-texto">
                  MÓDULO SUBIR ARCHIVO</p>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section id="upload" class="contenido-seccion text-center">
        <div id="root">
          {children}
        </div>
      </section>

      <script type="text/javascript" src="scripts/bundle.js"/>
      <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js"/>

      <section id="contacto" class="contenido-seccion text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <p>Derechos de Autor
            </p>
            <p>Terminos legales
            </p>
            <p>Aviso de Privacidad
            </p>
            <p>2018 Grupo Financiero Banorte. Derechos reservados.</p>
          </div>
        </div>
      </section>

    </body>
  </html>);
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
  bluemixAnalytics: PropTypes.bool.isRequired, //analytics
};
