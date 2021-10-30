import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main/main';
import Panel from './admin/panel';
import SignIn from './main/signin';
import SignUp from './main/signup';
import Nosotros from './main/nosotros';
import Pricing from './main/pricing';
import Cursos from './courses/cursos';
import Eventos from './admin/eventos';
import Reservas from './admin/reservas';
import Descuentos from './admin/descuentos';
import Consultas from './admin/consultas';
import ListaDeEspera from './admin/lista-de-espera';

function Principal() {
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					exact
					render={() => {
						return <Main />;
					}}
				></Route>
				<Route
					path="/panel"
					exact
					render={() => {
						return <Panel />;
					}}
				></Route>
				<Route
					path="/signin"
					exact
					render={() => {
						return <SignIn />;
					}}
				></Route>
				<Route
					path="/signup"
					exact
					render={() => {
						return <SignUp />;
					}}
				></Route>
				<Route
					path="/nosotros"
					exact
					render={() => {
						return <Nosotros />;
					}}
				></Route>
				<Route
					path="/pricing"
					exact
					render={() => {
						return <Pricing />;
					}}
				></Route>
				<Route
					path="/cursos"
					exact
					render={() => {
						return <Cursos />;
					}}
				></Route>
				<Route
					path="/eventos"
					exact
					render={() => {
						return <Eventos />;
					}}
				></Route>
				<Route
					path="/reservas"
					exact
					render={() => {
						return <Reservas />;
					}}
				></Route>
				<Route
					path="/descuentos"
					exact
					render={() => {
						return <Descuentos />;
					}}
				></Route>
				<Route
					path="/consultas"
					exact
					render={() => {
						return <Consultas />;
					}}
				></Route>
				<Route
					path="/lista-de-espera"
					exact
					render={() => {
						return <ListaDeEspera />;
					}}
				></Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<Principal />, document.getElementById('root'));
