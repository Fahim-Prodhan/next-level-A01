type FormateValueType = string | number | boolean

const formatValue = (value:FormateValueType):FormateValueType | undefined =>{
    if(typeof value == 'string'){
        return value.toUpperCase();
    }else if(typeof value == 'number'){
        return value * 10;
    }else if(typeof value == 'boolean'){
        return !value;
    }
}
