import React from 'react';
import { Grid, Form, Input, Table, Divider, Header, Dropdown, Button } from 'semantic-ui-react';
import {
	useParams
} from "react-router-dom";

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const DemandListOrderDetail = ({ ...props }) => {

	//let { referenceId } = props.match.params;
	const demandListRedux = useSelector(state => state.demandList.data);

	let { paramReferenceId } = useParams();

	const [currentDemandRecord, setCurrentDemandRecord] = useState();

	const [status, setStatus] = useState();

	const [statusList, setStatusList] = useState([
		{ key: 1, text: 'Open', value: 'Open' },
		{ key: 2, text: 'Close', value: 'Close' }
	]);

	let statusTableCol;


	useEffect(() => {

		const filteredList = demandListRedux.demandList.filter(
			row => {

				return row.referenceId == paramReferenceId;
			}
		);

		if (filteredList != null && filteredList != undefined && filteredList.length > 0) {
			setCurrentDemandRecord(filteredList[0]);
			setStatus(filteredList[0].status);
		}

	}, []);

	const handleChange = (e, { name, value, type }) => {


	}

	const submit = () => {

	}



	if (currentDemandRecord && currentDemandRecord.status === 'Close') {
		statusTableCol = status;
	} else {
		statusTableCol = <Dropdown
			placeholder='Please select'
			size='small'
			selection
			options={statusList}
			onChange={handleChange}
			name='status'
			value={status}
		/>;
	}


	return (<>
		<Header as='h3' style={{ margin: 0, paddingLeft: 20, paddingTop: 5 }}>
			DEMAND LIST REQUEST-{currentDemandRecord && currentDemandRecord.referenceId}
		</Header>
		<div className='container-small'>


			<Form size='tiny'>

				<Grid style={{ paddingRight: '100px', paddingLeft: '100px', paddingTop: 20 }}
					centered={true}>
					<Grid.Row>
					</Grid.Row>
					<Grid.Row style={{ paddingBottom: 0 }}>
						<Grid.Column width={1}>
						</Grid.Column>

						<Grid.Column width={14}>

							<Grid style={{ background: 'white', paddingTop: 0 }}>
								<Grid.Row style={{ paddingBottom: 0 }}>
									<Grid.Column width={16}>
										<label>Order Details</label>
										<Divider />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingBottom: 0 }}>
									<Grid.Column width={8}>
										<label>Request Type</label>
									</Grid.Column>
									<Grid.Column width={8}>
										<label>Service Address</label>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
									<Grid.Column width={8}>
										{currentDemandRecord && currentDemandRecord.requestType}
									</Grid.Column>
									<Grid.Column width={8}>
										{currentDemandRecord && currentDemandRecord.installationAddress}
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingBottom: 0 }}>
									<Grid.Column width={8}>
										<label>Provider Name</label>

									</Grid.Column>
									<Grid.Column width={8}>
										<label>Reference Id</label>

									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
									<Grid.Column width={8}>
										{currentDemandRecord && currentDemandRecord.providerName}
									</Grid.Column>
									<Grid.Column width={8}>
										{currentDemandRecord && currentDemandRecord.referenceId}
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingBottom: 0 }}>
									<Grid.Column width={8}>
										<label>Demand List Status</label>

									</Grid.Column>
									<Grid.Column width={8}>
										<label>Demand List Reason</label>

									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
									<Grid.Column width={8}>
										{statusTableCol}
									</Grid.Column>
									<Grid.Column width={8}>
										{currentDemandRecord && 'To be confirmed'}
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ padding: 0 }}>
									<Grid.Column width={16}>
										<Divider />
										<label>Contact Details</label>
										<Divider />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingBottom: 0 }}>
									<Grid.Column width={8}>
										<label>Contact Name</label>
									</Grid.Column>
									<Grid.Column width={8}>
										<label>Contact No</label>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
									<Grid.Column width={8}>
										{currentDemandRecord && currentDemandRecord.contactName}
									</Grid.Column>
									<Grid.Column width={8}>
										{currentDemandRecord && currentDemandRecord.contactNo}
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingBottom: 0 }}>
									<Grid.Column width={16}>
										<label>Email Address</label>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
									<Grid.Column width={16}>
										{currentDemandRecord && currentDemandRecord.contactEmail}
									</Grid.Column>
								</Grid.Row>
								{
									currentDemandRecord && currentDemandRecord.status != 'Close' &&
									(
										<Grid.Row style={{ paddingTop: 0 }}>
											<Grid.Column width={7}>
											</Grid.Column>
											<Grid.Column width={2}>
												<Button className='ui button primaryButton'
													onClick={submit}>
													Submit
													</Button>
											</Grid.Column>
											<Grid.Column width={7}>
											</Grid.Column>
										</Grid.Row>
									)
								}

							</Grid>
						</Grid.Column>
						<Grid.Column width={1}>

						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Form >
		</div >
	</>
	);
}

export default DemandListOrderDetail;