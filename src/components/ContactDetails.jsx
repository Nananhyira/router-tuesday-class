import React from "react";
import { useParams } from "react-router-dom";

function ContactDetails() {
	const { name } = useParams();
	return (
		<div>
			<h1>contact details of {name} </h1>
			<p>lorem ipsum dolor sit amet, consectetur adip lorem lorem</p>
		</div>
	);
}

export default ContactDetails;
