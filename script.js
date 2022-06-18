// Problem-1: Class - Movie

// class movie{
//     constructor(title, studio, rating="PG13"){
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
// }

// const item1 = new movie("Casino Royale", "Eon Productions", "PG13");
// const item2 = new movie("Avengers", "Marvel");
// const item3 = new movie("Aquaman", "DC", "R");
// const item4 = new movie("Dark", "anonymous", "R");



// function getPG(arrayofmovieinstances){
//     let res = arrayofmovieinstances.filter((ele) => ele.rating==="PG13");
//     console.log(res);
//     return res;
// }


// getPG([item1,item2,item3,item4]);












// Problem-2: Class circle

// class circle{
//     constructor(radius, color){
//         this.radius=radius;
//         this.color=color;
//     }

//     getRadius(){
//         console.log(this.radius);
//         return this.radius;
//     }

//     setRadius(arg){
//         this.radius=arg;
//     }

//     getColor(){
//         console.log(this.color);
//         return this.color;
//     }

//     setColor(arg){
//         this.color=arg;
//     }

//     getArea(){
//         console.log(3.14*this.radius*this.radius);
//         return 3.14*this.radius*this.radiuss;
//     }
    
//     getCircumference(){
//         console.log(2*3.14*this.radius);
//         return 2*3.14*this.radius;
//     }

// }


// const c1 = new circle();
// c1.setColor("red");
// c1.setRadius(5);
// c1.getArea();
// c1.getCircumference();








// Problem3: Write a “person” class to hold all the details

// class person{
//     constructor(name, age, sex, number, address, email){
//         this.name=name;
//         this.age=age;
//         this.sex=sex;
//         this.number=number;
//         this.address=address;
//         this.email=email;
//     }

//     getDetails(){
//         console.log(this.name,
//             this.age,
//             this.sex,
//             this.number,
//             this.address,
//             this.email
//         );
//     }
// }

// const man1 = new person("Manish", 25, "Male", 23534, "645 B-block", "xyz@gamil.com");

// man1.getDetails();









//  Problem 4: write a class to calculate uber price

// class uberprice{
//     constructor(name, distance){
//         this,name=name;
//         this.distance=distance;
//     }

//     getPrice(){
//         if(this.distance<=15){
//             let price = "20$";
//             console.log(`Dear ${this.name}, your journey of distance ${this.distance} km will cost you ${price}`);
//         }else if(this.distance>15 && this.distance<=30){
//             let price = "40$";
//             console.log(`Dear ${this.name}, your journey of distance ${this.distance} km will cost you ${price}`);
//         }else{
//             let price = "60$";
//             console.log(`Dear ${this.name}, your journey of distance ${this.distance} km will cost you ${price}`);
//         } 
//     }
// }

// const customer1 = new uberprice("Santosh", 14);
// customer1.getPrice();

// const customer2 = new uberprice("Manish", 50);
// customer2.getPrice();



