const fetchData = url => fetch(url);

// const username = document.getElementById('title');
// const title = document.getElementById('title');
// const request = fetchData('https://jsonplaceholder.typicode.com/posts');
// request.then(response => response.json()).then(data => {});

// const userRequest = fetchData('https://jsonplaceholder.typicode.com/users');
// userRequest
//   .then(response => response.json())
//   .then(data => {
//     const fragment = document.createDocumentFragment();
//     data.forEach(dataUser => {
//       const user = document.createElement('h1');
//       const dataElement = document.createElement('p');
//       dataElement.textContent = dataUser.name;
//       user.textContent = dataUser.username;

//       fragment.append(user, dataElement);
//     });
//     document.body.append(fragment);
//   });

const number = document.getElementById('number');
const advice = document.getElementById('advice');
const button = document.getElementById('button');

const printText = () => {
  const phrasesRequest = fetchData('https://api.adviceslip.com/advice');
  phrasesRequest
    .then(response => response.json())
    .then(data => {
      number.textContent = `advice # ${data.slip.id} `;
      advice.textContent = data.slip.advice;
    });
};

button.addEventListener('click', () => {
  printText();
});

printText();
