const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Пвх материал 0й сорт",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-img.png",
  },
  {
    id: 1,
    title: "Пвх материал 1й сорт",
    price: "180 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-img.png",
  },
  {
    id: 2,
    title: "Пвх материал 2й сорт",
    price: "190 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-img.png",
  },
  {
    id: 3,
    title: "Пвх материал 3й сорт",
    price: "200 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-img.png",
  },
  {
    id: 4,
    title: "Пвх материал 4й сорт",
    price: "210 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-img.png",
  },
  {
    id: 5,
    title: "Пвх материал 5й сорт",
    price: "220 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-img.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <a href="product.html" class="content-main__list-item">
                  <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="${item.title}" />
                  </div>
                  <h5 class="content-main__list-item--title">
                    ${item.title}
                  </h5>
                  <strong class="content-main__list-item--price">${item.price}</strong>

                  <div class="content-main__list-item--desc--box">
                    <span class="content-main__list-item--desc"
                      >${item.address}</span
                    >
                    <span class="content-main__list-item--desc"
                      >${item.date}</span
                    >
                  </div>
                </a>
        `
    );
  });
};

const filtereArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

cardWrapper.style.justifyContent = "flex-start";
// cardWrapper.style.rowGap = "normal";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filtereArray(cardArray, searchInput.value));
});
