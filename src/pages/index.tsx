import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import Cloud from '../assets/cloud.svg'

const Home: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/scrapping')
      setPercent(response.data.percent);
    })()
  }, [])

  return (
    <div>
      <Head>
        <title>Cloud ScoreBoard</title>
      </Head>

      <main>
        <h1>
          Porcentagem atual - <b>{percent}</b>
        </h1>
        <h1>
          Meta semestral - <b>65%</b>
        </h1>
        <h1>
          Meta mensal - <b>2,5%</b>
        </h1>
        <Cloud />
      </main>
    </div>
  )
}

export default Home;