const elTitle = document.getElementById('title');
const elTrim = document.getElementById('trim');
const elGeneration = document.getElementById('generation');
const elYear = document.getElementById('year');
const elColor = document.getElementById('color');
const elColorName = document.getElementById('colorName');
const elCategory = document.getElementById('category');
const elMaxSpeed = document.getElementById('maxSpeed');

loader(true);
fetch('https://json-api.uz/api/project/fn44-amaliyot/cars')
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    ui(res.data);
  })
  .finally(() => {
    loader(false);
  });

function ui(data) {
  const url = new URL(window.location.href).searchParams;
  let id = url.get('id');
  data.forEach((element) => {
    if (element.id == id) {
      elTitle.innerText = element.name ? element.name : 'No title';
      elTrim.innerText = element.trim ? element.trim : 'No data';
      elGeneration.innerText = element.generation ? element.generation : 'No data ';
      elYear.innerText = element.year ? element.year : 'No year';
      elColor.innerText = element.color ? element.name : 'No title';
      elColorName.innerText = element.colorName ? element.colorName : 'No color - name';
      elCategory.innerText = element.category ? element.category : 'No data';
      elMaxSpeed.innerText = element.maxSpeed ? element.maxSpeed : 'No data';
    }
  });
}



function loader(bool) {
  const elLoader = document.getElementById('loader');
  if (bool) {
    elLoader.classList.toggle('block');
  } else {
    elLoader.classList.toggle('hidden');
  }
}
