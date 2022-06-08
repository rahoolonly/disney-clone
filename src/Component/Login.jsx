import React from 'react'
import style from 'styled-components';
import bcimg from "./images/login-background.jpg";
import ct1 from './images/cta-logo-one.svg'


function Login() {
  return (
    <>
      <Container>
        <Content>
          <Ct>
          <Ct1  src={ct1} alt="img not loaded" />
          </Ct>
          <BgImage />
        </Content>
      </Container>
    </>
  )
}

const Container = style.section`
overflow :hidden;
display:flex;
height:100vh;
flex-direction:column;
text-align:center;
`

const Content = style.div`
width:100%;
height:100%;
min-height:100vh;
box-sizing:border-box;
position:relative;
display:flex;
padding:80px 40px;
flex-direction:column;
align-item:center;
justify-content:center;
`


const BgImage = style.div`
  background-image:url(${bcimg});
  height:100%;
  width:100%;
  background-postiton:top;
  backgrouond-repeat:no-repeat;
  background-size:cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

`

const Ct = style.div`
min-width:600px;
width:100%;
margin-bottom:2vw;

`

const Ct1 = style.img`
max-width:600px;
margin-bottom:12px;
width:100%;
`
export default Login
