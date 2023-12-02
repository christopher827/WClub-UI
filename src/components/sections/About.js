import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from "../Carousel"
import Button from '../Button'
import { dark } from '../../styles/Theme'

const Section=styled.div`
min-height:100vh;
width:100%;
background-color:${props=>props.theme.text};
color:${props=>props.theme.body};
display:flex;
justify-content:center;
align-items:center;
position:relative;
`
const Container=styled.div`
width:75%;
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;

@media(max-width:64em){
  width:85%;
}

@media(max-width:64em){
  width:100%;
  flex-direction:column;
  &>*:last-child{
width:80%;
  }
  @media(max-width:40em){

    &>*:last-child{
  width:90%;
    }
  
}
`
const Box=styled.div`
width:50%;
height:100%;
min-height:60vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width:40em){
  min-height:50vh;
}
`

const SubTextLight=styled.p`
font-size: ${(props)=>props.theme.fontmd};
color: ${(props)=>`rgba(${props.theme.bodyRgba},0.6)`};
align-self:flex-start;
width:80%;
margin:1rem auto;
font-weight:400;
@media(max-width:64em){
  width:100%;
  text-align:center;
  font-size:${(props)=>props.theme.fontsm};
  }
  @media(max-width:40em){
    font-size:${(props)=>props.theme.fontsm};
    }
    @media(max-width:30em){
      font-size:${(props)=>props.theme.fontxs};
      }
`
const ButtonContainer=styled.div`
width:80%;
margin:1rem auto;
display:flex;
align-self:flex-start;
@media(max-width:64em){
width:100%;
button{
margin:0 auto;
}
}
`
const Title=styled.h2`
font-size:${(props)=>props.theme.fontxxl};
text-transform:capitalize;
color:${(props)=>props.theme.body}
align-self:flex-start;
width:80%;
margin:0 auto;
@media(max-width:64em){
width:100%;
text-align:center;
}
@media(max-width:40em){
  font-size:${(props)=>props.theme.fontxl};
  }
  @media(max-width:30em){
    font-size:${(props)=>props.theme.fontlg};
    }
      
`
const SubText=styled.p`
font-size:${(props)=>props.theme.fontlg};
color:${(props)=>props.theme.body}
align-self:flex-start;
width:80%;
margin:1rem auto;
font-weight:400;
@media(max-width:64em){
  width:100%;
  text-align:center;
  font-size:${(props)=>props.theme.fontmd};
  }
  @media(max-width:40em){
    font-size:${(props)=>props.theme.fontmd};
    }
    @media(max-width:30em){
      font-size:${(props)=>props.theme.fontsm};
      }
  
`

function About() {
  return (
<Section id="about">
<Container>
<Box><Carousel/></Box>
<Box>
<Title>
Welcome to The <br/> W Club.
</Title>
<SubText>
Send and receive funds in GBP, USD, EUR & SGD</SubText>
<SubTextLight>
W is a platform that gives you access to send and receive money to different charity organizations and individuals. We make it easier for individuals and charity homes to recieve money.</SubTextLight>
<ButtonContainer>
<ThemeProvider theme={dark}>
<Button text="JOIN W NOW" link="/login"/>
</ThemeProvider>
</ButtonContainer>
</Box>
</Container>
</Section>
    )
}
export default About