import React, { useState } from 'react';
import { Header, Form, Grid, Segment, Input } from 'semantic-ui-react';


const SupportAppointment = () => {


	const handleChange = (e, { name, value, type }) => {

	}


	return (
		<>
			<Header as='h3' style={{ margin: 0, paddingBottom: 0, paddingLeft: 20, paddingTop: 5 }}>
				TT number : BTU ID:
			</Header>

			<div className='container-2'>
				<Segment style={{ background: '#050A30', color: 'white' }}>Contact Details</Segment>
				<Form size='tiny'>

					<Grid style={{ paddingRight: '50px', paddingLeft: '50px', paddingBottom: 30 }} centered={true}>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={4}>
								<label className='heading'>Name</label>
							</Grid.Column>
							<Grid.Column width={2}>
							</Grid.Column>
							<Grid.Column width={4}>
								<label className='heading'>Mobile Number</label>
							</Grid.Column>
							<Grid.Column width={6} />
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={4}>
								<Input
									placeholder='Name'
									name='contactName'
									onChange={handleChange}
									size='large'
									fluid
								>
								</Input>
							</Grid.Column>
							<Grid.Column width={2}>
							</Grid.Column>
							<Grid.Column width={4}>
								<Input
									placeholder='Name'
									name='contactNo'
									onChange={handleChange}
									size='large'
									fluid
								>
								</Input>
							</Grid.Column>
							<Grid.Column width={6} />
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={4}>
								<label className='heading'>Email Address</label>
							</Grid.Column>
							<Grid.Column width={2}>
							</Grid.Column>
							<Grid.Column width={4}>
								<label className='heading'>Installation Address</label>
							</Grid.Column>
							<Grid.Column width={6} />
						</Grid.Row>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={4}>
								<Input
									placeholder='Name'
									name='emailAddress'
									onChange={handleChange}
									size='large'
									fluid
								>
								</Input>
							</Grid.Column>
							<Grid.Column width={2}>
							</Grid.Column>
							<Grid.Column width={7}>
								<Input
									placeholder='Name'
									name='instAddress'
									onChange={handleChange}
									size='large'
									fluid
								>
								</Input>
							</Grid.Column>
							<Grid.Column width={3} />
						</Grid.Row>
					</Grid>
					<Segment style={{ background: '#050A30', color: 'white' }}>Appointment</Segment>
					<Grid style={{ paddingRight: '50px', paddingLeft: '50px' }} centered={true}>
						<Grid.Row style={{ paddingBottom: 0 }}>
							<Grid.Column width={16}>
								<label className='heading'>BTU ID</label>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Form>
			</div>
		</>
	);
}

export default SupportAppointment;