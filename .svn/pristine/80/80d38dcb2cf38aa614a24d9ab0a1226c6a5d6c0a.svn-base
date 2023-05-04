import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Grid, Input, Table, Pagination, Icon, Segment, Popup, Header, Button,TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchAllOrders,setOrdersData ,fetchOrder,modifyOrder} from '../../redux/actions/order';
import { FAILED, DEFAULT, SUCCESS, FAILURE } from '../../helpers/constants'
import ReactTooltip from "react-tooltip";
import { PleaseWait } from '../common/dimmer';


const TableHeader = () => {

	return (
		<Table.Row >
			<Table.HeaderCell className='tableHeader' style={{ width: '50px' }}>S.No</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Date Created</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Order Id</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>BTU ID</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '130px' }}>Provider Name</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '110px' }}>Status</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Appointment</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '230px' }}>Installation address</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '80px' }}>Area</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Type</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Package</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Action</Table.HeaderCell>
		</Table.Row>
	);
}


const TableRow = ({ Key, order, viewOrder, modifyOrder, cancelOrder,closeOrder,handleChange,cancelReason,leaveComment}) => {


	return (
		<React.Fragment>

			<Table.Row >
				<Table.Cell >{Key + 1}</Table.Cell>
				<Table.Cell >{order.createdDate.substring(0,10)}</Table.Cell>
				<Table.Cell >{order.orderId}</Table.Cell>
				<Table.Cell >{order.addrDetail.btuId}</Table.Cell>
				<Table.Cell >{order.providerName}</Table.Cell>
				<Table.Cell >{order.orderStatus}</Table.Cell>
				{ 
				   (order.slotNo === 1) &&
					<Table.Cell >9:30am - 10:30am</Table.Cell>
				}
				{ 
				   (order.slotNo === 2) &&
					<Table.Cell >12:00pm - 1:00pm</Table.Cell>
				}
				{ 
				   (order.slotNo === 3) &&
					<Table.Cell >2.30pm - 3:30pm</Table.Cell>
				}
				{ 
				   (order.slotNo === 4) &&
					<Table.Cell >5:00pm - 6.00pm</Table.Cell>
				}
				<Table.Cell >{order.addrDetail.instAddr}</Table.Cell>
				<Table.Cell >{order.addrDetail.instArea}</Table.Cell>
				<Table.Cell >{order.orderType}</Table.Cell>
				<Table.Cell >{order.packageId}</Table.Cell>
				<Table.Cell >
					<ReactTooltip id="view" placem="left" effect="solid">
						View Order
					</ReactTooltip>
					<ReactTooltip id="modify" place="right" effect="solid">
						Modify Order
					</ReactTooltip>
					<ReactTooltip id="cancel" place="left" effect="solid">
						Cancel Order
					</ReactTooltip>

					<Icon name='eye'
						size={'large'}
						style={{
							'color': 'green', 'cursor': 'pointer',
							paddingLeft: 3, paddingTop: 5
						}}
						data-tip data-for="view"
						onClick={() => viewOrder(order)}
					/>
					<Icon name='edit'
						size={'large'}
						style={{
							'color': 'blue', 'cursor': 'pointer',
							paddingLeft: 3, paddingTop: 5
						}}
						data-tip data-for="modify"
						onClick={() => modifyOrder(order)}
					/>
					<Popup trigger={
						<Icon name='remove'	size={'large'}
							style={{'color': 'red', 'cursor': 'pointer',
							paddingLeft: 3, paddingTop: 5}}
							data-tip data-for="cancel"
						/>} on='click' positionFixed size='small'>
						<Grid centered={true} width={10}>
							<Grid.Row style={{ paddingBottom: 0 }}>
								<Grid.Column textAlign='center'>
									<Header as='h3'><u>CANCEL ORDER</u></Header>	
								</Grid.Column>
							</Grid.Row>			
							<Grid.Row style={{ paddingBottom: 0 }}>
								<Grid.Column textAlign='center'>
									<Header as='h4'>Choose a reason for order cancellation</Header>
								</Grid.Column>
							</Grid.Row>											
							<Grid.Row style={{ paddingBottom: 0 }} >
								<Grid.Column  width ={20}>
									<TextArea
										placeholder='Cancel Reason'
										name='cancelReason'
										onChange={handleChange}
										value={cancelReason}
										rows={3} cols={45} fluid/>
								</Grid.Column>
							</Grid.Row>	
							<Grid.Row style={{ paddingBottom: 0 }}>
								<Grid.Column textAlign='center'>
									<Header as='h4'>Leave a comment</Header>
								</Grid.Column>
							</Grid.Row>	
							<Grid.Row style={{ paddingBottom: 0 }}>
								<Grid.Column textAlign='center'>
									<TextArea
										placeholder='Leave a comment'
										name='leaveComment'
										onChange={handleChange}
										value={leaveComment}
										rows={6} cols={45} fluid/>
								</Grid.Column>
							</Grid.Row>	
							<Button compact onClick={() => closeOrder(order)}>CANCEL</Button>
							<Button compact color='teal' onClick={() => cancelOrder(order)}>SUBMIT</Button>
						</Grid>
					</Popup>
				</Table.Cell>
			</Table.Row>
		</React.Fragment>
	);
}

class OrderSearch extends Component {


	constructor(props) {
		super(props);
		const { url } = this.props.match;
		let baseUrl = url.substring(0, url.lastIndexOf("/"));
		this.state = {
			open: false,
			boundaryRange: 1,
			siblingRange: 1,
			showEllipsis: true,
			showFirstAndLastNav: true,
			showPreviousAndNextNav: true,
			totalPages: 20,
			activePage: 1,
			firstindexOf: 0,
			lastIndexOf: 5,
			rowsPerPage: 5,
			currentOrderList: null,
			orderList: props.orderList,
			validateResult: {},
			loading: false,
			nextPageUrl: baseUrl + "/order/btu-installation?mode=",
			cancelReason:'',
			leaveComment:'',
			loading:false,
			mode:'',
			btuId:'',
			orderId:'',
			cancelOrderId:'',
			selectedBtuId:''
		}
	}

	componentDidMount(){
		this.setState({loading:true});
		this.props.fetchAllOrders();
	}


	componentDidUpdate(prevProps) {

		if (prevProps.FETCH_ALL_ORDERS_STATUS != SUCCESS && this.props.FETCH_ALL_ORDERS_STATUS === SUCCESS) {
			this.setState({ orderList: this.props.orderList, loading: false });
		} else if (prevProps.FETCH_ALL_ORDERS_STATUS != FAILED && this.props.FETCH_ALL_ORDERS_STATUS === FAILED) {
			this.setState({ validateResult: { status: FAILURE, message: 'Error in receiving data ' }, loading: false })
		}
		if (prevProps.SET_ORDERS_DATA_STATUS != SUCCESS && this.props.SET_ORDERS_DATA_STATUS === SUCCESS) {
			let { nextPageUrl,mode,selectedBtuId } = this.state;
			if(mode === 'view'){
			 	this.props.history.push(nextPageUrl + 'view&btuid=' + selectedBtuId);
			}
			else if(mode === 'modify'){
				this.props.history.push(nextPageUrl + 'edit&btuid=' + selectedBtuId);
			}
		}
		if (prevProps.FETCH_ORDER_STATUS != SUCCESS && this.props.FETCH_ORDER_STATUS === SUCCESS) {
			console.log('this.props.orderList',this.props.orderList)
			if(this.props.orderList != undefined && this.props.orderList != null 
				&& this.props.orderList[0] != null && this.props.orderList[0] != ""){
				this.setState({ orderList: this.props.orderList, loading: false });
			}else{
				alert("Can't find the data for the entered order id");
				this.setState({ loading: false });
				}
		} else if (prevProps.FETCH_ORDER_STATUS != FAILED && this.props.FETCH_ORDER_STATUS === FAILED) {
			//this.setState({ validateResult: { status: FAILURE, message: 'Error in receiving data ' }, loading: false })
			alert("Error in receiving data ");
			this.setState({ loading: false });
		}
		if (prevProps.MODIFY_ORDER_STATUS != SUCCESS && this.props.MODIFY_ORDER_STATUS === SUCCESS) {
			this.props.fetchOrder(this.state.cancelOrderId);
			this.setState({cancelOrderId:''});
		} else if (prevProps.MODIFY_ORDER_STATUS != FAILED && this.props.MODIFY_ORDER_STATUS === FAILED) {
			//this.setState({ validateResult: { status: FAILURE, message: 'Error in modifying data ' }, loading: false })
			alert("Error in modifying data ");
			this.setState({ loading: false });
		}
	}

	handlePaginationChange = (e, { activePage }) => {
		console.log(`active page is ${activePage}`);
		let { rowsPerPage } = this.state;
		let tempFirstindexOf = (activePage * rowsPerPage) - rowsPerPage;
		let tempLastIndexOf = activePage * rowsPerPage;

		this.setState({
			activePage: activePage,
			firstindexOf: tempFirstindexOf,
			lastIndexOf: tempLastIndexOf
		});
		//this.setState({ activePage })
	}

	searchOrder = () => {
		let {btuId,orderId} = this.state;
		this.setState({loading:true});
		if(orderId != undefined && orderId != null && orderId != ''){
			this.props.fetchOrder(orderId);
		}else{
			this.props.fetchAllOrders();
		}
	}

	viewOrder = (order) => {
		this.setState({mode:'view',selectedBtuId:order.addrDetail.btuId});
		console.log('view Order', order);
		let shiftSelected = '';
		if(order.slotNo === 1){
			shiftSelected = '9:30am - 10:30am';
		}else if(order.slotNo === 2){
			shiftSelected = '12:00pm - 1:00pm';
		}
		else if(order.slotNo === 3){
			shiftSelected = '2.30pm - 3:30pm';
		}
		else if(order.slotNo === 4){
			shiftSelected = '5:00pm - 6.00pm';
		}
		let orderData = {
			custName:order.addrDetail.custName,
			custEmail:order.addrDetail.custEmail,
			custMobileNo:order.addrDetail.custMobileNo,
			installationAddress:order.addrDetail.instAddr,
			contactName:order.addrDetail.contactName,
			contactEmail:order.addrDetail.contactEmail,
			contactNo:order.addrDetail.contactMobileNo,
			custPackage:order.packageId,
			subscriberType:order.subscriberType,
			voip:order.addrDetail.voip,
			iptv:order.addrDetail.iptv,
			tr69:order.addrDetail.tr69,
			shiftSelected:shiftSelected,
			shiftDate:order.appointmentDate,
			orderId:order.orderId,
			addrId:order.addrDetail.addrId,
			btuId:order.addrDetail.btuId,
			selectedAddress: {
				address:order.addrDetail.instAddr,
				city:order.addrDetail.instArea,
				addressType:order.addrDetail.instAreaType
			},
			createdDate:order.createdDate
		};
		this.props.setOrdersData(orderData);
	}
	modifyOrder = (order) => {
		this.setState({mode:'modify',selectedBtuId:order.addrDetail.btuId});
		let shiftSelected = '';
		if(order.slotNo === 1){
			shiftSelected = '9:30am - 10:30am';
		}else if(order.slotNo === 2){
			shiftSelected = '12:00pm - 1:00pm';
		}
		else if(order.slotNo === 3){
			shiftSelected = '2.30pm - 3:30pm';
		}
		else if(order.slotNo === 4){
			shiftSelected = '5:00pm - 6.00pm';
		}
		let orderData = {
			custName:order.addrDetail.custName,
			custEmail:order.addrDetail.custEmail,
			custMobileNo:order.addrDetail.custMobileNo,
			installationAddress:order.addrDetail.instAddr,
			contactName:order.addrDetail.contactName,
			contactEmail:order.addrDetail.contactEmail,
			contactNo:order.addrDetail.contactMobileNo,
			custPackage:order.packageId,
			subscriberType:order.subscriberType,
			voip:order.addrDetail.voip,
			iptv:order.addrDetail.iptv,
			tr69:order.addrDetail.tr69,
			shiftSelected:shiftSelected,
			shiftDate:order.appointmentDate,
			orderId:order.orderId,
			addrId:order.addrDetail.addrId,
			btuId:order.addrDetail.btuId,
			selectedAddress: {
				address:order.addrDetail.instAddr,
				city:order.addrDetail.instArea,
				addressType:order.addrDetail.instAreaType
			},
			createdDate:order.createdDate
		};
		this.props.setOrdersData(orderData);
	}

	cancelOrder = (order) => {
		let {cancelReason,leaveComment}  = this.state;
		order.cancellationReason = cancelReason;
		order.comments = leaveComment;
		order.orderStatus = "CANC";
		console.log('cancel order: ',order);
		this.setState({cancelReason:'',leaveComment:'',loading:true,cancelOrderId:order.orderId});
		this.props.modifyOrder(order);
		// setTimeout(() => this.setState({loading:false}), 1000);
		this.inputElement.click();
	}

	closeOrder = (order) => {
		this.setState({cancelReason:'',leaveComment:''});
		this.inputElement.click();
	}

	handleChange = (e, { name, type, value }) => {
		console.log('name',name,'value',value);
		this.setState({ [name]: value })
	}

	next = () => {
		this.props.history.push(this.state.nextPageUrl);
	}


	render() {

		let { orderList, rowsPerPage, currentOrderList, firstindexOf, lastIndexOf,
			activePage,
			boundaryRange,
			siblingRange,
			showEllipsis,
			showFirstAndLastNav,
			showPreviousAndNextNav,
			totalPages,
			selectedAddress, open,
			cancelReason,leaveComment } = this.state;

		currentOrderList = orderList.slice(firstindexOf, lastIndexOf);

		return (
			<div className='container-2'>
				<PleaseWait active={this.state.loading} />
				<Segment.Group horizontal style={{ background: '#050A30', color: 'white', padding: 0 }}>
					<Segment ></Segment>
					<Segment>
						<Input
							placeholder='BTU ID'
							name='btuId'
							onChange={this.handleChange}
							size='small'
							style={{ float: 'right' }}
						>
						</Input>
					</Segment>
					<Segment>
						<Input
							placeholder='Order Id'
							name='orderId'
							onChange={this.handleChange}
							size='small'
							type="Number"
							style={{ float: 'left' }}>
						</Input>
						<Icon name='search'
							size={'large'}
							style={{ 'color': 'white', 'cursor': 'pointer', paddingLeft: 20, paddingTop: 5 }}
							onClick={this.searchOrder}
						/>
					</Segment>
				</Segment.Group>

				<Form size='tiny'>

					<Pagination
						activePage={activePage}
						boundaryRange={boundaryRange}
						onPageChange={this.handlePaginationChange}
						size='mini'
						siblingRange={siblingRange}
						totalPages={totalPages}
						// Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
						ellipsisItem={showEllipsis ? undefined : null}
						firstItem={showFirstAndLastNav ? undefined : null}
						lastItem={showFirstAndLastNav ? undefined : null}
						prevItem={showPreviousAndNextNav ? undefined : null}
						nextItem={showPreviousAndNextNav ? undefined : null}

					/>
					<div >

						<Table celled >
							<Table.Header>
								<TableHeader />
							</Table.Header>

							<Table.Body>
								{
									currentOrderList.map((order, key) => {
										return (<TableRow
											Key={key}
											order={order}
											viewOrder={this.viewOrder}
											modifyOrder={this.modifyOrder}
											handleChange ={this.handleChange}
											cancelOrder = {this.cancelOrder}
											closeOrder = {this.closeOrder}
											cancelReason = {cancelReason}
											leaveComment = {leaveComment}
										/>)
									})
								}
							</Table.Body>


						</Table>
					</div>
					<div name='screenClick' ref={input => this.inputElement = input}/>
				</Form>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		orderList: state.order.data.orderList,
		FETCH_ALL_ORDERS_STATUS: state.order.meta.FETCH_ALL_ORDERS_STATUS,
		SET_ORDERS_DATA_STATUS:state.order.meta.SET_ORDERS_DATA_STATUS,
		FETCH_ORDER_STATUS:state.order.meta.FETCH_ORDER_STATUS,
		MODIFY_ORDER_STATUS:state.order.meta.MODIFY_ORDER_STATUS
	}
}


const mapDispatchToProps = {
	fetchAllOrders,
	fetchOrder,
	modifyOrder,
	setOrdersData
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSearch);
