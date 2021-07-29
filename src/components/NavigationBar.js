import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg='black' variant='dark' fixed='top' expand='lg' collapseOnSelect style={{borderBottom: '1px solid #111'}}>
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <>2021_TalentShow</>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='the_navbar_nav' />
        <Navbar.Collapse id='the_navbar_nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/' className="text-info">
              <Nav.Link>HomePg</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/songbook' className="text-info">
              <Nav.Link>SongBook</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signup'>
              <Nav.Link className='fw-bold text-danger'>SIGNUP!</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
