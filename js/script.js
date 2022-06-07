const elResult = document.querySelector(".result-num");
const elNewsList = document.querySelector(".news-list");

elResult.textContent = daryoPostlari.length;

for (let news of daryoPostlari) {
  const newsLi = document.createElement("li");
  const newsImg = document.createElement("img");
  const newsDiv = document.createElement("div");
  const newsTitle = document.createElement("h5");
  const newsText = document.createElement("p");
  const newsText1 = document.createElement("p");
  const newsLink = document.createElement("a");

  newsLi.setAttribute("class", "card mb-3");
  newsLi.style.width = "18rem";
  newsImg.classList.add ("card-img-top");
  newsImg.setAttribute("src", news.photo);
  newsDiv.classList.add("card-body");
  newsTitle.classList.add("card-title");
  newsText.classList.add("card-text");
  newsText1.classList.add("card-text");
  newsLink.setAttribute("class", "btn btn-danger");
  newsLink.setAttribute("href", `://daryo.uz/${news.daryoId}`);


  newsTitle.textContent = news.title;
  newsText.textContent = news.date;
  newsLink.textContent = "link";
  newsImg.textContent = "photo";

  elNewsList.appendChild(newsLi);
  newsLi.appendChild(newsImg);
  newsLi.appendChild(newsDiv);
  newsLi.appendChild(newsTitle);
  newsLi.appendChild(newsText);
  newsLi.appendChild(newsText1);
  newsLi.appendChild(newsLink);
  console.log(elNewsList);
}