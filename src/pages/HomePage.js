import { useState } from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { NumericStepper } from '@anatoliygatt/numeric-stepper';
import { Banner, DarkImage } from '../assets';
import { useConnect } from '../context/contexts';
import { toast } from 'react-toastify';


export default function HomePage() {
    const INITIAL_VALUE = 0;
    const [value, setValue] = useState(INITIAL_VALUE);

    const { isConnected } = useConnect();

    const mintNFT = async () => {
        if (isConnected === true) {
            toast.success("okay")
            console.log(value)
        //   try {
        //     const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS); // Replace ABI with your contract's ABI
    
        //     // Call the mint function on your contract
        //     const receipt = await contract.methods.mint(value).send({ from: account });
    
        //     console.log('Minting success:', receipt);
        //   } catch (error) {
        //     console.error('Error minting NFT:', error);
        //   }
        } else {
            toast.error("please connect wallet")
        }
      };

    return (
        <div className="HomePage my-5">
            <Container>
                <Row className='my-5'>
                    <Col sm={12} md={6} className='mb-2'>
                        <div className='text-white text-center fs-1 mb-4'>WINNNG WITH GOLEN EGG</div>
                        <div className='text-center position-relative'>
                            <Image src={DarkImage} className='position-absolute dark-banner' />
                            <Image src={Banner} width="50%" className='rounded-5 me-auto' />
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mb-2 d-flex flex-column justify-content-center'>
                        <div className='text-white text-center fs-2 mb-3'>Minted so far: 7453</div>
                        <div className='text-white text-center fs-3 mb-3'>Mint Price: 0.170 BNB</div>
                        <NumericStepper
                            minimumValue={1}
                            maximumValue={1000}
                            stepValue={1}
                            initialValue={INITIAL_VALUE}
                            size="md"
                            inactiveTrackColor="#fed7aa"
                            activeTrackColor="#fddec0"
                            activeButtonColor="#ffedd5"
                            inactiveIconColor="#fb923c"
                            hoverIconColor="#ea580c"
                            activeIconColor="#9a3412"
                            disabledIconColor="#fdba74"
                            thumbColor="#f97316"
                            thumbShadowAnimationOnTrackHoverEnabled={false}
                            focusRingColor="#fff7ed"
                            onChange={(value) => {
                                setValue(value);
                            }}
                        />
                                {isConnected ? (
                                    <Row className='mt-3'>
                                        <Col sm={12} md={6} className='mb-2 mx-auto'>
                                            <Button className="mint-button py-2 px-4 rounded-5 border-white border-2 w-100" onClick={mintNFT}>Mint Now</Button>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row className='mt-3'>
                                        <p className='text-white mb-3 text-center'>Please Connect to MetaMask</p>
                                        <Col sm={12} md={6} className='mb-2 mx-auto'>
                                            <Button className="mint-button py-2 px-4 rounded-5 border-white border-2 w-100" onClick={mintNFT}>Mint Now</Button>
                                        </Col>
                                    </Row>
                                )}
                    </Col>
                </Row>
                <div className='text-white text-center fs-1'>RoadMap</div>
                <Row className='text-white my-4'>
                    <Col><div className='fs-3'>Phase 1 : memecoin, lol</div></Col>
                    <Col><div className='fs-3'>Phase 2 : 🥚on chain lottery</div></Col>
                    <Col><div className='fs-3'>Phase 3 : 🔥.....</div></Col>
                </Row>
            </Container>
        </div>
    )
}