import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

const rp = require('request-promise')
const cheerio = require('cheerio')

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
	onError(error, req: NextApiRequest, res: NextApiResponse) {
		res
			.status(501)
			.json({ error: `Sorry something Happened! ${error.message}` })
	},
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
	}
})

apiRoute.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const options = {
        uri: 'http://localhost:5000/tests',
        transform: function (body) {
          return cheerio.load(body)
        }
    }

    rp(options)
      .then(($) => {
          $('.strong').each((i, item) => {
              if (i === 0) {
                const percent = item.children[0].data
                res.json({ percent })
              }
          })
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (error) {
      console.log(error)
  }
})

export default apiRoute

export const config = {
	api: {
		bodyParser: false
	}
}