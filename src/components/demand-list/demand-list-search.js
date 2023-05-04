import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Form, Grid, Input, Table, Pagination, Icon } from 'semantic-ui-react';
import { fetchDemandList } from '../../redux/actions/demand-list'

const TableHeader = () => {

	return (
		<Table.Row >
			<Table.HeaderCell className='tableHeader' style={{ width: '50px' }}>S.No</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Date Created</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '150px' }}>Reference Id</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '150px' }}>Provider Name</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Status</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Installation Address</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Area</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Aging</Table.HeaderCell>
		</Table.Row>
	);
}


const TableRow = ({ Key, addressInDemand }) => {


	return (
		<React.Fragment>

			<Table.Row >
				<Table.Cell >{Key}</Table.Cell>
				<Table.Cell >{addressInDemand.dateCreated}</Table.Cell>
				<Table.Cell >

					<u><NavLink
						to={'/HSBBPortal/demand-list/search/' + addressInDemand.referenceId}>
						{addressInDemand.referenceId}
					</NavLink></u>

				</Table.Cell>
				<Table.Cell >{addressInDemand.providerName}</Table.Cell>
				<Table.Cell >{addressInDemand.status}</Table.Cell>
				<Table.Cell >{addressInDemand.installationAddress}</Table.Cell>
				<Table.Cell >{addressInDemand.area}</Table.Cell>
				<Table.Cell >{addressInDemand.aging}</Table.Cell>
			</Table.Row>
		</React.Fragment>
	);
}

const DemandListSearch = () => {

	const dispatch = useDispatch();
	const demandListReduxState = useSelector(state => state.demandList.data);

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
		currentDemandList: null,
		enable: false
	});


	//const [demandList, setDemandList] = useState([]);
	const [referenceId, setReferenceId] = useState('')

	useEffect(() => {
		dispatch(fetchDemandList('323232'));
	}, []);

	const handleChange = (e, { name, type, value }) => {
		setReferenceId(value);
	}

	const searchDemandList = () => {
		dispatch(fetchDemandList('323232'));
	}

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
		//this.setState({ activePage })
	}


	let { rowsPerPage, currentDemandList, firstindexOf, lastIndexOf,
		activePage,
		boundaryRange,
		siblingRange,
		showEllipsis,
		showFirstAndLastNav,
		showPreviousAndNextNav,
		totalPages } = inputState;


	let { demandList } = demandListReduxState;
	currentDemandList = demandList.slice(firstindexOf, lastIndexOf);

	return (

		<div className='container'>

			<Form size='tiny'>
				<Grid style={{ padding: '50px' }} centered={true}>
					<Grid.Row style={{ paddingBottom: 0 }}>
						<Grid.Column width={7}>
						</Grid.Column>
						<Grid.Column width={3} style={{ textAlign: 'right' }}>
							<Input
								size='small'
								fluid
								placeholder='Reference Id'
								name='referenceId'
								size='large'
								onChange={handleChange} />
						</Grid.Column>
						<Grid.Column width={2} style={{ paddingLeft: '0px', paddingTop: '6px' }}>
							<Icon name='search'
								size={'big'}
								style={{ 'color': 'green', 'cursor': 'pointer' }}
								onClick={searchDemandList}
							/>
						</Grid.Column>
						<Grid.Column width={4}>
						</Grid.Column>
					</Grid.Row>

				</Grid>
				<Pagination
					activePage={activePage}
					boundaryRange={boundaryRange}
					onPageChange={handlePaginationChange}
					size='mini'
					siblingRange={siblingRange}
					totalPages={totalPages}
					ellipsisItem={showEllipsis ? undefined : null}
					firstItem={showFirstAndLastNav ? undefined : null}
					lastItem={showFirstAndLastNav ? undefined : null}
					prevItem={showPreviousAndNextNav ? undefined : null}
					nextItem={showPreviousAndNextNav ? undefined : null}
					style={{ marginLeft: '100px', marginRight: '100px' }}
				/>
				<div style={{ marginLeft: '100px', marginRight: '100px' }}>

					<Table celled >
						<Table.Header>
							<TableHeader />
						</Table.Header>

						<Table.Body>
							{
								currentDemandList.map((addressInDemand, key) => {
									return (<TableRow Key={key} addressInDemand={addressInDemand} />)
								})
							}
						</Table.Body>


					</Table>
				</div>
			</Form>
		</div>
	);

}


export default DemandListSearch;
