import React, { useEffect, useState } from 'react'
import { Button, Header, Image, Modal, Form, Grid, Input, Dropdown } from 'semantic-ui-react'
import _ from 'lodash';

const AddUser = ({ actionOnModal, open, userRoles, userOperators, saveUser, currentUser, mode }) => {


  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userOperator, setUserOperator] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState({
    "roleId": 1,
    "roleName": ''
  });
  const [userOperatorFilter, setUserOperatorFilter] = useState({
    "operatorId": 1,
    "operatorName": ''
  });


  useEffect(() => {
    if (open && mode == 'edit') {
      console.log('currentUser', currentUser);
      setUserId(currentUser.userId);
      setUserName(currentUser.userName);
      setUserEmail(currentUser.userEmail);
      setUserRole(currentUser.userRole.roleName);
      setUserRoleFilter(currentUser.userRole);
      setUserOperator(currentUser.userOperator.operatorName);
      setUserOperatorFilter(currentUser.userOperator);
    } else if (open && mode === 'add') {
      setUserId('');
      setUserName('');
      setUserEmail('');
      setUserRole('');
      setUserRoleFilter({
        "roleId": 1,
        "roleName": ''
      });
      setUserOperator('');
      setUserOperatorFilter({
        "operatorId": 1,
        "operatorName": ''
      });
    }
  }, [mode, open]);

  const handleChange = (e, { name, value, type }) => {

    if (name == 'userId') {
      setUserId(value);
    } else if (name == 'userName') {
      setUserName(value);
    } else if (name == 'userEmail') {
      setUserEmail(value);
    } else if (name == 'userRole') {
      setUserRole(value);
      let filteredValue = '';
      for (let ur of userRoles) {
        if (ur.value == value) {
          filteredValue = {
            "roleId": ur.key,
            "roleName": ur.value
          }
          break;
        }
      }
      console.log(filteredValue);
      setUserRoleFilter(filteredValue);

    } else if (name == 'userOperator') {

      setUserOperator(value);
      let filteredValue = '';
      for (let uo of userOperators) {
        if (uo.value == value) {
          filteredValue = {
            "operatorId": uo.key,
            "operatorName": uo.value
          }

          break;
        }
      }

      console.log(filteredValue);
      setUserOperatorFilter(filteredValue);
    }
  }


  const onClickAction = () => {

    let user =
    {
      "userId": userId,
      "userName": userName,
      "userEmail": userEmail,
      "userRole": userRoleFilter,
      "userOperator": userOperatorFilter
    };
    saveUser(user);
  }

  return (
    <Modal
      onClose={() => actionOnModal(false)}
      onOpen={() => actionOnModal(true)}
      open={open}
    >
      <Modal.Header>
        {
          (mode == 'edit' ? 'Edit User' : 'Add User')
        }
      </Modal.Header>
      <Modal.Content >
        <Form size='tiny'>
          <Grid style={{ padding: '50px' }} centered={true}>
            <Grid.Row style={{ paddingBottom: 0 }}>
              <Grid.Column width={3}>
                <label className='heading'>User Id</label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Input
                  fluid
                  placeholder='User id'
                  name='userId'
                  onChange={handleChange}
                  size='large' value={userId}>
                </Input>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ paddingBottom: 0 }}>
              <Grid.Column width={3}>
                <label className='heading'>User Name</label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Input
                  fluid
                  placeholder='User Name'
                  name='userName'
                  onChange={handleChange}
                  size='large'
                  value={userName}>
                </Input>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ paddingBottom: 0 }}>
              <Grid.Column width={3}>
                <label className='heading'>User Email</label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Input
                  fluid
                  placeholder='User Email'
                  name='userEmail'
                  onChange={handleChange}
                  size='large' value={userEmail}>
                </Input>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ paddingBottom: 0 }}>
              <Grid.Column width={3}>
                <label className='heading'>User Role</label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Dropdown
                  placeholder='Please select'
                  size='small'
                  selection
                  options={userRoles}
                  onChange={handleChange}
                  name='userRole'
                  value={userRole}
                  fluid />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ paddingBottom: 0 }}>
              <Grid.Column width={3}>
                <label className='heading'>Operator</label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Dropdown
                  placeholder='Please select'
                  size='small'
                  selection
                  options={userOperators}
                  onChange={handleChange}
                  name='userOperator'
                  value={userOperator}
                  fluid />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => actionOnModal(false)}>
          Cancel
        </Button>
        <Button
          content={
            (mode == 'edit' ? 'Edit User' : 'Add User')
          }
          labelPosition='right'
          icon='checkmark'
          onClick={onClickAction}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AddUser;
