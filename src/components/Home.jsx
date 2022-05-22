import React from 'react'
import styled from 'styled-components'
import bg from '../Assets/Nomba.webp'
import {MdOutlinePayments} from 'react-icons/md'
import {BsBank2} from 'react-icons/bs'
import {GiCash} from 'react-icons/gi'
import Slider from './Slider'
const Cont = styled.div`
    width: 95%;
    min-height:100vh;
    margin:auto;
`
const First = styled.div`
    width: 100%;
    height:60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left = styled.div`
    width: 55%;
    height:100%;
    padding: 2%;
`
const Right = styled.div`
    width: 30%;
    height:100%;
    clip-path: polygon(0 64%, 100% 0, 100% 100%, 0% 100%);
    background: url('https://www.ubagroup.com/nigeria/wp-content/uploads/sites/3/2018/08/UBA-POS.jpg');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const Text = styled.h2`
    font-size: 3vw;
    font-family: 'PT Serif', serif;
`
const TextSm = styled.p`
    margin-top: 1%;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 1.5vw;
    width: 60%;
`
const Bttn = styled.button`
    margin-top: 3%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #ffcc00;
    font-size: 1vw;
    font-weight: 800;
    padding: 2% 5%;
`
const Second = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #efefef;
    gap: 2%;
    border: 1px solid #efefef;
`
const SecondCont = styled.div`
    width: 95%;
    margin:auto;
    height:80vh;
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-top: -17%;
`
const Left1 = styled.div`
    width: 50%;
    height:100%;
    padding: 2%;
    background: url('https://media-cdn.tripadvisor.com/media/photo-s/1d/c3/ac/49/exterior-view.jpg');
    clip-path: polygon(98% 0%, 99% 1%, 98% 62%, 39% 100%, 0% 100%, 1% 0%);
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const Right1 = styled.div`
    width: 30%;
    height:70%;
    clip-path: polygon(100% 1%, 100% 100%, 27% 100%, 1% 86%, 1% 0%);
    background: url('https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2021/11/PAYCENTRE-MARKET-AGENT-scaled.jpg');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const SecondCont2 = styled.div`
    width: 95%;
    margin:auto;
    height:70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left2 = styled.div`
    width: 40%;
    height:100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1{
        font-size: 3vw;
        font-family: 'PT Serif', serif;
    }
    p{
        margin-top: 1%;
        font-family: 'Oxygen', sans-serif;
        font-size: 1.2vw;
        width: 70%;
    }
`
const Right2 = styled.div`
    width: 40%;
    height:100%;
    background: url('${bg}');
    background-size: contain;
    -webkit-background-size:contain;
    -moz-background-size:contain;
    -o-background-size:contain;
    background-repeat: no-repeat;
    background-position: 70% 80%;
`
const SecondCont3 = styled.div`
    margin-top: 5%;
    width: 100%;
    height: 70vh;
    background:#121212;
`
const Top = styled.h1`
    color: #fff;
    display: flex;
    padding-top: 5%;
    font-size: 2vw;
    font-family: 'Barlow', sans-serif;
    justify-content: center;
    align-items: center;
    height: 20%;
    text-align: center;

`
const Bottom = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    gap: 5%;
    align-items: center;
`
const Card = styled.div`
    width: 20%;
    height: 90%;
    background:#121212;
`
const Icon = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CardBottom = styled.div`
    width: 100%;
    height: 50%;
    h1{
        font-family: 'Radio Canada', sans-serif;
        font-size: 1vw;
        padding: 2%;
        text-align: center;
        color: white
    }
    p{
        font-family: 'Radio Canada', sans-serif;
        font-size: 1vw;
        font-weight: 200;
        padding: 2%;
        text-align: center;
        color: white
    }
`
const SecondCont4 =styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    margin-top: 5%;
`
const Second4 =styled.div`
    width: 95%;
    height: 100%;
    margin:auto;
    background: #fff;
`
const Top1 = styled.h1`
    display: flex;
    font-size: 2vw;
    font-family: 'Barlow', sans-serif;
    height: 20%;
    width: 55%;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 22.5%;
`
const LeftSect = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efe9e9;
`
const RightSect = styled.div`
    width: 45%;
    height: 80%;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LeftSectText = styled.div`
    width: 50%;
    height: 100%;
    padding: 5%;
    h4{
        font-family: 'PT Serif', serif;
        margin-top: 47%;
    }
    h1{
        font-family: 'PT Serif', serif;
        font-size: 2vw;
        margin-bottom: 4%;
        margin-top: 2%;
    }
    li{
        font-family: 'PT Serif', serif;
        list-style-type: square;
        margin-top: 2%;
    }
`
const Pic = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 90%;
        object-fit: contain;
    }
`
const Third = styled.div`
    width: 95%;
    height: auto;
    margin: auto;
`
const Fourth = styled.div`
    width: 90%;
    margin: auto;
    min-height: 100vh;
    padding: 1%;
`
const Head = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    font-size: 3vw;
    margin-bottom: 5%;
    font-family: 'Barlow', sans-serif;
    width: 60%;
    margin-left: 20%;
    text-align: center;
`
const Text3 = styled.p`
    @media (max-width:450px) {
        font-size: 1.2rem;
    }
    color: white;
    z-index: 20;
    position: absolute;
    top: 100%;
    font-size: 1.2vw;
    transition: all .5s linear;
    font-family: 'Roboto Flex', sans-serif;
    background: #000000a2;
    padding: 2%;
    height: 40vh;
`

const Cards =styled.div`
    width: 25%;
    height: 50vh;
    justify-content: center;
    position: relative;
    overflow: hidden;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        transition: all 1s linear;
    }
    &:hover{
        img{
            transform: scale(1.2);
        }
        ${Text3}{
            top: 80%;
        }
    }
`
const Fifth = styled.div`
    width: 100%;
    height: 70vh;
    border: 10px solid #000;
    background-color:black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FifthcardL = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3%;
    h1{
        font-family: 'Roboto Flex', sans-serif;
        font-size: 4vw;
        color: white;
    }
    span{
        color: #ffcc00;
    }
    p{
        color: white;
        margin-top: 2%;
        font-family: 'Roboto Flex', sans-serif;
        font-size: 1.6vw;
    }
    button{
        width: 30%;
        height: 10vh;
        margin-top: 5%;
        font-size: 1.5vw;
        background: #ffcc00;
        cursor: pointer;
        border-radius: 5px;
        &:hover{
            background: #f3ce38;
        }
    }
`
const FifthcardR = styled.div`
    width: 30%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit:contain;
    }
`
function Home() {
  return (
      <>
    <Cont>
        <First>
            <Left>
                <Text>Simple payment solutions for your business</Text>
                <TextSm>
                Accept payments, send money, use tools that will help you grow your business
                </TextSm>
                <Bttn>Create an account for Free</Bttn>
            </Left>
            <Right>
            </Right>
        </First>
    </Cont>

    <Second>
        <SecondCont>
        <Left1></Left1>
        <Right1></Right1>
        </SecondCont>

        <SecondCont2>
        <Left2>
                <h1>You mean business when you go pro</h1>
                <p>
                    Receive payments on a new level with the new Nomba Pro terminal
                </p>
                <Bttn>See how it works</Bttn>
        </Left2>
        <Right2></Right2>
        </SecondCont2>

        <SecondCont3>
            <Top>You’ve got options. <br /> Receive payments on your terms</Top>
            <Bottom>
                <Card>
                    <Icon>
                        <GiCash size='5rem' color='white'/>
                    </Icon>
                    <CardBottom>
                        <h1>Accept all bank cards</h1>
                        <p>Receive your card payments through the Nomba POS terminals</p>
                    </CardBottom>
                </Card>

                <Card>
                    <Icon>
                        <BsBank2 size='5rem' color='white'/>
                    </Icon>
                    <CardBottom>
                        <h1>Transfer to an account</h1>
                        <p>With an account number, you can take payments into your account through transfers</p>
                    </CardBottom>
                </Card>

                <Card>
                    <Icon>
                        <MdOutlinePayments size='5rem' color='white'/>
                    </Icon>
                    <CardBottom>
                        <h1>Scan a QR code</h1>
                        <p>Accept QR payments through codes and review transactions on your POS terminal</p>
                    </CardBottom>
                </Card>
            </Bottom>
        </SecondCont3>

        <SecondCont4>
            <Second4>
            <Top1>Durable, easy-to-use payment machines for businesses in Africa</Top1>
            <Bottom>
                <LeftSect>
                    <LeftSectText>
                        <h4>CURRENT DEVICE</h4>
                        <h1>Tuma Lite</h1>
                        <ul>
                            <li>Accept all Bank Cards</li>
                            <li>Connects to WiFi</li>
                        </ul>
                    </LeftSectText>
                    <Pic>
                        <img src="https://www.nomba.com/static/0df992af67ab028cd3faa06520bb86da/43b39/Nomba%20Lite.webp" alt="" />
                    </Pic>
                </LeftSect>

                <RightSect>
                    <LeftSectText>
                        <h4>NEW DEVICE</h4>
                        <h1>Tuma Pro</h1>
                        <ul>
                            <li>Accept all Bank Cards</li>
                            <li>Pocket Friendly</li>
                            <li>Light and Sleeky</li>
                            <li>Easy to operate</li>
                            <li>Connects to 4G/3G/2G WiFi</li>
                            <li>Bluetooth Connectivity</li>
                        </ul>
                    </LeftSectText>

                    <Pic>
                        <img src="https://www.nomba.com/static/b6f292db38a284f3c1f603aebc84beb3/6668b/Nomba%20Pro%202.webp" alt="" />
                    </Pic>
                </RightSect>
            </Bottom>
            </Second4>
        </SecondCont4>

    </Second>

    <Third>
        <Slider/>
    </Third>

    <Fourth>
        <Head>Tips, updates and stories from our community</Head>
        <Bottom>
            <Cards>
                <img src="https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <Text3>Tuma  Nigeria’s Ego Pay, Changes Name to Tuma and Strengthens Expansion Plans With New Strategic Hires</Text3>
            </Cards>
            <Cards>
                <img src="https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Text3>Meeting of Minds at the Tuma Aggregator Conference MARCH 2022</Text3>
            </Cards>
            <Cards>
                <img src="https://cloud.fullstackacademy.com/image1_190429_143605.jpg?mtime=20190429143606" alt="" />
                <Text3>Tuma, Organically Growing a Safe Place for All Employees To Thrive</Text3>
            </Cards>
            <Cards>
                <img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <Text3>African fintech company, Ego Pay, changes its identity to Tuma APRIL 2022</Text3>
            </Cards>
        </Bottom>
    </Fourth>

    <Fifth>
        <FifthcardL>
        <h1>Get a free <span>Tuma</span> account</h1>
        <p>Change how you spend, manage and save money</p>
        <button>Download</button>
        </FifthcardL>

        <FifthcardR>  
            <img src="/phone-mockup.webp" alt="" />
        </FifthcardR>
    </Fifth>
        </>
  )
}

export default Home