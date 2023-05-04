import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div style={{ fontSize: 30 }}>
				We already have the statistics for the future: the growth percentages of
				<br></br>
				pollution, overpopulation, desertification. The future is already in
				place.
			</div>
			<br></br>
            <div>
                <h2>Select from the following to get detailed data</h2>
            </div>
            <br></br>
			<div>
				<Button
					style={{ margin: 10 }}
					variant="success"
					onClick={() => {
						navigate("/ozone");
					}}
				>
					Ozone
				</Button>
				<Button
					style={{ margin: 10 }}
					variant="success"
					onClick={() => {
						navigate("/carbon");
					}}
				>
					Carbon Dioxide
				</Button>
				<Button
					style={{ margin: 10 }}
					variant="success"
					onClick={() => {
						navigate("/gases");
					}}
				>
					Toxic Gases
				</Button>
				<Button
					style={{ margin: 10 }}
					variant="success"
					onClick={() => {
						navigate("/dust");
					}}
				>
					Dust Particles
				</Button>
			</div>
		</div>
	);
};

export default Home;
