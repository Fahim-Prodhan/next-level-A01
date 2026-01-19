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

const getLength = (input:string | any[]):number | undefined =>{
    if(typeof input == 'string'){
        return input.length
    }else if(Array.isArray(input)){
        return input.length;
    }
}


class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

