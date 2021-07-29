// using fetch for POST and GET request

----------- POST ------------

const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


----------- GET -------------

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
