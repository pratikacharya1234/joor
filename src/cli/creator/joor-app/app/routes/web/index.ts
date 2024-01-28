import { REQUEST, RESPONSE } from "joor"

export async function get(req:REQUEST): Promise<RESPONSE> {
  return {
    body: `
        <html>
            <head>
                <title>Hello Server</title>
            </head>

            <body>
            <h1>Joor Project has been successfully setup.</h1>
            <p>Edit files to get desired outcomes.</p>
            <b>Method Used: ${req.method}</b>
            </body>
        </html>
      `,
  };
}