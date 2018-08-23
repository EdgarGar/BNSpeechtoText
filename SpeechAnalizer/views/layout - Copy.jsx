import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-mnext-lin =
const DESCRIPTION = ' WATSON El asistente para el monitoreo de llamadas para tarjetas de credito '
export default function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Speech to Text Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header/>////aqui sde modifica el html
        <input type="text" id="referencia" name="referencia" required pattern="[A-Z]{3}[0-9]{4}" title="El número de referencia consta de 3 letras mayúsculas y 4 dígitos."/>
        <Jumbotron
          serviceName="Banorte "
          version="GA"
          serviceIcon="/images/stt.svg"
          description={DESCRIPTION}
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
        { props.bluemixAnalytics ? <script type="text/javascript" src="scripts/analytics.js" /> : null }
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
  bluemixAnalytics: PropTypes.bool.isRequired,
};
