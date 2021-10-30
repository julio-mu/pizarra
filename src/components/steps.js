import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		background: '#e0e0e0',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	completed: {
		display: 'inline-block',
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return [
		'Crea tu propia e-school gratis',
		'Crea tu primer curso',
		'Subi tu contenido',
		'Contale a tus alumnos',
		'Comparti tus conocimientos',
	];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return (
				<Grid container xs={12}>
					<Grid
						item
						xs={6}
						style={{
							margin: '5rem 0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography variant="h3" style={{ color: '#3C4858' }}>
							Crea, vende y gestiona tus cursos online con Pizarra
						</Typography>
						<Typography
							variant="h6"
							style={{ color: '#999999', marginTop: '1.5rem' }}
						>
							Tus habilidades y experiencias son unicas y valiosas. Gestiona
							facilmente tus cursos, workshops y capacitaciones. Construí un
							e-commerce para tu curso y obtene beneficios de tus conocimientos!
						</Typography>
						<Button
							variant="contained"
							color="primary"
							style={{
								border: '1px solid #e0e0e0',
								borderRadius: '30px',
								marginTop: '3rem',
								color: '#ffffff',
								fontSize: '11px',
								fontWeight: 'bold',
								lineHeight: '2rem',
								width: '150px',
								textTransform: 'uppercase',
								boxShadow: 'none',
							}}
						>
							Probar gratis
						</Button>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			);
		case 1:
			return (
				<Grid container xs={12}>
					<Grid
						item
						xs={6}
						style={{
							margin: '5rem 0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography variant="h3" style={{ color: '#3C4858' }}>
							Crea, vende y gestiona tus cursos online con Pizarra
						</Typography>
						<Typography
							variant="h6"
							style={{ color: '#999999', marginTop: '1.5rem' }}
						>
							Tus habilidades y experiencias son unicas y valiosas. Gestiona
							facilmente tus cursos, workshops y capacitaciones. Construí un
							e-commerce para tu curso y obtene beneficios de tus conocimientos!
						</Typography>
						<Button
							variant="contained"
							color="primary"
							style={{
								border: '1px solid #e0e0e0',
								borderRadius: '30px',
								marginTop: '3rem',
								color: '#ffffff',
								fontSize: '11px',
								fontWeight: 'bold',
								lineHeight: '2rem',
								width: '150px',
								textTransform: 'uppercase',
								boxShadow: 'none',
							}}
						>
							Probar gratis
						</Button>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			);
		case 2:
			return (
				<Grid container xs={12}>
					<Grid
						item
						xs={6}
						style={{
							margin: '5rem 0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography variant="h3" style={{ color: '#3C4858' }}>
							Crea, vende y gestiona tus cursos online con Pizarra
						</Typography>
						<Typography
							variant="h6"
							style={{ color: '#999999', marginTop: '1.5rem' }}
						>
							Tus habilidades y experiencias son unicas y valiosas. Gestiona
							facilmente tus cursos, workshops y capacitaciones. Construí un
							e-commerce para tu curso y obtene beneficios de tus conocimientos!
						</Typography>
						<Button
							variant="contained"
							color="primary"
							style={{
								border: '1px solid #e0e0e0',
								borderRadius: '30px',
								marginTop: '3rem',
								color: '#ffffff',
								fontSize: '11px',
								fontWeight: 'bold',
								lineHeight: '2rem',
								width: '150px',
								textTransform: 'uppercase',
								boxShadow: 'none',
							}}
						>
							Probar gratis
						</Button>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			);
		case 3:
			return (
				<Grid container xs={12}>
					<Grid
						item
						xs={6}
						style={{
							margin: '5rem 0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography variant="h3" style={{ color: '#3C4858' }}>
							Crea, vende y gestiona tus cursos online con Pizarra
						</Typography>
						<Typography
							variant="h6"
							style={{ color: '#999999', marginTop: '1.5rem' }}
						>
							Tus habilidades y experiencias son unicas y valiosas. Gestiona
							facilmente tus cursos, workshops y capacitaciones. Construí un
							e-commerce para tu curso y obtene beneficios de tus conocimientos!
						</Typography>
						<Button
							variant="contained"
							color="primary"
							style={{
								border: '1px solid #e0e0e0',
								borderRadius: '30px',
								marginTop: '3rem',
								color: '#ffffff',
								fontSize: '11px',
								fontWeight: 'bold',
								lineHeight: '2rem',
								width: '150px',
								textTransform: 'uppercase',
								boxShadow: 'none',
							}}
						>
							Probar gratis
						</Button>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			);
		case 4:
			return (
				<Grid container xs={12}>
					<Grid
						item
						xs={6}
						style={{
							margin: '5rem 0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography variant="h3" style={{ color: '#3C4858' }}>
							Crea, vende y gestiona tus cursos online con Pizarra
						</Typography>
						<Typography
							variant="h6"
							style={{ color: '#999999', marginTop: '1.5rem' }}
						>
							Tus habilidades y experiencias son unicas y valiosas. Gestiona
							facilmente tus cursos, workshops y capacitaciones. Construí un
							e-commerce para tu curso y obtene beneficios de tus conocimientos!
						</Typography>
						<Button
							variant="contained"
							color="primary"
							style={{
								border: '1px solid #e0e0e0',
								borderRadius: '30px',
								marginTop: '3rem',
								color: '#ffffff',
								fontSize: '11px',
								fontWeight: 'bold',
								lineHeight: '2rem',
								width: '150px',
								textTransform: 'uppercase',
								boxShadow: 'none',
							}}
						>
							Probar gratis
						</Button>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			);
		default:
			return (
				<Grid container xs={12}>
					<Grid
						item
						xs={6}
						style={{
							margin: '5rem 0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography variant="h3" style={{ color: '#3C4858' }}>
							Crea, vende y gestiona tus cursos online con Pizarra
						</Typography>
						<Typography
							variant="h6"
							style={{ color: '#999999', marginTop: '1.5rem' }}
						>
							Tus habilidades y experiencias son unicas y valiosas. Gestiona
							facilmente tus cursos, workshops y capacitaciones. Construí un
							e-commerce para tu curso y obtene beneficios de tus conocimientos!
						</Typography>
						<Button
							variant="contained"
							color="primary"
							style={{
								border: '1px solid #e0e0e0',
								borderRadius: '30px',
								marginTop: '3rem',
								color: '#ffffff',
								fontSize: '11px',
								fontWeight: 'bold',
								lineHeight: '2rem',
								width: '150px',
								textTransform: 'uppercase',
								boxShadow: 'none',
							}}
						>
							Probar gratis
						</Button>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			);
	}
}

export default function HorizontalStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});
	const steps = getSteps();

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	return (
		<div className={classes.root}>
			<Stepper
				nonLinear
				activeStep={activeStep}
				style={{
					width: 'inherit',
					alignItems: 'center',
					padding: '1rem 0',
					background: '#e0e0e0',
				}}
			>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepButton
							onClick={handleStep(index)}
							completed={completed[index]}
						>
							{label}
						</StepButton>
					</Step>
				))}
			</Stepper>
			<div>
				{allStepsCompleted() ? (
					<div>
						<Grid container xs={12}>
							<Grid
								item
								xs={6}
								style={{
									margin: '5rem 0',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
								}}
							>
								<Typography variant="h3" style={{ color: '#3C4858' }}>
									Crea, vende y gestiona tus cursos online con Pizarra
								</Typography>
								<Typography
									variant="h6"
									style={{ color: '#999999', marginTop: '1.5rem' }}
								>
									Tus habilidades y experiencias son unicas y valiosas. Gestiona
									facilmente tus cursos, workshops y capacitaciones. Construí un
									e-commerce para tu curso y obtene beneficios de tus
									conocimientos!
								</Typography>
								<Button
									variant="contained"
									color="primary"
									style={{
										border: '1px solid #e0e0e0',
										borderRadius: '30px',
										marginTop: '3rem',
										color: '#ffffff',
										fontSize: '11px',
										fontWeight: 'bold',
										lineHeight: '2rem',
										width: '150px',
										textTransform: 'uppercase',
										boxShadow: 'none',
									}}
								>
									Probar gratis
								</Button>
							</Grid>
							<Grid item xs={6}></Grid>
						</Grid>
						<Button onClick={handleReset}>Revisar el proceso</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>
							{getStepContent(activeStep)}
						</Typography>
						<div>
							<Button
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.button}
								style={{
									marginTop: '3rem',
									fontSize: '11px',
									lineHeight: '2rem',
									width: '150px',
								}}
							>
								Paso anterior
							</Button>
							<Button
								onClick={handleNext}
								className={classes.button}
								style={{
									marginTop: '3rem',
									fontSize: '11px',
									lineHeight: '2rem',
									width: '150px',
								}}
							>
								Siguiente paso
							</Button>
							{activeStep !== steps.length &&
								(completed[activeStep] ? (
									<Typography variant="caption" className={classes.completed}>
										Step {activeStep + 1} already completed
									</Typography>
								) : (
									<Button
										variant="contained"
										color="primary"
										onClick={handleComplete}
										style={{
											border: '1px solid #e0e0e0',
											borderRadius: '30px',
											marginTop: '3rem',
											color: '#ffffff',
											fontSize: '11px',
											fontWeight: 'bold',
											lineHeight: '2rem',
											width: '150px',
											textTransform: 'uppercase',
											boxShadow: 'none',
										}}
									>
										{completedSteps() === totalSteps() - 1
											? 'Finalizar'
											: 'Completar paso'}
									</Button>
								))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
