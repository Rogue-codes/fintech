import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    width: 100%;
    height: 100vh;
`
const Section = styled.section`
    width: 25%;
    height: 100%;
    li{
        font-size: 1.5vw;
        font-family: 'Roboto Flex', sans-serif;
        margin-bottom: 5%;
        list-style-type: none;
        color: #4e4d4d;
        &:nth-child(1){
            color: #000;
            font-size: 2vw;
            margin-top: 4%;
        }
    }
`
const Top = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2%;
    padding-top: 3%;
`
const Bottom = styled.div`
    width: 100%;
    height: 40%;
    h1{
        font-size: 3vw;
        font-family: 'Rubik Wet Paint', cursive;
        margin: 2% 3%;
    }
    p{
        font-size: 1.5vw;
        font-family: 'Roboto Flex', sans-serif;
        margin: 2% 3%;
    }
    hr{
        margin-bottom: 5%;
    }
    span{
        margin-left: 2%;
        font-family: 'Roboto Flex', sans-serif;
    }
    .last{
        margin-left: 10%;
    }
`
function Footer() {
  return (
    <Foot>
        <Top>
            <Section>
                <li><b>Products</b></li>
                <li>Accept payments</li>
                <li>Make Payments</li>
                <li>POS Terminals</li>
            </Section>

            <Section>
                <li><b>Business Types</b></li>
                <li>Mobile Money Agents</li>
                <li>Small Business</li>
                <li>Large Business</li>
            </Section>

            <Section>
                <li><b>Tuma</b></li>
                <li>About us</li>
                <li>Blog</li>
                <li>Work with Tuma</li>
            </Section>

            <Section>
                <li><b>Follow us</b></li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Facebook</li>
            </Section>
        </Top>
        <Bottom>
            <h1>Tuma</h1>
            <p>privacy policy</p>
            <hr />
            <span>🇳🇬 19b Bosun Adekoya Street, Lekki Phase 1, Lagos, Nigeria.</span>
            <span>🇺🇸 1776 Sacremento St Apt 311 SAN Francisco CA 94109</span>
            <span className='last'>© 2022 Nomba, all rights reserved</span>
        </Bottom>
    </Foot>
  )
}

export default Footer