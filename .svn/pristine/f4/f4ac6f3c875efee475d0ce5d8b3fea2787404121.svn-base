import React, { Component } from "react";
import { Header, Grid, Form, Input, Container, Button, Icon, Table, 
        Pagination, Dimmer, Loader,Message,Modal } from 'semantic-ui-react'
import { FAILED, DEFAULT, SUCCESS, FAILURE } from '../../helpers/constants';
import { DataLoad } from '../common/dimmer';

const TableHeader = () => {

	return (
		<Table.Row >
			<Table.HeaderCell className='tableHeader' style={{ width: '20px' }}>Select</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '250px' }}>Address</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '50px' }}>Postcode</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>City</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '50px' }}>Address TYpe</Table.HeaderCell>
		</Table.Row>
	);
}

const TableRow = ({ Key, address, selectAddress, selectedAddress }) => {

	return (
		<React.Fragment>

			<Table.Row >
				<Table.Cell style={{ textAlign: 'center' }}>
					<Icon name='selected radio'
						size={'large'}
						style={{
							'color': (selectedAddress.addressId == address.addressId) ? 'green' : '',
							'cursor': 'pointer'
						}}
						onClick={() => selectAddress(address)}
					/>
				</Table.Cell>
				<Table.Cell >{address.address}</Table.Cell>
				<Table.Cell >{address.postCode}</Table.Cell>
				<Table.Cell >{address.city}</Table.Cell>
				<Table.Cell >{address.addressType}</Table.Cell>
			</Table.Row>
		</React.Fragment>
	);
}

class CoverageCheck extends Component {
	constructor(props) {
		super(props);

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
			lastIndexOf: 3,
			rowsPerPage: 3,
			currentAddressList: null,
			addressList: props.addressList,
			streetBuildName: '',
			unitNo: '',
			postCode: '',
            loading: false,
            selectedAddress: {},
			status: SUCCESS,
			message: '',
		}
	}

	show() {
        console.log('open');
        this.setState({ open: true,status: SUCCESS,message: '',
                        boundaryRange: 1,
                        siblingRange: 1,
                        showEllipsis: true,
                        showFirstAndLastNav: true,
                        showPreviousAndNextNav: true,
                        totalPages: 20,
                        activePage: 1,
                        firstindexOf: 0,
                        lastIndexOf: 3,
                        rowsPerPage: 3,
                        currentAddressList: null,
                        addressList: [],
                        streetBuildName: '',
                        unitNo: '',
                        postCode: '', 
                        selectedAddress: {}})
	}

	save = () => {
        const {selectedAddress} = this.state;
        if(JSON.stringify(selectedAddress)==='{}'){
            this.setState({status:FAILURE,message:'Kindly select a row first'});
            return;
        }
        this.props.onSave(selectedAddress);
        this.setState({ open: false });
	}

	close= () =>{
        this.setState({ open: false });
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
    }

    handleChange = (event, { name, value, type }) => {
		this.setState({ [name]: value });
	}
    
    searchInstAddr = () => {
        let { postCode, streetBuildName, unitNo } = this.state;
        if(streetBuildName === undefined || streetBuildName === null || streetBuildName.trim() === ''){
			this.setState({status:FAILURE,message:'Kindly enter Street/Building Name'});
			return;
		}else{
            this.setState({status:SUCCESS,message:''});
        }
		this.props.onCheckNow(postCode, streetBuildName, unitNo);
    }
    
    selectAddress = (address) => {
		console.log('selectedAddress',address);
		this.setState({ selectedAddress: address,status:SUCCESS,message:'' });
	}

    render() {
		let { rowsPerPage, currentAddressList, firstindexOf, lastIndexOf,
			activePage,
			boundaryRange,
			siblingRange,
			showEllipsis,
			showFirstAndLastNav,
			showPreviousAndNextNav,
			totalPages,
			selectedAddress,status,message ,open} = this.state;
        let {addressList} = this.props;   
		currentAddressList = addressList.slice(firstindexOf, lastIndexOf);

		let div;

		if (addressList.length > 0) {
			div = <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'right' }}>
				<Table celled >
					<Table.Header>
						<TableHeader />
					</Table.Header>

					<Table.Body>
						{
							currentAddressList.map((address, key) => {
								return (
									<TableRow
										Key={key}
										address={address}
										selectAddress={this.selectAddress}
										selectedAddress={selectedAddress}
									/>
								)
							})
						}
					</Table.Body>
				</Table>
				<Button 
					className='ui button primaryButton'
					onClick={this.save}>
					SAVE
				</Button>
                <Button 
					className='ui button primaryButton'
					onClick={this.close}>
					CLOSE
				</Button>
			</div>;
		}

		return (
			<Modal 
				open={open}
				onClose={this.close}
				closeOnEscape={false}
				closeOnRootNodeClick={false} style={{ marginTop: 0 }}>
                	<Modal.Content >
			<div className='container-3'>
				<DataLoad active={this.state.loading} />
				<Header as='h3' textAlign='center' style={{ paddingTop: '30px' }}>
					Let's check if your area is covered
               </Header>
				<Form size='tiny'>
					<Grid style={{ padding: '20px' }} centered={true}>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={10}>
								<label className='heading'>Street/Building Name</label>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingTop: 0 }}>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={10}>
								<Input
									size='small' fluid icon='building'
									iconPosition='left'
									placeholder='Street/Building Name'
									name='streetBuildName'
									onChange={this.handleChange}
									size='large'
									fluid>
								</Input>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={3}>
								<label className='heading'>Unit No</label>
							</Grid.Column>
							<Grid.Column width={3}>
								<label className='heading'>PostCode</label>
							</Grid.Column>
							<Grid.Column width={4}>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingTop: 0 }}>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={3}>
								<Input
									size='small' fluid icon='building'
									iconPosition='left'
									placeholder='Unit No'
									name='unitNo'
									onChange={this.handleChange}
									size='large'
									fluid>
								</Input>
							</Grid.Column>
							<Grid.Column width={3}>
								<Input
									size='small' fluid icon='building'
									iconPosition='left'
									placeholder='Post Code'
									name='postCode'
									onChange={this.handleChange}
									size='large'
									fluid>
								</Input>
							</Grid.Column>
							<Grid.Column width={4}>
								<Button
									className='ui button primaryButton'
									onClick={this.searchInstAddr}
									fluid>
									<Icon name='search' /> CHECK NOW
								</Button>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ padding: 0 }}>
							<Grid.Column width={8} style={{ padding: 0 }}>
								{
									(status === FAILURE) &&
									<Message color='teal' compact size='tiny' style={{ minWidth: 400 }}
										onDismiss={() => this.setState({ status: 'SUCCESS',message:'' })}>
											<Message.Header>We have encounted an error.</Message.Header>
										<p>{message}</p>
									</Message>
								}
							</Grid.Column>
						</Grid.Row>
					</Grid>
					{
						(addressList.length > 0) && 
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
						style={{ marginLeft: '100px', marginRight: '100px' }}
					/>
					}

					{div}

				</Form>
				
			</div >
            </Modal.Content>
            </Modal>

		);
	}
}

export default CoverageCheck
