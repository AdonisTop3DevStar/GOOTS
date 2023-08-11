import { Image, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Logo } from '../assets';
import { useConnect } from '../context/contexts';

function Header() {
  const { account, isConnected, connectWallet, disconnectWallet } = useConnect();
  return (
    <Navbar collapseOnSelect expand="lg" className="mt-3">
      <Container className='rounded-3 p-3'>
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            <Image src={Logo} height="50" className='me-3' />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link text-white fs-2">On Chain Lottery</NavLink>
          </Nav>
          { isConnected ? (
            <Nav>
              <Button className='bg-none connect-wallet py-2 px-4 rounded-5 border-white border-2' onClick={disconnectWallet}>{account.slice(0, 6) + "...." + account.slice(-6)}</Button>
            </Nav>
          ) : (
            <Nav>
              <Button className='bg-none connect-wallet py-2 px-4 rounded-5 border-white border-2' onClick={connectWallet}>Connect Wallet</Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;