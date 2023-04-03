import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import axios from 'axios'

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
    const percents = []
    const servicesTestsUri = ['https://dcloud-notifications-dev.herokuapp.com/tests/', 'https://dcloud-backend-development.herokuapp.com/tests/']
    for await (const serviceTestsUri of servicesTestsUri) { 
      const options = {
        url: serviceTestsUri,
        transformResponse: function (body) {
          return cheerio.load(body)
        }
      }
      const response = await axios.request(options)
      const html = response.data
      html('.strong').each((i, item) => {
        if (i === 0) {
          const percent = item.children[0].data
          percents.push(percent)
        }
      })
    }
    res.json({ percents })
  } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
  }
})

export default apiRoute

export const config = {
	api: {
		bodyParser: false
	}
}