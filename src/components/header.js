import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
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
		backgroundColor: '#535353',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
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
				<Toolbar className={classes.root}>
					<Link to="/">
						<Button className={classes.menuItem}>Pizarra</Button>
					</Link>
					<List className={classes.listItems}>
						<ListItem>
							<Link to="/nosotros" className={classes.listItems}>
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
							<Link to="/pricing" className={classes.listItems}>
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
							<Link to="/cursos" className={classes.listItems}>
								<ViewList
									style={{
										color: '#ffffff',
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
										color: '#ffffff',
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
										color: '#ffffff',
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

export default Header;
