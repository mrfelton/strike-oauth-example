declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIKE_API_URI: string;
      STRIKE_API_SCOPE: string;
      STRIKE_IDENTITY_SERVER_URL: string;
      STRIKE_IDENTITY_SERVER_CLIENT_ID: string;
      STRIKE_IDENTITY_SERVER_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
