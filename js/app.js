const elSearch = document.getElementById('search');
const elLoader = document.getElementById('loader')

let elementsArray = [];


fetch('https://json-api.uz/api/project/fn44-amaliyot/cars')
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    res.data.forEach((el) => {
      elementsArray.push(el);
    });
  })
  .finally((res) => {
    uiWrite(elementsArray);
    elLoader.classList.add('hidden')
  });

function uiWrite(arr) {
  elementsArray[3].image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabwqfL3ok5gkJSIB2irkc3sNR4z1bG4_zVA&s";
  document.getElementById('container').innerHTML = null;
  arr.forEach((el) => {
    let htmlElements = `<div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img id="card-img"
                src="${el.image}"
                alt="${el.name}"
                class="w-full min-h-[260px]"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title" id="card-title">${el.name}</h2>
              <p  id="card-text">
                ${el.type}
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        `;
    document.getElementById('container').innerHTML += htmlElements;
  });
}

function searchUiWrite(val) {
  let filteredArray = [];
  elementsArray.filter((el) => {
    if (el.name.toLowerCase().includes(val.toLowerCase())) return filteredArray.push(el)
  });
  uiWrite(filteredArray);
  if(filteredArray == '') {
    document.getElementById('container').innerHTML = `
      <h2 id="notFound" class="text-[48px] font-bold text-white mx-auto">Hech narsa topilmadi 🫡</h2>
    `;
  }
}

elSearch.addEventListener('input', (evt) => searchUiWrite(evt.target.value));
