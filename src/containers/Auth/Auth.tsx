import React, {Component, ChangeEvent} from 'react';
import IState from './IAuthState';
import { Input, FormControl, InputLabel } from '@material-ui/core';
import styles from './Auth.module.scss';

class Auth extends Component<{}, IState> {
    
    constructor (props: {}) {
        super(props);
        this.state = {
            controls: {
                user: {
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Enter your email'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false,
                },
                password: {
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false,
                }
            }
        }
    }

    public render () {

        const [user, password] = [this.state.controls.user, this.state.controls.password];

        return(
            
            <form className={styles.SignInForm}> 
                <div>
                    <FormControl className={styles.Input}>
                        <InputLabel htmlFor='user'>User</InputLabel>
                        <Input type='text' 
                            id='user' 
                            placeholder={user.elementConfig.placeholder} 
                            fullWidth={true}
                            error={user.touched && !user.valid}
                            onChange={this.userInputHandler}/>
                            
                    </FormControl>
                </div>
                <div>
                    <FormControl className={styles.Input}>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <Input type='password' 
                            id='password' 
                            placeholder={password.elementConfig.placeholder} 
                            fullWidth={true}/>
                    </FormControl>
                </div>
            </form>
        );
    }

    private userInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

        let valid: boolean = false;
        const value: string = event.target.value;

        // eslint-disable-next-line
        if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)) {
            valid=true;
        }
        
        const updatedControls = {
            ...this.state.controls,
            user:{
                ...this.state.controls.user,
                value,
                valid,
                touched: true
            }
        }
        this.setState({controls: updatedControls});
    }
}

export default Auth;