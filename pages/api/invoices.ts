import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { api } from 'lib/api.js'
import { PageResults, Invoice } from 'lib/strike-api'
import { IncomingMessage } from 'http'

export async function getData(req: IncomingMessage) {
  const session = await getSession({ req })
  if (session) {
    api.init(process.env.STRIKE_API_URI, session?.accessToken)
    return await api.getInvoices()
  }
  return null
}

export default async (req: NextApiRequest, res: NextApiResponse<PageResults<Invoice>>) => {
  const data = await getData(req);
  data ? res.status(200).json(data) : res.status(401)
  res.end()
}
