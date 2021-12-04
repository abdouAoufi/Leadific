# Leadific

Repository for Interview process Good luck to everyone!

---

## App idea:

Our application is dealing with **domains**.

## Task:

Create MERN app to operate on theses domains.


## How to run the app?

Simply clone this repository. then hit 
````
npm install
````
if everything's right launch the App by:

````
npm run dev
````
nb: MongoDB should be installed on your local machine to start the app. If not you can use cloud url:
open .env file and set the cloud url.
>check config/db/index.ts 
## Routes

- ### Create Domain.

http method : POST

> http://localhost:4000/domain

body:

```
{
  "domainName": "www.leadific.com",
  "ownerName": "Some user",
  "ownerID": 32424
}
```
___


- Get list of domains

http method : **GET**

> http://localhost:4000/domain

___
- Updted domain

http method : **PUT**

> http://localhost:4000/domain/domainID

body 

````
{
  "domainName": "www.updatedDomain.com",
  "ownerName": "updated user",
  "ownerID": 32424
}
````

___

- Get domain by owner ID

http method : **GET**

>http://localhost:4000/domain/byOwner/32424

___
- Search domains
  
http method : **GET**

>http://localhost:4000/domain/search?q=www.abdou.com