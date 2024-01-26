
const mySym=Symbol("key1");
const  JsUser={
    name:"Ashish",
    age:23,
    "full_name":"Ashish Kumar Bhinde",
    location: "guna",
    [mySym]: "mykey1",
    email: "ashishbhinde82@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Tuesday"]

}
console.log(JsUser.email);
console.log(JsUser[mySym]);//symbol as a key is used
console.log(JsUser["full_name"]);
