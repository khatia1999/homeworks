/*გამოაცხადეთ ორი ცვლადი a,b მიანიჭეთ მნიშვნელობები 23 და 4 */
 
let a = 23;
let b = 4;

/*დაბეჭდეთ (console.log) a და b რიცხვების ჯამი*/
console.log(a+b);

/*დავეჭდეთ a და b რიცხვების ნამრავლი*/
console.log(a*b);

/*გამოაცხადეთ ახალი ცვლადი c რომელიც იქნება boolean, მიანიჭეთ true და დაბეჭდეთ*/
let c = true;
console.log(c);

/*გამოახცადეთ ახალი ობიექტის(object) ტიპის ცვლადი  person თქვენი მონაცემებით ( first name, last name, age,
 address(რომელიც შეიცავს: city, country), phone no, email, friends (სახელების სია),  
დაბეჭდეთ person ობიექტის სახელი და მეორე მეგობრის სახელი */

const person = {
    'first_name': 'john',
    'last_name': 'snow',
    'age': 27,
    address:{
        'city': 'tbilisi',
        'country':'georgia',
    },
    'phone no': 555555555,
    'email': 'johnsnow@gmail.com',
    friends:[
      'natia','mari','gio','nika','lika'
    ]
}
console.log(person);
console.log(person.first_name);
console.log(person.friends[1]);

