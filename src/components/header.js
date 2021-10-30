import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Typography, List, ListItem } from '@material-ui/core';
import {
	Dashboard,
	MonetizationOn,
	Person,
	Fingerprint,
	ViewList,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#535353',
		minHeight: '64px',
		padding: '0px 84px',
	},
	listItems: {
		'&:hover': {
			background: '#fcfcfc',
		},
	},
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
	},
	menuItem: {
		fontFamily: 'Roboto',
		color: '#ffffff',
		fontSize: '12px',
		fontWeight: '500',
		lineHeight: '20px',
		textTransform: 'uppercase',
		width: 'max-content',
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="static">
				<Grid container xs={12} className={classes.root}>
					<Grid
						item
						xs={2}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}
					>
						<Link
							to="/"
							style={{
								textDecoration: 'none',
							}}
						>
							<Typography className={classes.menuItem}>Pizarra</Typography>
						</Link>
					</Grid>
					<Grid item xs={5} />
					<Grid item xs={5} className={classes.listItem}>
						<List className={classes.listItem}>
							<ListItem>
								<Link to="/nosotros" className={classes.listItem}>
									<Dashboard
										style={{
											color: '#ffffff',
											marginRight: '5px',
											height: '20px',
										}}
									/>
									<Typography className={classes.menuItem}>Nosotros</Typography>
								</Link>
							</ListItem>
							<ListItem>
								<Link to="/pricing" className={classes.listItem}>
									<MonetizationOn
										style={{
											color: '#ffffff',
											marginRight: '5px',
											height: '20px',
										}}
									/>
									<Typography className={classes.menuItem}>Pricing</Typography>
								</Link>
							</ListItem>
							<ListItem>
								<Link to="/cursos" className={classes.listItem}>
									<ViewList
										style={{
											color: '#ffffff',
											marginRight: '5px',
											height: '20px',
										}}
									/>
									<Typography className={classes.menuItem}>
										Ver Cursos
									</Typography>
								</Link>
							</ListItem>
							<ListItem>
								<Link to="/signup" className={classes.listItem}>
									<Person
										style={{
											color: '#ffffff',
											marginRight: '5px',
											height: '20px',
										}}
									/>
									<Typography className={classes.menuItem}>
										Registrate
									</Typography>
								</Link>
							</ListItem>
							<ListItem>
								<Link to="/signin" className={classes.listItem}>
									<Fingerprint
										style={{
											color: '#ffffff',
											marginRight: '5px',
											height: '20px',
										}}
									/>
									<Typography className={classes.menuItem}>
										Iniciá sesión
									</Typography>
								</Link>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</AppBar>
		</div>
	);
};

export default Header;
