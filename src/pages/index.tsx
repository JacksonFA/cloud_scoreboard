import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { FadeIn } from 'animate-css-styled-components'

import Info from '../assets/info.svg'

import * as Styles from '../styles/index'

const Home: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [percent, setPercent] = useState('100%')
  const [percentNumber, setPercentNumber] = useState('0%')
  const [width, setWidth] = useState(50)

  useEffect(() => {
    (async () => {
        const response = await axios.get('/api/scrapping')
        const percentage = Number(parseFloat(response.data.percent.replace('%', '')).toFixed(2))
        console.log(percentage);
        setPercent(`${String(100 - percentage)}%`)
        setPercentNumber(`${String(percentage)}%`)
        const widthScreen = window.innerWidth
        setWidth(widthScreen)
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
                    Porcentagem atual: <b>{percentNumber}</b>
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

      <FadeIn duration="2.0s" delay="1.0s">
        <Styles.Content width={width}>
            <Styles.Cloud>
                <Styles.CloudFrontSVG percentage={percent} />
            </Styles.Cloud>
            <Styles.Cloud>
                <Styles.CloudBackSVG />
            </Styles.Cloud>
            <Styles.Cloud>
                <Styles.CloudPercent>{percentNumber}</Styles.CloudPercent>
            </Styles.Cloud>
        </Styles.Content>
      </FadeIn>
    </Styles.Container>
  )
}

export default Home;