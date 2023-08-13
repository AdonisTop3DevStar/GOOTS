import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { NumericStepper } from '@anatoliygatt/numeric-stepper';
import { Banner } from '../assets';
import { useConnect } from '../contexts/contexts';
import { toast } from 'react-toastify';

export default function HomePage() {
    const INITIAL_VALUE = 0;
    const [value, setValue] = useState(INITIAL_VALUE);

    const { isConnected } = useConnect();

   

    const mintNFT = async () => {
        if (!isConnected) {
            toast.info("Please Connect Wallet!");
            return;
        } else {
            
        }
    }

    return (
        <div className="HomePage">
            <Container>
                <Row className='my-5 py-5'>
                    <Col sm={12} md={6} className='mb-2'>
                        <div className='text-center'>
                            <Image src={Banner} width="80%" className='rounded-5 border border-5 me-auto egg-banner' />
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mb-2 d-flex flex-column justify-content-center aligin-items-center'>
                        <div className='text-white text-center fs-2 mb-3'>Minted so far: <span className='text-pop fs-1'>7453</span></div>
                        <div className='text-white text-center fs-3 mb-3'>Mint Price: <span className='text-pop fs-1'>0.01</span> ETH</div>
                        
                        <NumericStepper
                            minimumValue={0}
                            maximumValue={1000}
                            stepValue={1}
                            initialValue={INITIAL_VALUE}
                            size="sm"
                            inactiveTrackColor="#53493980"
                            activeTrackColor="#53493980"
                            activeButtonColor="#ffa939"
                            inactiveIconColor="#ffa93970"
                            hoverIconColor="#ffffff"
                            activeIconColor="#ad75fa"
                            disabledIconColor="#ffa93970"
                            thumbColor="#ffa939"
                            thumbShadowAnimationOnTrackHoverEnabled={false}
                            focusRingColor="#ffa939"
                            onChange={(value) => {
                                setValue(value);
                            }}
                        />
                        {isConnected ? (
                            <Row className='mt-3'>
                                <p className='text-white mb-3 text-center'>Participants must hold 50M $GOOTS tokens to mint</p>
                                <Col sm={12} md={6} className='mb-2 mx-auto'>
                                    <Button className="mint-button py-2 px-4 rounded-5 border-white border-2 w-100" onClick={mintNFT}>Mint Now</Button>
                                </Col>
                            </Row>
                        ) : (
                            <Row className='mt-3'>
                                <p className='text-white mb-3 text-center'>Participants must hold 50M $GOOTS tokens to mint</p>
                                <Col sm={12} md={6} className='mb-2 mx-auto'>
                                    <Button className="mint-button py-2 px-4 rounded-5 border-white border-2 w-100" onClick={mintNFT}>Mint Now</Button>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}