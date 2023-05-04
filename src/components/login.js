import React, { Component } from 'react';
import { Container, Header, Form, Segment, Button, Input, Dimmer, Icon, Message, Image, Loader } from 'semantic-ui-react';
import { PENDING, FULFILLED, FAILED, SUCCESS, DISMISS } from '../helpers/constants'

import { connect } from 'react-redux';
import { loginToPortal, userLoggedIn } from '../redux/actions/login';

class Login extends Component {
    constructor(props) {
        super(props);
        const {url} = this.props.match;
        let baseUrl = url.substring(0, url.lastIndexOf("/"));
        this.state = {
            password: '',
            loading: false,
            error: false,
            nextUrl: baseUrl + "/home",
            login: false,
            username: '',
            password: '',
            validateAction: {status: DISMISS, validateActionMessage: ''}
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps){
        const { nextUrl, username } = this.state;
        if(prevProps.LOGIN_STATUS != SUCCESS && this.props.LOGIN_STATUS === SUCCESS){
            this.setState({ login: true, loading: false });
             if(this.props.statusCode == 201 && this.props.userRole === 'ADMIN'){
                     this.props.history.push(this.state.nextUrl);
             }else if( this.props.statusCode == 200 && this.props.userRole !== 'ADMIN'){
                    this.setState({validateAction: {status: FAILED, validateActionMessage: 'Only User with ADMIN role can access the Portal'}, loading: false})
             }
             else{
                this.setState({validateAction: {status: FAILED, validateActionMessage: 'Error in authenticating with these credentials'}, loading: false})
             }
             this.props.userLoggedIn(username);
        }else if(prevProps.LOGIN_STATUS != FAILED && this.props.LOGIN_STATUS === FAILED){
            this.setState({validateAction: {status: FAILED, validateActionMessage: 'Error in authenticating '}, loading: false})
        }
    }
    
    login = () => {
        let { username, password } = this.state;
        this.setState({login: true, loading: true, message:'Please wait for a while, we are verifying you'});

        this.props.loginToPortal(username, password);

    }

    handleChange = ( e, { type, name, value, checked} ) => {
        if( name === 'username'){
            this.setState({'username': value});
        }else if( name === 'password'){
            this.setState({'password': value});
        }
    }


    render() {
        let { validateAction } = this.state;
       /* const { title, subTitle } = this.props;*/
        return (
            <Container className="d-flex flex-col align-center app-container" style={{width:'100%'}}>
                <Segment basic>
                    <Header as="h2" className="color-white" style = {{textAlign:'center'}}>

                    </Header>
                    <Header as="h1"  className="no-padding no-margin  color-white" >HSBB Portal</Header>
 
                <Header as="h1" textAlign="center" className="color-white"  >Login</Header>
                </Segment>
                <Segment basic className="content d-flex flex-col justify-center" style = {{ backgroundColor:'#ffffff', paddingTop:'0px', paddingBottom:'10px'}}>

                    <Form style={{ width: 250 }}>

                         <Form.Field>
                            <Input
                                icon='user'
                                iconPosition='left'
                                placeholder='Username'
                                name='username'
                                type='username'
                                fluid
                                onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                name='password'
                                type='password'
                                fluid
                                onChange={this.handleChange} />
                        </Form.Field>
                        <Button type='submit' fluid onClick={this.login} className='ui button primaryButton' >LOGIN</Button>
                    </Form>
                    
                </Segment>
                <Segment basic>
                    <span className="color-light-grey">Dont have an account? Please check with Team</span>
                </Segment>
                <Dimmer active={this.state.loading}  page style={{paddingTop:'300px'}}>
                    {
                        this.state.login ?
                            <Loader indeterminate size  = {'huge'}>
                                Loging In...<br/>
                                {this.state.message}
                             </Loader>
                            :
                            <Header as='h2' icon inverted>
                                Please wait...
                            </Header>
                    }
                </Dimmer>
                {
                    (validateAction.status === FAILED ) && (
                            <Message size='tiny' negative  compact size='small'
                                onDismiss={() => this.setState({ validateAction: {status: 'DISMISS',validateActionMessage:'' }})}>
                                            <Message.Header>{validateAction.validateActionMessage}</Message.Header>
                            </Message>   
                        )
                }
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        LOGIN_STATUS : state.login.meta.LOGIN_STATUS,
        statusCode : state.login.data.statusCode,
        userRole : state.login.data.userRole
    }
}

const mapDispatchToProps = {
   loginToPortal,
   userLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
