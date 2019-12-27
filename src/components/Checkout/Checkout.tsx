import React, { SFC, useState } from 'react';
import { Dialog, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import IProps from './ICheckoutProps';
import { IApplicationState } from '../../store/Store';
import styles from './Checkout.module.scss';
import { connect } from 'react-redux';
import { backStep, advanceStep } from '../../store/checkout/CheckoutActions';
import StepperView from './StepperView/StepperView';

const steps = [
    { label: 'Review info' },
    { label: 'Introduce location' },
    { label: 'Pay your shed' },
    { label: 'Confirm' },
    { label: 'Complete' }
]

export enum ButtonText {
    NEXT='Next',
    SUBMIT='Submit',
    FINISH='Finish'
}

const Checkout: SFC<IProps> = props => {

    const [disable, setDisable] = useState(false);
    const [advanceButton, setAdvanceText] = useState('Next');

    let contButton = (
        <div className={styles.Button}>
            <Button variant='contained' color='secondary' onClick={props.advanceStep} disabled={disable}>{advanceButton}</Button>
        </div>
    );

    if ((props.currentStep + 1) === props.totalSteps) {
        contButton = (
            <div className={styles.Button}>
                <Button variant='contained' color='secondary'> Finish</Button>
            </div>
        );
    }

    return (
        <Dialog fullScreen={true} open={props.modalOpen}
            aria-describedby='simple-modal-description'>
            <Container id='simple-modal-description' justify='center'>
                <Item xs={11} md={9}>
                    <Stepper activeStep={props.currentStep}>
                        {steps.map((v, k) => (
                            <Step key={k}><StepLabel>{v.label}</StepLabel></Step>
                        ))}
                    </Stepper>
                    <StepperView 
                        currentStep={props.currentStep}
                        setDisable={setDisable}
                        setAdvanceText={setAdvanceText}/>
                    <div className={styles.ActionButtons}>
                        <div className={styles.Cancel}>
                            <Button variant='outlined' onClick={props.cancel}>Cancel</Button>
                        </div>
                        {
                            props.currentStep === 0 ||
                            <div className={styles.Button}>
                                <Button variant='outlined' onClick={props.backStep}>Back</Button>
                            </div>
                        }
                        {contButton}
                    </div>
                </Item>
            </Container>
        </Dialog>
    )
}

const mapStateToProps = (store: IApplicationState) => (
    {
        currentStep: store.checkout.currentStep,
        totalSteps: store.checkout.totalSteps
    }
) 

const mapDispatchToProps = (dispatch: any) => (
    {
        backStep: () => dispatch(backStep()),
        advanceStep: () => dispatch(advanceStep())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);