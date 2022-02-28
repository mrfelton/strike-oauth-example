import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
import { getToken, JWT } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

type Data = {
  STRIKE_API_URI?: string
  STRIKE_API_SCOPE?: string
  STRIKE_IDENTITY_SERVER_URL?: string
  STRIKE_IDENTITY_SERVER_CLIENT_ID?: string
  STRIKE_IDENTITY_SERVER_CLIENT_SECRET?: string
  NEXTAUTH_SECRET?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({ req })
  const token = await getToken({ req, secret })

  res.status(200).json({
    STRIKE_API_URI: process.env.STRIKE_API_URI,
    STRIKE_API_SCOPE: process.env.STRIKE_API_SCOPE,
    STRIKE_IDENTITY_SERVER_URL: process.env.STRIKE_IDENTITY_SERVER_URL,
    STRIKE_IDENTITY_SERVER_CLIENT_ID: process.env.STRIKE_IDENTITY_SERVER_CLIENT_ID,
    STRIKE_IDENTITY_SERVER_CLIENT_SECRET: process.env.STRIKE_IDENTITY_SERVER_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  })
}
