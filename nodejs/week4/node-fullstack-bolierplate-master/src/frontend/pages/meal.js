function renderMeal(meal) {
  const ul = document.createElement('ul');

  const li = document.createElement('li');
  console.log(meal);
  li.innerHTML = meal[0].title;
  ul.appendChild(li);
  document.body.appendChild(ul);
}

window.handleMealRequest = params => {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>`;

  fetch(`/api/meals/${params.id}`)
    .then(response => response.json())
    .then(renderMeal);

  //console.log(response.json());
};
