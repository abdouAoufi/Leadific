# Leadific

Repository for Interview process Good luck to everyone!

---

## App idea:

Our application is dealing with **domains**.

## Task:

Create MERN app to operate on theses domains.

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