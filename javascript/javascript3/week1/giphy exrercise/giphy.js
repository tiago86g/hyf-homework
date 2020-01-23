/////// Giphy APP

const gifButton = document.getElementById("btn");
const yourSearh = document.getElementById("gifSearch");
const showGif = document.getElementById("number");
const image = document.getElementById("img");

const searh = () => {
  const key = `xj7oXM8sQY98cMeuuWPPBI3zecV6wNYo`;
  const inputSearch = yourSearh.value;
  let howMany = showGif.value;

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=${howMany}&offset=0&rating=G&lang=en&q=${inputSearch}`
  )
    .then(response => response.json())
    .then(data => {
      let newArray = data.data.map(dt => {
        return dt.images.fixed_height.url;
      });

      newArray.forEach(data1 => {
        const gifImg = document.createElement("img");
        gifImg.setAttribute("src", data1);
        image.appendChild(gifImg);
      });
    });
};

const forSearch = () => {
  if (yourSearh.value == "") {
    image.innerText = "please insert value";
  } else {
    searh();
  }
};

gifButton.addEventListener("click", forSearch);