interface IElementConfig {
    type: string;
};

interface IElementTextConfig {
    placeholder: string;
    
};

interface IElementValidation {
    required: boolean;
};

interface IEmailValidation {
    isEmail: boolean;
};

interface ITextValidation {
    minLength?: number;
    maxLength?: number;
};

interface IElement {
    elementType: string;
    elementConfig: IElementTextConfig |  IElementTextConfig;
    value: string;
    validation: IElementValidation | IEmailValidation | ITextValidation;
    valid: boolean;
    touched: boolean;
};

export default interface IAuthState {
    controls: {
        user: {
            elementConfig: {
                type: string,
                placeholder: string
            },
            value: string,
            validation: {
                required: boolean,
                isEmail: boolean
            },
            valid: boolean,
            touched: boolean
        },
        password: {
            elementConfig: {
                type: string,
                placeholder: string
            },
            value: string,
            validation: {
                required: boolean,
                minLength: number
            },
            valid: boolean,
            touched: boolean
        }
    };
};