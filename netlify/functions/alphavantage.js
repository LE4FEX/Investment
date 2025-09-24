exports.handler = async function handler(event) {
  if (event.httpMethod && event.httpMethod.toUpperCase() === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: ""
    };
  }
  try {
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing ALPHA_VANTAGE_API_KEY" })
      };
    }

    const params = new URLSearchParams(event.queryStringParameters || {});
    if (!params.has("function")) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Missing required 'function' parameter" })
      };
    }

    params.set("apikey", apiKey);
    const url = `https://www.alphavantage.co/query?${params.toString()}`;
    const upstream = await fetch(url);
    const text = await upstream.text();

    return {
      statusCode: upstream.status,
      headers: {
        ...corsHeaders(),
        "Content-Type": "application/json"
      },
      body: text
    };
  } catch (error) {
    console.error("Alpha Vantage proxy error", error);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: error.message })
    };
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}
