import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import logo from './images/kueski.png';

const Navigation = () => {
    return ( 
        <Navbar className='NavBar'>
            <Container className='logo-kueski'>
                <img width='180' height='90' src={logo} alt='kueski'/>
            </Container>
            <Container className='empresa'>
                <Navbar.Brand href="#home">Kueski Administrator</Navbar.Brand>
                <Navbar.Toggle />
            </Container>
            <Container className='usuario'>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='navbar-text'>
                    Signed in as: Jorge Del Río
                    </Navbar.Text>
                    <Navbar.Text className='text'>
                    <a href="#logout">Log Out</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
      </Navbar>
     );
}
export default Navigation;