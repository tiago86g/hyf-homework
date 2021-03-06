function renderMeals(meals) {
  const ul = document.createElement('ul');
  console.log(meals);

  meals.forEach(meal => {
    const li = document.createElement('li');
    li.innerHTML = meal.title;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <h1>Meals</h1>`;

  // make sure the backend api works before working with it here
  fetch('/api/meals')
    .then(response => response.json())
    .then(renderMeals);
  //console.log('res', response);
};
