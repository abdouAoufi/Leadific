## Question A :
The difference between “==” and “===” is the equality and how javascript will handle the comparison. So javascript is dynamic programming languages means it's loosely typed comparing to strongely typed languages like c, c++ and java.
that meanst Javascript will get the type of the object or anything from its value.

### let's understand "=="
For this one Javascript will try its best to give you result,
For example 
````
2 == "2"  // true
````
after knowing the type of the two variables it tried to cast 
the second one to be number and then it compare it with the first one.

### let's understand "==="
This is called strict equality. Means no casting here no conversion to the type let's pick the previous example.

````
2 === "2"  // false
````
 Here Javascript will immediately see that they're different in the type so it retuns false

 ## Question B :
 What is the purpose of the ‘async’ and ‘await’ keywords in javascript?


 Async and Await for me it's just aonther way to write asynnchrounous code. In early days we had only callbacks then javascript intreduce the Promises things get intressted here we can write code like that.

 ````
 function getData () {
  doSomeFetching().then(data => {
      manageData()
     }
     ).catch(err => {
      // something went wrong
     })
 }
````

Here we can just store the data variable returned by the function and get rid of then() and catch with the helpe of 
Async and await.

 ````
 function async getData () {
  const data = await doSomeFetching();
 }
````
It's Fancy and powefull.


 ## Question C :
for this one:
````
add1(10).then(v => { 
console.log(v); 
}); 
````

 The output will be 60.
 why? because if we focus on the last line fo add1 function
 we see 
 ````
 return x + a + b;
 ````
 the result here depends on three variables :

 - The first (x) which is synchroun means it's aviable. But the (a and b) are asynchcroun we have to wait the promise to construct the result and return it.

for this one:
````
add2(10).then(v => { 
console.log(v); 
}); 
````
Things get intressted here!
It's basicaly the same result : 60 
but in this one we used aonther approach. let's focus on the last line of add2()
````
return x + await p_a + await p_b; 
````

 - The first (x) which is synchroun means it's aviable. But p_a is asynchcroun we have to wait the promise to construct give us result and after that we add up aonther variable p_b which is asynchcroun too so we wait till get the result from the promise. The diffence here is the *time* (double comparing to the first )because p_a and p_b evaluated one after aonther. Javascript behind the scence whene it see statement like this one 
  ````
  const result = x + y + z ;
  ````
  It start constructing the reslut from left to right in this case x then y and lastetly z.
  This is what happend in second example and we had async operations.

    