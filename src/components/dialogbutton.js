import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';
import {
	Dashboard,
	EventNote,
	ViewList,
	PlaylistAdd,
	LocalOffer,
	QuestionAnswer,
	CreditCard,
	Person,
	Email,
	Phone,
	School,
	Home,
	LocationCity,
	Public,
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
	YouTube,
	Web,
} from '@material-ui/icons';

export default function SocialMediaFacebook() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Grid item xs={12} style={{ width: 'fit-content', margin: '0 0 2rem 0' }}>
			<Button
				startIcon={<Facebook />}
				variant="outlined"
				color="primary"
				onClick={handleClickOpen}
				style={{ width: '200px', margin: '0' }}
			>
				Facebook
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		</Grid>
	);
}
