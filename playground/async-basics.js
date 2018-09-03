console.log("Starting app");

setTimeout(() => {
  console.log("Inside Call Back");
},2000);

setTimeout(() => {
  console.log("Second Set time Out works!!!");
},1999);

console.log("Finishing up");
