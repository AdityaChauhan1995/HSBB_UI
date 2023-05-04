import React, { useState, useEffect } from 'react';
import { Header, Segment, Grid, Form, Input, Dropdown, TextArea, Button, Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';


const SupportCreate = ({ ...props }) => {

	const [contactName, setContactName] = useState('');
	const [email, setEmail] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [pblmCat, setPblmCat] = useState([]);
	const [pblmDesc, setPblmDesc] = useState([]);

	const handleChange = (e, { type, name, value }) => {

	}

	const onSubmit =()=>{

	}
	return (
		<>
			<Header as='h3' style={{ margin: 0, paddingBottom: 0, paddingLeft: 20, paddingTop: 5 }}>
				New Trouble Ticket
			</Header>
			<div className='container-2'>
				<Segment style={{ background: '#050A30', color: 'white' }}>Contact Details</Segment>
				<Form size='tiny'>

					<Grid style={{ paddingRight: '50px', paddingLeft: '50px', paddingBottom: 10 }} centered={true}>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={6}>
								<label className='heading'>Name</label>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={6}>
								<label className='heading'>Email Address</label>
							</Grid.Column>
							<Grid.Column width={1}>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={6}>
								<Input
									placeholder='Name'
									name='contactName'
									onChange={handleChange}
									size='large'
									fluid
									value={contactName}
								>
								</Input>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={6}>
								<Input
									placeholder='Email Address'
									name='email'
									onChange={handleChange}
									size='large'
									fluid
									value={email}
								>
								</Input>
							</Grid.Column>
							<Grid.Column width={1}>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={16}>
								<label className='heading'>Mobile Number</label>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={6}>
								<Input
									placeholder='Mobile Number'
									name='contactNo'
									onChange={handleChange}
									size='large'
									fluid
									value={contactNo}
								>
								</Input>
							</Grid.Column>
							<Grid.Column width={10}>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Segment style={{ background: '#050A30', color: 'white' }}>Trouble Ticket</Segment>
					<Grid style={{ paddingRight: '50px', paddingLeft: '50px' }} centered={true}>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={16}>
								<label className='heading'>BTU ID</label>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={6}>
								<label className='heading'>Problem Category</label>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={7}>
								<label className='heading'>Problem Description</label>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={6}>
								<Dropdown
									placeholder='Please select'
									size='small'
									selection
									value={pblmCat}
									fluid
								/>
							</Grid.Column>
							<Grid.Column width={3}>
							</Grid.Column>
							<Grid.Column width={7}>
								<TextArea name='pblmDesc' />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={6}>
								<label>Attach problem Logs</label>
							</Grid.Column>
							<Grid.Column width={10}>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={6}>
								<Button Icon icon labelPosition='right'
									className='ui button primaryButton'>
									Upload File
									<Icon name='upload' />
								</Button>
							</Grid.Column>
							<Grid.Column width={8}>
							</Grid.Column>
							<Grid.Column width={2}>
								<Button
									className='ui button primaryButton'
									onClick={onSubmit} fluid>
									Submit
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Form>
			</div>
		</>
	);
}

export default SupportCreate;