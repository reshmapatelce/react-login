import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DateRangePicker, DateRange } from "materialui-daterange-picker";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// const classes = useStyles();
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dtOpen: false,
			toggle: true,
			dateRange: null,
			popupOpen: false,
			store_val_is: "is"
		}
		this.storeisList = [
			{ value: "is", label: "is" },
			{ value: "greater", label: "greater than" },
			{ value: 'less', label: "Less than" }
		];
		this.storeList = [
			{ value: "xyz", label: "xyz" },
			{ value: "abc", label: "abc" },
			{ value: "pqr", label: "pqr" }
		]
	}

	handleChange = (e) => {
		console.log(e.target);
		this.setState({ [e.target.name]: e.target.value });
	}
	handleChangePicker = () => {
		this.setState({ dtOpen: true });
	}
	toggle = () => {
		this.setState({ toggle: !this.state.dtOpen });
	}
	setDateRange = (range) => {
		this.setState({ dateRange: range, dtOpen: false });
	}
	handleClickOpen = () => {
		this.setState({ popupOpen: true })
	}
	handleClose = () => {
		this.setState({ popupOpen: false });
	}
	render() {
		const { dtOpen, popupOpen, store_val_is, store_val } = this.state;
		return (
			<div>
				<div className="row">
					<div className="col-md-6">
						<FormControl fullWidth variant="outlined">
							<InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
							<OutlinedInput
								id="outlined-adornment-amount"
								value=""
								startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
								labelWidth={60}
							/>
						</FormControl>
					</div>
					<div className="col-md-2">
						<FormControl className="w-100" variant="outlined">
							<InputLabel htmlFor="grouped-select">Grouping</InputLabel>
							<Select defaultValue="" id="grouped-select">
								<MenuItem value="">
									<em>All time</em>
								</MenuItem>
								<MenuItem value={1}>Last 7 days</MenuItem>
								<MenuItem value={2}>Last 15 days</MenuItem>
								<MenuItem value={3}>Last Month</MenuItem>
								<MenuItem value={4}>Last Year</MenuItem>
								<MenuItem value={5} onClick={this.handleChangePicker} >Custom Range</MenuItem>
							</Select>
						</FormControl>

						<DateRangePicker
							open={dtOpen}
							toggle={this.toggle}
							onChange={(range) => this.setDateRange(range)}
						/>
					</div>
					<div className="col-md-2">
						<Button
							variant="contained"
							color="primary"
							size="large"
							startIcon={<FilterListIcon />}
							onClick={this.handleClickOpen}
						>
							Filter
            </Button>


						<Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={popupOpen} fullWidth="100%">
							<DialogTitle>{"Filters"}</DialogTitle>
							<DialogContent>
								<DialogContentText >
									<div className="row">
										<div className="col-md-2">
											<label>Store</label>
										</div>
										<div className="col-md-4"></div>
										<div className="col-md-4">
											<label>Ship to Country</label>
										</div>
									</div>
									<div className="row">
										<div className="col-md-2 form-group">

											<FormControl variant="outlined" className="form-control">
												<Select name="store_val_is" value={store_val_is} id="grouped-select" onChange={this.handleChange}>
													{this.storeisList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>
										<div className="col-md-4">

											<FormControl variant="outlined" className="form-control">
												<Select name="store_val" value={store_val} id="grouped-select" onChange={this.handleChange}>
													{this.storeList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>

										<div className="col-md-2 form-group">
											<FormControl variant="outlined" className="form-control">
												<Select name="store_val_is" value={store_val_is} id="grouped-select" onChange={this.handleChange}>
													{this.storeList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>
										<div className="col-md-4">
											<FormControl variant="outlined" className="form-control">
												<Select name="store_val" value={store_val} id="grouped-select" onChange={this.handleChange}>
													{this.storeList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4">
											<label>Order Status</label>
										</div>
										<div className="col-md-2"></div>
										<div className="col-md-4">
											<label>Ship to State</label>
										</div>
									</div>

									<div className="row">
										<div className="col-md-2 form-group">
											<FormControl variant="outlined" className="form-control">
												<Select name="store_val" value={store_val} id="grouped-select" onChange={this.handleChange}>
													{this.storeList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>
										<div className="col-md-4">
											<FormControl variant="outlined" className="form-control">
												<Select name="store_val" value={store_val} id="grouped-select" onChange={this.handleChange}>
													{this.storeList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>
										{/* </div>
									<div className="row"> */}
										<div className="col-md-2 form-group">
											<FormControl variant="outlined" className="form-control">
												<Select name="store_val" value={store_val} id="grouped-select" onChange={this.handleChange}>
													{this.storeList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>
										<div className="col-md-4">
											<FormControl variant="outlined" className="form-control">
												<Select name="store_val" value={store_val} id="grouped-select" onChange={this.handleChange}>
													{this.storeList.map((x, i) => {
														return (
															<MenuItem key={i} value={x.value} >{x.label}</MenuItem>
														)
													})}
												</Select>
											</FormControl>
										</div>
									</div>

								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button color="primary" onClick={this.handleClose}>Reset All filters</Button>
								<div style={{ flex: '1 0 0' }} />
								<Button onClick={this.handleClose}>
									Cancle
          						</Button>
								<Button variant="contained" onClick={this.handleClose} color="primary">
									Apply
          						</Button>
							</DialogActions>
						</Dialog>
					</div>
					<div className="col-md-2">
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={this.handleClickOpen}
							className="float-right"
						>
							Export
            </Button>
					</div>
				</div>
			</div>
		)
	}
}
export default Search;