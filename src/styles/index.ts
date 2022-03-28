import styled from 'styled-components'
import CloudImage from '../assets/cloud.svg'
import CloudBackImage from '../assets/cloudBack.svg'

export const Container = styled.body`
    flex: 1;
`

export const Title = styled.div<{width: number}>`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    width: ${props => props.width}px;
`

export const TitleText = styled.h1`
    color: #555;
    font-size: 3em;
    font-family: Arial;

    @media(max-width: 1200px) {
        font-size: 2em;
    }

    @media(max-width: 1000px) {
        font-size: 1.5em;
    }

    @media(max-width: 700px) {
        font-size: 1em;
    }

    @media(max-width: 460px) {
        font-size: 0.7em;
    }

    @media(max-height: 900px) {
        font-size: 2em;
    }

    @media(max-height: 720px) {
        font-size: 1.5em;
    }

    @media(max-height: 550px) {
        font-size: 1.2em;
    }
`

export const Content = styled.div<{width: number}>`
    display: flex;
    flex: 1;
    justify-content: center;
    width: ${props => props.width}px;
`

export const Cloud = styled.div`
    display: flex;
    position: absolute;
    height: 100%;
    align-items: center;
`

export const CloudSVG = styled(CloudImage)`
    max-width: 1920px;
    width: 1080pt;
    height: 500pt;

    @media(max-width: 1400px) {
        width: 750pt;
        height: 300pt;
    }

    @media(max-width: 1000px) {
        width: 600pt;
        height: 250pt;
    }

    @media(max-width: 700px) {
        width: 400pt;
        height: 150pt;
    }

    @media(max-height: 900px) {
        width: 750pt;
        height: 300pt;
    }

    @media(max-height: 720px) {
        width: 600pt;
        height: 250pt;
    }

    @media(max-height: 550px) {
        width: 500pt;
        height: 150pt;
    }
`

export const CloudBackSVG = styled(CloudBackImage)`
    max-width: 1920px;
    width: 1080pt;
    height: 500pt;

    @media(max-width: 1400px) {
        width: 750pt;
        height: 300pt;
    }

    @media(max-width: 1000px) {
        width: 600pt;
        height: 250pt;
    }

    @media(max-width: 700px) {
        width: 400pt;
        height: 150pt;
    }

    @media(max-height: 900px) {
        width: 750pt;
        height: 300pt;
    }

    @media(max-height: 720px) {
        width: 600pt;
        height: 250pt;
    }

    @media(max-height: 550px) {
        width: 500pt;
        height: 150pt;
    }
`

export const CloudPercent = styled.h1`
    font-size: 13em;
    color: #555;
    font-family: Arial;
    margin-top: 0.7em;

    @media(max-width: 1400px) {
        font-size: 8em;
    }

    @media(max-width: 1000px) {
        font-size: 6em;
    }

    @media(max-width: 700px) {
        font-size: 4em;
    }

    @media(max-height: 900px) {
        font-size: 8em;
    }

    @media(max-height: 720px) {
        font-size: 6em;
    }

    @media(max-height: 550px) {
        font-size: 4em;
    }
`

export const Information = styled.div<{width: number}>`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: flex-end;
    width: ${props => props.width}px;
    padding: 2em;
    z-index: 99999;

    @media(max-width: 750px) {
        width: ${props => props.width + 50}px;
    }
`

export const Icon = styled.span`
    width: 50px;
    height: 50px;
    cursor: pointer;

    @media(max-width: 1000px) {
        width: 40px;
        height: 40px;
    }
`

export const InformationContent = styled.div`
    background: #555;
    padding: 2em;
    border-radius: 1em;

    text {
        font-family: Arial;
        font-size: 1.5em;
    }

    @media(max-width: 1200px) {
        padding: 1.5em;
        text {
            font-size: 1.2em;
        }
    }

    @media(max-width: 1000px) {
        padding: 1em;
        text {
            font-size: 0.8em;
        }
    }

    @media(max-width: 700px) {
        padding: 0.8em;
        text {
            font-size: 0.5em;
        }
    
    @media(max-height: 900px) {
        padding: 1.5em;
        text {
            font-size: 1.2em;
        }
    }

    @media(max-height: 720px) {
        padding: 1em;
        text {
            font-size: 0.8em;
        }
    }
`