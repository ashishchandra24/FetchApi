Profile Card with Fetch API
card create
Demo
You can see a live demo of this project(https://ashuashish04.github.io/FetchApi/)

# Fetch API

## What is Fetch API?

Fetch API JavaScript ka built-in method hai jo server se data **fetch (GET)** aur **send (POST, PUT, DELETE)** karne ke liye use hota hai. Yeh Promise-based API hai aur `XMLHttpRequest` ka modern replacement hai.

## Syntax

```javascript
fetch(url, options)
```

## GET Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

## POST Request

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Hello",
    body: "Fetch API",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Common Methods

* GET → Data fetch karna
* POST → Naya data bhejna
* PUT → Data update karna
* DELETE → Data delete karna

## Advantages

* JavaScript ka built-in API
* Promise-based
* Async/Await support
* Easy to use
* Fast aur clean syntax

## Conclusion

Fetch API server ke saath data exchange karne ka ek simple aur modern tarika hai. Iska use React aur normal JavaScript projects mein bahut common hai.
