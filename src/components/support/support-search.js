import React, { Component, useState, useEffect } from 'react';
import { Form, Segment, Input, Icon, Table, Pagination, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSupportList } from '../../redux/actions/ticket-support';

const TableHeader = () => {

	return (
		<Table.Row >
			<Table.HeaderCell className='tableHeader' style={{ width: '50px' }}>S.No</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Date Created</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '150px' }}>BTU Id</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '150px' }}>Trouble Ticket Id</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Provider Name</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Installation Address</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Service Status</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Trouble TIcket Status</Table.HeaderCell>
		</Table.Row>
	);
}


const TableRow = ({ Key, supportTicket }) => {


	return (
		<React.Fragment>

			<Table.Row >
				<Table.Cell >{Key}</Table.Cell>
				<Table.Cell >{supportTicket.createdDate}</Table.Cell>
				<Table.Cell >{supportTicket.btuId}</Table.Cell>
				<Table.Cell >

					<u><NavLink
						to={'/HSBBPortal/support/' + supportTicket.ttId}>
						{supportTicket.ttId}
					</NavLink></u>

				</Table.Cell>
				<Table.Cell >{supportTicket.providerName}</Table.Cell>
				<Table.Cell >{supportTicket.instAddress}</Table.Cell>
				<Table.Cell ></Table.Cell>
				<Table.Cell >{supportTicket.status}</Table.Cell>
			</Table.Row>
		</React.Fragment>
	);
}

const SupportSearch = ({ ...props }) => {

	const dispatch = useDispatch();
	const [btuId, setBtuId] = useState('');
	const [troubleTicketId, setTroubleTicketId] = useState('');
	const reduxState = useSelector(state => state.supportList.data);
	const { url } = props.match;
	let createSupportPageUrl = url + '/create'

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
		currentSupportList: null,
		enable: false
	});


	useEffect(() => {

		dispatch(fetchSupportList(troubleTicketId));

	}, []);

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

	const searchTroubleTicket = () => {

	}

	const supportCreate = () => {
		props.history.push(createSupportPageUrl);
	}

	let { rowsPerPage, currentSupportList, firstindexOf, lastIndexOf,
		activePage,
		boundaryRange,
		siblingRange,
		showEllipsis,
		showFirstAndLastNav,
		showPreviousAndNextNav,
		totalPages } = inputState;


	let { supportList } = reduxState;
	currentSupportList = supportList.slice(firstindexOf, lastIndexOf);

	return (
		<div className='container-1'>
			<Segment.Group horizontal style={{ background: '#050A30', color: 'white', padding: 0 }}>
				<Segment >
					<Button icon labelPosition='right'
						className='ui button primaryButton' onClick={supportCreate}>
						Create Trouble Ticket
					</Button>
				</Segment>
				<Segment>
					<Input
						placeholder='BTU ID'
						name='btuID'
						onChange={handleChange}
						size='small'
						style={{ float: 'right' }}
					>
					</Input>
				</Segment>
				<Segment>
					<Input
						placeholder='Trouble Ticket Id'
						name='troubleTicketId'
						onChange={handleChange}
						size='small'
						style={{ float: 'left' }}>
					</Input>
					<Icon name='search'
						size={'large'}
						style={{ 'color': 'white', 'cursor': 'pointer', paddingLeft: 20, paddingTop: 5 }}
						onClick={searchTroubleTicket}
					/>
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
								currentSupportList.map((supportTicket, key) => {
									return (<TableRow Key={key} supportTicket={supportTicket} />)
								})
							}
						</Table.Body>

					</Table>
				</div>
			</Form>
		</div>
	);
}

export default SupportSearch;

