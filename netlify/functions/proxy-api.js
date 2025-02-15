// netlify/functions/proxy-api.js

// Se Netlify usa Node 18 o superiore, potresti non aver bisogno di "node-fetch".
// Per sicurezza, puoi installarlo: `npm install node-fetch`
// e poi importarlo:
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  // Esempio: gestiamo due endpoint /fruit/all e /fruit/:id
  // L'idea è di leggere la path dalla query string
  // (oppure dall'event.path, dipende da come vuoi gestirlo)

  // Se usi la query string: ?path=/fruit/all
  const { path = "" } = event.queryStringParameters || {};

  // Costruisci l'URL dell'API di Fruityvice
  // Adatta in base ai tuoi endpoint (qui uso la root /api + path)
  const apiUrl = `https://www.fruityvice.com/api${path}`;

  try {
    // Esegui la chiamata all'API esterna
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // Se vuoi abilitare CORS dal serverless (di solito non serve
        // se la chiamata parte dallo stesso dominio Netlify)
        // 'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    console.error("Errore durante la chiamata all'API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};
