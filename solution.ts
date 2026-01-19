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

type Item = {
    title: string,
    rating: number
  }

const filterByRating = (arrOfObj:Item[]) => {
    const newArrOfObj = arrOfObj.filter(item=> item.rating >= 4)
    return newArrOfObj
}


interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  
  const filterActiveUsers = (input: User[])=>{
      const filteredUsers = input.filter(user => user.isActive == true)
      return filteredUsers;
  }
  

  interface Book {
    title : string,
    author : string,
    publishedYear : number,
    isAvailable : boolean
}

const printBookDetails = (book:Book) =>{
    const rslt = book.isAvailable ? `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: Yes`: `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: No`
    
    console.log(rslt);
}


