// netlify/functions/proxy-api.js

exports.handler = async (event, context) => {
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
