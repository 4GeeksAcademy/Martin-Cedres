import React from "react";
import CentenaDeMil from "./CentenaDeMil";
import DecenaDeMil from "./DecenaDeMil";
import UnidadDeMil from "./UnidadDeMil";
import Centenas from "./Centenas";
import Decenas from "./Decenas";
import Unidades from "./Unidades";


//create your first component
const Home = (props) => {
	return (
		<div className="container mt-4">
			<div className="row bg-dark">
				<div className="col">
					<button type="button" class="btn btn-dark"><i class="bi bi-clock-fill" style={{ fontSize: '125px' }}></i></button>

				</div>
				<div className="col">
					<button type="button" class="btn btn-dark"><CentenaDeMil seconds={props.seconds} /></button>


				</div>
				<div className="col">
					<button type="button" class="btn btn-dark">	<DecenaDeMil seconds={props.seconds} /></button>


				</div>
				<div className="col">
					<button type="button" class="btn btn-dark">	<UnidadDeMil seconds={props.seconds} /></button>


				</div>
				<div className="col">
					<button type="button" class="btn btn-dark"><Centenas seconds={props.seconds} /></button>


				</div>
				<div className="col">
					<button type="button" class="btn btn-dark"><Decenas seconds={props.seconds} /></button>


				</div>
				<div className="col">
					<button type="button" class="btn btn-dark"><Unidades seconds={props.seconds} /></button>

				</div>

			</div>
		</div>
	);
};

export default Home;
