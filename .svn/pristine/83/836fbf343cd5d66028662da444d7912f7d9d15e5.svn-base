import React, { useState, useEffect } from 'react';
import { Header, Form, Grid } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const SupportDetail = ({ ...props }) => {

	const [supportDetails, setSupportDetails] = useState({});
	let { paramReferenceId } = useParams();
	
	useEffect(() => {


	}, []);

	return (
		<>
			<Header as='h3' style={{ margin: 0, paddingBottom: 0, paddingLeft: 20, paddingTop: 5 }}>
				Service Details - BTU ID:
			</Header>
			<div className='container-2'>
				<Form size='tiny' style={{ paddingTop: '10px' }}>
					<Grid style={{ paddingRight: '100px', paddingLeft: '100px' }}
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
											<label>Installation Address:</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
											<label>Equipment Type:</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
											<label>Vendor:</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
											<label>BTU Port No:</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
											<label>Service Package:</label>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
											VOIP
										</Grid.Column>
									</Grid.Row>
									<Grid.Row style={{ paddingBottom: 0 }}>
										<Grid.Column width={16}>
											TR69
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
							<Grid.Column width={1}>
							</Grid.Column>
						</Grid.Row>

					</Grid>
				</Form>
			</div>
		</>
	);
};


export default SupportDetail;
