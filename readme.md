১. Interface vs Type

TypeScript এ interface এবং type দুটোই object structure বা shape define করতে ব্যবহার করা হয়। কিন্তু এদের মধ্যে কিছু subtle পার্থক্য আছে।

Interface:

নতুন properties যোগ করার জন্য extend করা যায়।

Classes implement করতে পারে।

Object structure define করার জন্য বেশি ব্যবহার করা হয়।

Type:

Primitive, union, tuple সব ধরনের type define করতে পারে।

Multiple type কে combine বা merge করা যায়। কিন্তু interface এর মতো extend করা সীমিত।

উদাহরণ:

interface Person {
  name: string;
  age: number;
}

type Employee = {
  id: number;
  department: string;
}


interface Manager extends Person {
  role: string;
}

type ID = number | string;


সারসংক্ষেপ:
Interface সাধারণত object বা class জন্য, type বেশি flexible এবং union, tuple, primitive সব জন্য।

২. keyof Keyword এর ব্যবহার

TypeScript এ keyof keyword দিয়ে আমরা একটি object type এর সকল key কে type হিসেবে পেতে পারি। এটি type safety বজায় রাখতে অনেক কাজে লাগে।

উদাহরণ:

type Person = {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; 

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person: Person = { name: "Rahim", age: 25 };
const value = getValue(person, "name"); 


এখানে keyof Person আমাদের "name" এবং "age" কে type হিসেবে দেয়, যা runtime error কমায়।