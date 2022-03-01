import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  STRIKE_API_URI?: string
  STRIKE_API_SCOPE?: string
  STRIKE_IDENTITY_SERVER_URL?: string
  STRIKE_IDENTITY_SERVER_CLIENT_ID?: string
  STRIKE_IDENTITY_SERVER_CLIENT_SECRET?: string
  NEXTAUTH_SECRET?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({
    STRIKE_API_URI: process.env.STRIKE_API_URI,
    STRIKE_API_SCOPE: process.env.STRIKE_API_SCOPE,
    STRIKE_IDENTITY_SERVER_URL: process.env.STRIKE_IDENTITY_SERVER_URL,
    STRIKE_IDENTITY_SERVER_CLIENT_ID: process.env.STRIKE_IDENTITY_SERVER_CLIENT_ID,
    STRIKE_IDENTITY_SERVER_CLIENT_SECRET: process.env.STRIKE_IDENTITY_SERVER_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  })
}
