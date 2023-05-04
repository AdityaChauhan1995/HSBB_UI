import React, { useState, useEffect } from 'react';
import { Header, Form, Segment, Grid, Input, TextArea, Button, Dimmer, Loader, Message } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransferOrder } from '../../redux/actions/transfer';
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';

const CreateTransfer = ({ ...props }) => {

	const [customerName, setCustomerName] = useState('');
	const [custMobileNo, setCustMobileNo] = useState('');
	const [custId, setCustId] = useState('');
	const [instAddr, setInstAddr] = useState('');
	const [existingProvider, setExistingProvider] = useState('');
	const [billingAccount, setBillingAccount] = useState('');
	const [custEmail, setCustEmail] = useState('');
	const [remarks, setRemarks] = useState('');
	const [btuID, setBTUID] = useState('');
	const [loading, setLoading] = useState(false);
	const [isHidden, setIsHidden] = useState(true);
	const dispatch = useDispatch();


	const reduxMetaState = useSelector(state => state.transferList.meta);
	const reduxDataState = useSelector(state => state.transferList.data);

	const handleChange = (e, { type, name, value }) => {

		if (name == 'customerName') {
			setCustomerName(value);
		} else if (name == 'custMobileNo') {
			setCustMobileNo(value);
		} else if (name == 'custId') {
			setCustId(value);
		} else if (name == 'instAddr') {
			setInstAddr(value);
		} else if (name == 'existingProvider') {
			setExistingProvider(value);
		} else if (name == 'billingAccount') {
			setBillingAccount(value);
		} else if (name == 'custEmail') {
			setCustEmail(value);
		} else if (name == 'remarks') {
			setRemarks(value);
		} else if (name == 'btuID') {
			setBTUID(value);
		}
	}

	useEffect(() => {
		alert(reduxMetaState.CREATE_TRANSFER_ORDER_STATUS);
		if (reduxMetaState.CREATE_TRANSFER_ORDER_STATUS == SUCCESS) {
			setLoading(false);
			setIsHidden(false);
		}
	}, [reduxMetaState.CREATE_TRANSFER_ORDER_STATUS])

	const onSubmit = () => {


		const data = {
			"billingAccount": billingAccount,
			"status": "PEN",
			"custName": customerName,
			"custId": custId,
			"custEmail": custEmail,
			"custMobileNo": custMobileNo,
			"instAddr": instAddr,
			"existingProvider": existingProvider,
			"createdBy": "dkamal",
			"btuID": btuID,
			"remarks": remarks
		}
		setLoading(true);
		dispatch(createTransferOrder(data));

	}

	return (
		<>
			<div className='container-2'>
				<Segment style={{ background: '#050A30', color: 'white' }}>Transfer Request</Segment>
				<Form size='tiny' style={{ paddingTop: 0 }}>
					<Grid style={{ paddingRight: '100px', paddingLeft: '100px', paddingTop: 0 }}
						centered={true}>
						<Grid.Row>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0, paddingTop: 0 }}>
							<Grid.Column width={1}>
							</Grid.Column>
							<Grid.Column width={14}>

								<Grid style={{ background: 'white', paddingTop: 0, paddingTop: 0 }}>
									<Message  icon='inbox' hidden={isHidden}>
										<label style={{color:'Red'}}>Transfer request is submitted successully, tracking reference id: <b>{reduxDataState.id}</b> </label>
									</Message>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={6}>
											<label>Customer Name</label>
										</Grid.Column>
										<Grid.Column width={5}>
											<label>Customer ID</label>
										</Grid.Column>
										<Grid.Column width={5}>
											<label>Contact No</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={6}>
											<Input
												placeholder='Name'
												name='customerName'
												onChange={handleChange}
												size='large'
												fluid
												value={customerName}
												disabled={!isHidden}
											>
											</Input>
										</Grid.Column>
										<Grid.Column width={5}>
											<Input
												placeholder='Cust Id'
												name='custId'
												onChange={handleChange}
												size='large'
												fluid
												value={custId}
												disabled={!isHidden}
											>
											</Input>
										</Grid.Column>
										<Grid.Column width={5}>
											<Input
												placeholder='Contact No'
												name='custMobileNo'
												onChange={handleChange}
												size='large'
												fluid
												value={custMobileNo}
												disabled={!isHidden}
											>
											</Input>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={6}>
											<label>Existing Service Provider</label>
										</Grid.Column>
										<Grid.Column width={5}>
											<label>Billing Acount</label>
										</Grid.Column>
										<Grid.Column width={5}>
											<label>BTU ID</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={6}>
											<Input
												placeholder='Existing Provider'
												name='existingProvider'
												onChange={handleChange}
												size='large'
												fluid
												value={existingProvider}
												disabled={!isHidden}
											>
											</Input>
										</Grid.Column>
										<Grid.Column width={5}>
											<Input
												placeholder='Billing Account'
												name='billingAccount'
												onChange={handleChange}
												size='large'
												fluid
												value={billingAccount}
												disabled={!isHidden}
											>
											</Input>
										</Grid.Column>
										<Grid.Column width={5}>
											<Input
												placeholder='BTU ID'
												name='btuID'
												onChange={handleChange}
												size='large'
												fluid
												value={btuID}
												disabled={!isHidden}
											>
											</Input>
										</Grid.Column>
										<Grid.Column width={10} />
									</Grid.Row>

									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={4}>
											<label>Email</label>
										</Grid.Column>
										<Grid.Column width={6}>
											<label>Service Address</label>
										</Grid.Column>
										<Grid.Column width={6}>
											<label>Remarks</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={4}>
											<TextArea name='custEmail' onChange={handleChange} disabled={!isHidden} value={custEmail}/>
										</Grid.Column>
										<Grid.Column width={6}>
											<TextArea name='instAddr' onChange={handleChange} disabled={!isHidden} value={instAddr} />
										</Grid.Column>
										<Grid.Column width={6}>
											<TextArea name='remarks' onChange={handleChange} disabled={!isHidden} value={remarks}/>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row style={{ paddingBottom: 10 }}>
										<Grid.Column width={14} />
										<Grid.Column width={2} >
											{ (isHidden) &&
												<Button
													className='ui button primaryButton'
													onClick={onSubmit} fluid>
													Submit
												</Button>
											}
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
							<Grid.Column width={1}>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Form>
				<Dimmer active={loading} page style={{ paddingTop: '300px' }}>
					<Loader indeterminate size={'huge'}>
						Loging In...<br />
					</Loader>
				</Dimmer>
			</div>
		</>
	);
}

export default CreateTransfer;