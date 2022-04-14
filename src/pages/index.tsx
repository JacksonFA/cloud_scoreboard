import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import Info from '../assets/info.svg'

import * as Styles from '../styles/index'

const Home: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [percent, setPercent] = useState('55,7%')
  const [width, setWidth] = useState(0)
  let [percentage, setPercentage] = useState('100%');

  useEffect(() => {
    (async () => {
        const response = await axios.get('/api/scrapping')
        setPercent(response.data.percent)
        const widthScreen = window.innerWidth
        setWidth(widthScreen)
        setPercentage(() => {
          return percentage = (100 - parseFloat(response.data.percent.replace('%', ''))).toFixed(2) + '%'; 
        })
    })()
  }, [])

  return (
    <Styles.Container>
      <Head>
        <title>Cloud ScoreBoard</title>
      </Head>

      <Styles.Title width={width}>
        <Styles.TitleText>Cobertura de código dos testes unitários</Styles.TitleText>
        <Styles.TitleText>DGuard-Cloud</Styles.TitleText>
      </Styles.Title>

      <Styles.Information width={width}>
          <Styles.Icon onClick={() => setShowInfo(!showInfo) }>
            <Info />
          </Styles.Icon>
        {showInfo && (
            <Styles.InformationContent>
                <text>
                    Porcentagem inicial: <b>55%</b>
                </text>
                <br />
                <text>
                    Porcentagem atual: <b>{percent}</b>
                </text>
                <br />
                <text>
                    Meta mensal: <b>+2,5%</b>
                </text>
                <br />
                <text>
                    Meta semestral: <b>65%</b>
                </text>
            </Styles.InformationContent>
        )}
      </Styles.Information>

      <Styles.Content width={width}>
        <Styles.Cloud>
            <Styles.CloudFrontSVG percentage={percentage} />
        </Styles.Cloud>
        <Styles.Cloud>
            <Styles.CloudBackSVG />
        </Styles.Cloud>
        <Styles.Cloud>
            <Styles.CloudPercent>{percent}</Styles.CloudPercent>
        </Styles.Cloud>
      </Styles.Content>
    </Styles.Container>
  )
}

export default Home;