export const isInteger = (value: any): boolean => {

    const num = Number(value);

    if (!isNaN(num)) {
        return Number.isSafeInteger(num);
    }
    return false;
}

export const isOnlyString = (value: string): boolean => {
    if(value === '') {
        return true;
    }
    const reg = RegExp(/^[a-zA-Z][a-zA-Z\s]*$/);
    return reg.test(value);
}