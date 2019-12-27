import React, { SFC } from 'react';
import IProps from './IStepperViewProps';
import Summary from './Summary/Summary';
import LocationForm from './LocationForm/LocationForm';
import Payment from './Payment/Payment';
import Confirmation from './Confirmation/Confirmation';
import Complete from './Complete/Complete';
import { ButtonText } from '../Checkout';

const StepperView: SFC<IProps> = props => {

    let view = null;
    
    switch (props.currentStep) {
        case 0:
            view = <Summary />
            props.setDisable(false);
            props.setAdvanceText(ButtonText.NEXT);
        break;
        case 1:
            view = <LocationForm setDisable={props.setDisable}/>
            props.setAdvanceText(ButtonText.NEXT);
        break;
        case 2:
            view = <Payment setDisable={props.setDisable}/>
            props.setAdvanceText(ButtonText.NEXT);
        break;
        case 3:
            view = <Confirmation />
            props.setDisable(false);
            props.setAdvanceText(ButtonText.SUBMIT);
        break;
        case 4:
            view = <Complete />
            props.setDisable(false);
            props.setAdvanceText(ButtonText.FINISH);
        break;
        default:
            view = null;
        break;
    }
    
    return (
        <div>
            {view}
        </div>
    );
}

export default StepperView