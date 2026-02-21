export const fetcher = async (url: string, authToken?: string | null) => {
  const headers: Record<string, string> = {}
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`
  }
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export const mutationFetcher = async (
  url: string,
  { arg, method = 'POST', authToken }: { arg?: any; method?: string; authToken?: string | null },
) => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`
  }
  const res = await fetch(url, {
    method,
    headers,
    body: arg ? JSON.stringify(arg) : undefined,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}
