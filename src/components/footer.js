import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GmailIcon, TelegramIcon, TwitterIcon } from "../assets";

export default function Footer() {
    return (
        <div className="Footer">
            <Container>
            <hr/>
                <Row className="mt-5">
                    <Col sm={8} md={3} className="d-flex align-items-center justify-content-around mx-auto">
                        <NavLink to="https://t.me/+PP6lgpXVqjIwNmNh" className="nav-link text-white text-center"><Image src={TelegramIcon} width="50" className="me-2"/></NavLink>
                        <NavLink to="https://twitter.com/goooooooots" className="nav-link text-white text-center"><Image src={TwitterIcon} width="50" className="me-2"/></NavLink>
                        <NavLink to="mailto:goots@goooooooots.com" className="nav-link text-white text-center"><Image src={GmailIcon} width="50" className="me-2"/></NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}