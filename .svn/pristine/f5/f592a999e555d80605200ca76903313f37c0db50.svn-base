import React, { useState } from 'react';
import { Form, Input, Header, Icon, Grid, TextArea, Button } from 'semantic-ui-react';


const CreateDemandList = () => {

	const [name, setName] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [email, setEmail] = useState('');
	const [serviceAddress, setServiceAddress] = useState('');


	const handleChange = (e, { name, value, type }) => {

			if(name ==='name'){
				setName(value);
			}else if(name ==='contactNo'){
				setContactNo(value);
			}else if(name ==='email'){
				setEmail(value);
			}else if(name ==='serviceAddress'){
				setServiceAddress(value);
			}
	}

	const submit = ()=>{
		
	}

	return (
		<div className='container'>
			<Header as='h5' icon textAlign='center'>
				<Icon name='users' user times />
				<Header.Content>Sorry, the address you requested is not serviceable. We will <br /> get back to you once it is available in your area. Please register your interest.</Header.Content>
			</Header>
			<Form size='tiny'>
				<Grid style={{ padding: '50px' }} centered={true}>
					<Grid.Row style={{ paddingBottom: 0 }}>
						<Grid.Column width={3}>
						</Grid.Column>
						<Grid.Column width={10}>
							<label className='heading'>Name</label>
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
								placeholder='Name'
								name='name'
								size='large'
								fluid
								onChange={handleChange}/>
						</Grid.Column>
						<Grid.Column width={3}>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style={{ paddingBottom: 0 }}>
						<Grid.Column width={3}>
						</Grid.Column>
						<Grid.Column width={4}>
							<label className='heading'>Contact No:</label>
						</Grid.Column>
						<Grid.Column width={6}>
							<label className='heading'>Email</label>
						</Grid.Column>
						<Grid.Column width={3}>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style={{ paddingTop: 0 }}>
						<Grid.Column width={3}>
						</Grid.Column>
						<Grid.Column width={4}>
							<Input
								size='small' fluid icon='building'
								iconPosition='left'
								placeholder='Contact No'
								name='contactNo'
								size='large'
								fluid
								onChange={handleChange}/>
						</Grid.Column>
						<Grid.Column width={6}>
							<Input
								size='small' fluid icon='building'
								iconPosition='left'
								placeholder='Email'
								name='email'
								size='large'
								fluid
								onChange={handleChange}/>
						</Grid.Column>
						<Grid.Column width={3}>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style={{ paddingBottom: 0 }}>
						<Grid.Column width={3}>
						</Grid.Column>
						<Grid.Column width={10}>
							<label className='heading'>Service Address</label>
						</Grid.Column>
						<Grid.Column width={3}>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style={{ paddingTop: 0 }}>
						<Grid.Column width={3}>
						</Grid.Column>
						<Grid.Column width={10}>
							<TextArea
								placeholder='Mention your address'
								style={{ minHeight: 100 }}
								name='serviceAddress'
								onChange={handleChange} />
						</Grid.Column>
						<Grid.Column width={3}>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row style={{ paddingTop: 0 }}>
						<Grid.Column width={7}>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button className='ui button primaryButton'
							 fluid onClick={submit}>
								Submit
							</Button>
						</Grid.Column>
						<Grid.Column width={7}>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Form>
		</div>
	);
}

export default CreateDemandList;
