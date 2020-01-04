export const isAlphabeticOnly = (value: string):boolean => {
    if(value === ''){
        return true;
    }
    const regExp = new RegExp(/[a-z]+$|^\s/i);
    return regExp.test(value);
}

export const isNumericOnly = (value: string): boolean => {
    if(value === '') {
        return true;
    }
    const num = Number(value);
    return !isNaN(num);
}

export const isEmail = (value: string): boolean => {
    // eslint-disable-next-line
    const regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return regExp.test(value);
}