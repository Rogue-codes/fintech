import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import {BsCash} from 'react-icons/bs'

const Navi = styled.nav`
    width: 80%;
    margin:auto;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .animate{
        width: 25%;
        height: 50vh;
        border-top: 4px solid #fffae6;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 20%;
        top: 12%;
    }
    .animate1{
        width: 25%;
        height: 50vh;
        border-top: 4px solid #fffae6;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 25%;
        top: 12%;
    }
    .animate2{
        width: 25%;
        height: 50vh;
        border-top: 4px solid #fffae6;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 35%;
        top: 12%;
    }
`
const Left = styled.div`
    width:60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 5%;
    align-items: center;
    p{
        font-size: 1.3vw;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
`
const Logo = styled.div`
    height: 100%;
    width: 20%;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        font-family: 'Rubik Wet Paint', cursive;
        font-size: 3vw;
        color: black;
        text-decoration: none;
    }
`
const Right = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: flex-end;
    gap: 5%;
    align-items: center;
`
const Btn = styled.button`
    width: 30%;
    height: 8vh;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: #000;
        color: #fff;
    }
    &:nth-child(2){
        background: #ffcc00;
        &:hover{
            background: #f8d031;
            color: #000;
        }
    }
`
const Cont = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    gap: 2%;
    padding: 2%;
`
const Ico =styled.div`
    width: 10%;
    height: 50%;
    background: #fffae6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Links =styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        font-family: 'Roboto Flex', sans-serif;
        font-size: 1vw;
    }
    h5{
        font-family: 'Roboto Flex', sans-serif;
    }
`
function Nav() {
    const [showMenu, setShowMenu]= useState(false)
    const [showMenu2, setShowMenu2]= useState(false)
    const [showMenu3, setShowMenu3]= useState(false)


  
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

    const menuTransitions2 = useTransition(showMenu2, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu2,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

    const menuTransitions3 = useTransition(showMenu3, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu3,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })
  return (
    <Navi>
        <Left>
            <Logo><Link to='/'>Tuma</Link></Logo>
            <p  onMouseOver={()=>{setShowMenu(true)}} onMouseOut={()=>{setShowMenu(false)}}>Product</p> 
            <p onMouseOver={()=>{setShowMenu2(true)}} onMouseOut={()=>{setShowMenu2(false)}}>Business Type</p>
            <p onMouseOver={()=>{setShowMenu3(true)}} onMouseOut={()=>{setShowMenu3(false)}}>Company</p>
        </Left>
        <Right>
            <Btn>Sign In</Btn>
            <Btn>Get Started</Btn>
        </Right>
        {
        menuTransitions(
        (styles, item) => item && <animated.div style={styles} className='animate' onMouseOut={()=>{setShowMenu(false)}} onMouseOver={()=>{setShowMenu(true)}}>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><p>Accept Payments</p><h5>get paid with cards, transfers and QR codes</h5></Links>
            </Cont>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><p>Make Payments</p><h5>Male Large and multiple payments</h5></Links>
            </Cont>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><p>POS Terminal</p><h5>get paid with cards, transfers and QR codes</h5></Links>
            </Cont>

        </animated.div>
        )
      }

    {
        menuTransitions2(
        (styles, item) => item && <animated.div style={styles} className='animate1' onMouseOut={()=>{setShowMenu2(false)}} onMouseOver={()=>{setShowMenu2(true)}}>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><p>Mobile Money Agents</p><h5>make financial services accessible</h5></Links>
            </Cont>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><p>Small business</p><h5>Track payments and Your business Large and multiple payments</h5></Links>
            </Cont>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><p>Large Business</p><h5>Manage operations and track growth</h5></Links>
            </Cont>

        </animated.div>
        )
      }

    {
        menuTransitions3(
        (styles, item) => item && <animated.div style={styles} className='animate2' onMouseOut={()=>{setShowMenu3(false)}} onMouseOver={()=>{setShowMenu3(true)}}>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><h5>Mobile Money Agents</h5><p>make financial services accessible</p></Links>
            </Cont>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><h5>Small business</h5><p>Track payments and Your business Large and multiple payments</p></Links>
            </Cont>
            <Cont>
                <Ico><BsCash size='1rem'/></Ico>
                <Links><h5>Large Business</h5><p>Manage operations and track growth</p></Links>
            </Cont>

        </animated.div>
        )
      }
    </Navi>
  )
}

export default Nav