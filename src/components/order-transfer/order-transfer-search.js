import React, { Component, useState, useEffect } from 'react';
import { Form, Segment, Input, Icon, Table, Pagination, Button, Dimmer, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransferList } from '../../redux/actions/transfer';
import { fetchLOV } from '../../redux/actions/config';
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';
import {
	useParams
} from "react-router-dom";


const TableHeader = () => {

	return (
		<Table.Row >
			<Table.HeaderCell className='tableHeader' style={{ width: '50px' }}>S.No</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Date Created</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '150px' }}>Transfer Ref</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Customer ID</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Billing Acount</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Login ID</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Status</Table.HeaderCell>
		</Table.Row>
	);
}


const TableRow = ({ Key, transferRequest }) => {


	return (
		<React.Fragment>

			<Table.Row >
				<Table.Cell >{Key}</Table.Cell>
				<Table.Cell >{transferRequest.createdDate}</Table.Cell>
				<Table.Cell >

					<u><NavLink
						to={'/HSBBPortal/transfer-request/' + transferRequest.id}>
						{transferRequest.id}
					</NavLink></u>

				</Table.Cell>
				<Table.Cell >{transferRequest.custId}</Table.Cell>
				<Table.Cell >{transferRequest.billingAccount}</Table.Cell>
				<Table.Cell >{transferRequest.createdBy}</Table.Cell>
				<Table.Cell >{transferRequest.status}</Table.Cell>
			</Table.Row>
		</React.Fragment>
	);
}

const TransferRequestSearch = ({ ...props }) => {

	const dispatch = useDispatch();
	const [referenceId, setReferenceId] = useState(0);
	const [loading, setLoading] = useState(false);

	const reduxMetaState = useSelector(state => state.transferList.meta);
	const reduxState = useSelector(state => state.transferList.data);
	const { url } = props.match;
	let createTransferPageUrl = url + '/create';


	const [inputState, setInputState] = useState({
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
		currentTransferList: null,
		enable: false
	});

	useEffect(() => {

		setLoading(true);
		dispatch(fetchLOV('NEW_TRF'));

		if (referenceId != '') {
			dispatch(fetchTransferList(referenceId, 'REF_ID'));
		} else {
			dispatch(fetchTransferList(0, 'NONE'));
		}
	}, []);

	useEffect(() => {
		if(reduxMetaState.FETCH_TRANSFER_LIST_STATUS == PENDING){
			setLoading(true);
		}
		if (reduxMetaState.FETCH_TRANSFER_LIST_STATUS == SUCCESS) {
			setLoading(false);
		}
	}, [reduxMetaState]);


	const handlePaginationChange = (e, { activePage }) => {

		console.log(`active page is ${activePage}`);
		let { rowsPerPage } = inputState;
		let tempFirstindexOf = (activePage * rowsPerPage) - rowsPerPage;
		let tempLastIndexOf = activePage * rowsPerPage;

		setInputState(previousInputState => ({
			...previousInputState, activePage: activePage,
			firstindexOf: tempFirstindexOf,
			lastIndexOf: tempLastIndexOf

		}))

	}

	const handleChange = (e, { name, value, type }) => {

		if (name == 'btuID') {
			setBtuId(value);
		} else if (name == 'troubleTicketId') {
			setTroubleTicketId(value);
		}

	}

	const searchTransferRequest = () => {

	}

	const createTransfer = () => {
		props.history.push(createTransferPageUrl);
	}

	let { rowsPerPage, currentTransferList, firstindexOf, lastIndexOf,
		activePage,
		boundaryRange,
		siblingRange,
		showEllipsis,
		showFirstAndLastNav,
		showPreviousAndNextNav,
		totalPages } = inputState;


	let { transferList } = reduxState;
	currentTransferList = transferList.slice(firstindexOf, lastIndexOf);

	return (
		<div className='container-1'>
			<Segment.Group horizontal style={{ background: '#050A30', color: 'white', padding: 0 }}>
				<Segment >
					<Button icon labelPosition='right'
						className='ui button primaryButton' onClick={createTransfer}>
						Create Transfer Request
					</Button>
				</Segment>

				<Segment>
					<Input
						placeholder='Reference Id'
						name='referenceId'
						onChange={handleChange}
						size='small'>
					</Input>
					<Icon name='search'
						size={'large'}
						style={{ 'color': 'white', 'cursor': 'pointer', paddingLeft: 20, paddingTop: 5 }}
						onClick={searchTransferRequest}
					/>
				</Segment>
				<Segment>
				</Segment>
			</Segment.Group>
			<Form size='tiny'>

				<Pagination
					activePage={activePage}
					boundaryRange={boundaryRange}
					onPageChange={handlePaginationChange}
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
								currentTransferList.map((transferRequest, key) => {
									return (<TableRow Key={key} transferRequest={transferRequest} />)
								})
							}
						</Table.Body>

					</Table>
				</div>
			</Form>
			<Dimmer active={loading} page style={{ paddingTop: '300px' }}>
				<Loader indeterminate size={'huge'}>
					Loging In...<br />
				</Loader>
			</Dimmer>
		</div>
	);
}

export default TransferRequestSearch;

