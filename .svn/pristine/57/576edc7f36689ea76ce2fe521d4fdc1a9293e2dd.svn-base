import React, { Component, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Form, Grid, Button, Icon, Pagination, Table, Confirm, Dimmer, Loader } from 'semantic-ui-react';
import AddUser from './add-user';
import { fetchUsers, fetchOperators, fetchUserRoles, saveUser, deleteExistingUser } from '../../redux/actions/admin';
import { PENDING, FAILED, DEFAULT, SUCCESS } from '../../helpers/constants';


const TableHeader = () => {

	return (
		<Table.Row >
			<Table.HeaderCell className='tableHeader' style={{ width: '50px' }}>Name</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '100px' }}>Email</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '150px' }}>Operator</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '150px' }}>Role</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Status</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Last Login IP</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Last Login At</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '120px' }}>Creation Date</Table.HeaderCell>
			<Table.HeaderCell className='tableHeader' style={{ width: '80px' }}>Actions</Table.HeaderCell>
		</Table.Row>
	);
}


const TableRow = ({ Key, user, editUser, deleteUser }) => {

	return (
		<React.Fragment>

			<Table.Row >
				<Table.Cell >{user.userName}</Table.Cell>
				<Table.Cell >{user.userEmail}</Table.Cell>
				<Table.Cell >{user.userOperator.operatorName}</Table.Cell>
				<Table.Cell >{user.userRole.roleName}</Table.Cell>
				<Table.Cell >{user.status}</Table.Cell>
				<Table.Cell >{user.lastLoginIP}</Table.Cell>
				<Table.Cell >{user.lastLoginAt}</Table.Cell>
				<Table.Cell >{user.creadtedDate}</Table.Cell>
				<Table.Cell >
					<Icon name='edit'
						size={'large'}
						style={{ 'color': 'blue', 'cursor': 'pointer' }}
						onClick={() => editUser(user)}
					/>
					<Icon name='remove circle'
						size={'large'}
						style={{ 'color': 'red', 'cursor': 'pointer' }}
						onClick={() => deleteUser(user)}
					/>
				</Table.Cell>
			</Table.Row>
		</React.Fragment>
	);
}

function UserManagement() {

	const dispatch = useDispatch();

	const reduxMetaState = useSelector(state => state.admin.meta);
	const reduxDataState = useSelector(state => state.admin.data);


	const [open, setOpen] = useState(false);
	const [popupOpen, setPopupOpen] = useState(false);
	const [mode, setMode] = useState('add');
	const [loading, setLoading] = useState(false);
	const [selectedUserDetails, setSelecteduserDetails] = useState({
		userId: '',
		userName: '',
		userEmail: '',
		userOperator: '',
		userRole: ''
	});

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
		currentUserList: null,
		enable: false
	});



	useEffect(() => {
		dispatch(fetchUsers());
		dispatch(fetchOperators());
		dispatch(fetchUserRoles());
		setLoading(true);
	}, []);


	useEffect(() => {

		if (reduxMetaState.SAVE_USER_STAUS == SUCCESS) {
			//reload Users
			dispatch(fetchUsers());
		}
	}, [reduxMetaState.SAVE_USER_STAUS]);


	useEffect(() => {
		if (reduxMetaState.FETCH_USERS_STATUS == SUCCESS) {
			setLoading(false);
		}
	}, [reduxMetaState.FETCH_USERS_STATUS])

	useEffect(() => {
		if (reduxMetaState.DELETE_USER_STATUS == SUCCESS) {
			dispatch(fetchUsers());
		}
	}, [reduxMetaState.DELETE_USER_STATUS])



	const actionOnModal = (value) => {
		setOpen(value);
	}


	const saveUser = useCallback((userDetails) => {
		console.log(userDetails);
		setOpen(false);
		setLoading(true);
		//check for save and add
		dispatch(saveUser(userDetails));
	}, [])

	const adduser = () => {
		setOpen(true);
		setMode('add');
	}

	const editUser = (user) => {
		console.log('user', user);
		setSelecteduserDetails(user);
		setMode('edit');
		setOpen(true);
	}

	const handlePopup = (val) => {

		setPopupOpen(false);
		if (val = 'Confirm') {
			console.log(selectedUserDetails);
			setLoading(true);
			dispatch(deleteExistingUser(selectedUserDetails.userId));
		} else if (val == 'Cancel') {

		}

	}

	const deleteUser = (user) => {
		setSelecteduserDetails(user);
		setPopupOpen(true);
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

	}


	let { rowsPerPage, currentUserList, firstindexOf, lastIndexOf,
		activePage,
		boundaryRange,
		siblingRange,
		showEllipsis,
		showFirstAndLastNav,
		showPreviousAndNextNav,
		totalPages } = inputState;

	let { usersList, userRoles, userOperators } = reduxDataState;


	currentUserList = usersList.slice(firstindexOf, lastIndexOf);

	return (
		<div className='container'>

			<Header as='h3' textAlign='center' style={{ paddingTop: '30px' }}>
				Users
			</Header>
			<Form size='tiny'>
				<Grid style={{ padding: '50px' }} centered={true}>
					<Grid.Row style={{ paddingBottom: 0 }}>
						<Grid.Column width={16} style={{ textAlign: 'right' }}>
							<Button className='ui button primaryButton'
								onClick={adduser}>
								<Icon name='search' /> Add User
							</Button>
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
					// Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
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
								currentUserList.map((user, key) => {
									return (<TableRow
										Key={key}
										user={user}
										editUser={editUser}
										deleteUser={deleteUser}
									/>)
								})
							}
						</Table.Body>


					</Table>
				</div>
			</Form>
			<AddUser
				open={open}
				actionOnModal={actionOnModal}
				userRoles={userRoles}
				userOperators={userOperators}
				saveUser={saveUser}
				currentUser={selectedUserDetails}
				mode={mode}
			/>
			<Confirm
				open={popupOpen}
				content='Are you sure you want to delete the user'
				onCancel={() => handlePopup('Cancel')}
				onConfirm={() => handlePopup('Confirm')}
			/>
			<Dimmer active={loading} page style={{ paddingTop: '300px' }}>
				<Loader indeterminate size={'huge'}>
					Loging In...<br />
				</Loader>
			</Dimmer>
		</div>
	);

}

export default UserManagement;
