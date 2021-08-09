import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand>La Azucena</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link eventKey={1}>Inicio</Nav.Link>
						<Nav.Link eventKey={2}>Servicios</Nav.Link>
						<Nav.Link eventKey={3}>Nosotros</Nav.Link>
						<Nav.Link eventKey={4}>Contacto</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
