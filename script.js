/* fetch('https://jsonplaceholder.typicode.com/users'), {
    method: 'POST',
        headers : {
            'Content-type': 'application/json'
    },
    body: JSON.stringify({name: 'John Doe'
})
.then(res => {
  return res.json()
})
.then(data => console.log(data))
.catch (error => console.log('ERROR'))} */

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))