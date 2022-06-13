import React from 'react'
import styled from 'styled-components';
import bcimg from "./images/login-background.jpg";
import ct1 from './images/cta-logo-one.svg'
import ct2 from './images/cta-logo-two.png'


function Login() {
  return (
    <>
      <Container>
        <Content>
          <Ct>
          <Ct1  src={ct1} alt="img not loaded" />
          <Btn>GET ALL HERE</Btn>
          <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ab, quos odit ea blanditiis voluptatibus optio vel cupiditate maiores
            sunt .</Description>
            <Ct2 src={ct2} alt="img not loaded"/>
          </Ct>
          <BgImage />
        </Content>
      </Container>
    </>
  )
}

const Container = styled.section`
overflow :hidden;
display:flex;
height:100vh;
flex-direction:column;
text-align:center;
`

const Content = styled.div`
width:100%;
height:100%;
min-height:100vh;
box-sizing:border-box;
position:relative;
display:flex;
padding:80px 40px;
flex-direction:column;
align-items:center;
justify-content:center;
`

const BgImage = styled.div`
  background-image:url(${bcimg});
  height:100%;
  width:100%;
  background-position: top;
background-repeat:no-repeat;
 background-size:cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

`

const Ct = styled.div`
max-width:650px;
width:100%;
display: flex;
flex-direction: column;
margin-bottom:2vw;
`

const Ct1 = styled.img`
margin-bottom:12px;
width:100%;
`

const Btn = styled.a`
width: 100%;
  background-color:  #0063e5;
  color: #f9f9f9;
  padding: 14px 0px;
  font-weight: bold;
  font-size: 17px;
  letter-spacing: 1.1px;
cursor: pointer;
border: 1px solid transparent;
border-radius: 4px;
margin-bottom: 7px;
&:hover{
  background-color: #0483ee;
}
`
const Description = styled.p`
  color: #ffff;
  font-size: 16px;
  letter-spacing: 1px;
  margin:0px 12px;
`

const Ct2 = styled.img`
  width: 100%;
  margin-top: 7px;
`
export default Login
