// Football-data.org so'rovlarini server tomonida bajaradi, shunda API kalit
// brauzer kodiga (client bundle) chiqmaydi va CORS cheklovi ham chetlanadi.

const FUNCTION_PREFIXES = ['/.netlify/functions/football-api', '/football-api']
const API_BASE = 'https://api.football-data.org/v4'

export async function handler(event) {
  const apiKey = process.env.FOOTBALL_API_KEY
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'FOOTBALL_API_KEY sozlanmagan' }),
    }
  }

  const prefix = FUNCTION_PREFIXES.find((p) => event.path.startsWith(p))
  const path = prefix ? event.path.slice(prefix.length) : event.path
  const params = new URLSearchParams(event.queryStringParameters || {}).toString()
  const url = `${API_BASE}${path}${params ? `?${params}` : ''}`

  try {
    const res = await fetch(url, { headers: { 'X-Auth-Token': apiKey } })
    const body = await res.text()
    return {
      statusCode: res.status,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=15',
      },
      body,
    }
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: err.message }) }
  }
}
