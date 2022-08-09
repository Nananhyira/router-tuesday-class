import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbars() {
	return (
		<Nav defaultActiveKey="/home" as="ul">
			<Nav.Item as="li">
				<Link className="nav" to="/">
					Home
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className="nav" to="/contact">
					Contact
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className="nav" to="/project">
					project
				</Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Link className="nav" to="/about">
					About
				</Link>
			</Nav.Item>
		</Nav>
	);
}

export default Navbars;
