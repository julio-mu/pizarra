import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	List,
	ListItem,
} from '@material-ui/core';
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
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		boxShadow: 'none',
	},
	listItems: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
	},
	menuItem: {
		fontFamily: 'Roboto',
		color: '#535353',
		fontSize: '12px',
		fontWeight: '500',
		lineHeight: '20px',
		textTransform: 'uppercase',
		width: 'max-content',
		textDecoration: 'none',
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div>
			<AppBar
				position="static"
				color="transparent"
				style={{ boxShadow: 'none' }}
			>
				<Toolbar className={classes.root}>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Button className={classes.menuItem}>Pizarra</Button>
					</Link>
					<List className={classes.listItems}>
						<ListItem>
							<Link to="/nosotros" className={classes.listItems}>
								<Dashboard
									style={{
										color: '#535353',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>Nosotros</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/pricing" className={classes.listItems}>
								<MonetizationOn
									style={{
										color: '#535353',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>Pricing</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/cursos" className={classes.listItems}>
								<ViewList
									style={{
										color: '#535353',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>Ver Cursos</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/signup" className={classes.listItems}>
								<Person
									style={{
										color: '#535353',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>Register</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/signin" className={classes.listItems}>
								<Fingerprint
									style={{
										color: '#535353',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>Login</Typography>
							</Link>
						</ListItem>
					</List>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Footer;
