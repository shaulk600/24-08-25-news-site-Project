import { apikey } from "./env.js";

export async function getDataLocalStorage() {

    let data = localStorage.getItem("news");
    if (!data) {
        data = await getData();
        console.log(data);
        localStorage.setItem("news", JSON.stringify(data));
    }
    const ret = JSON.parse(data);
    return ret;
}


async function getData() {
    try {
        console.log(`1fgrfgrg`);
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2025-08-20&sortBy=publishedAt&apiKey=${apikey}`;
        const res = await fetch(url, { method: 'GET' });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}


export async function createPageHome() {

    const homePage = document.createElement('div');
    homePage.classList.add('home_page');


    const res = await getDataLocalStorage();
    const data = res.articles;
    if (!data) {
        console.log('Errorrrrr data not enter');
    }
    for (let i = 0; i < data.length; i++) {

        try {
            let element = await createElementNewsHome(data[i]);
            homePage.appendChild(element);
        } catch (err) {
            console.log(`error - createPageHome- ${err}`);
        }
    }

    const root = document.getElementById("root");
    root.appendChild(homePage);
}

async function createElementNewsHome(objData) {

    const urlImgValue = objData.urlToImage;
    console.log(urlImgValue);
    const authorValue = objData.author;
    console.log(authorValue);
    const titleValue = objData.title;
    console.log(titleValue);

    // const newElementNews = document.createElement('div');
    // newElementNews.classList.add('new_element');

    // container
    const articleItem = document.createElement('div');
    articleItem.classList.add("news_item");


    const articleImage = document.createElement('img');
    articleImage.setAttribute("src", urlImgValue);
    articleImage.setAttribute("alt", "img for item");

    articleImage.classList.add('info_image');
    articleImage.classList.add('w-50');

    const divText = document.createElement('div');
    divText.classList.add('div_text');
    divText.classList.add('w-50');

    const articleAuthor = document.createElement('div');
    articleAuthor.classList.add('author');
    articleAuthor.textContent = authorValue;

    divText.appendChild(articleAuthor);


    const title = document.createElement('div');
    title.classList.add('title');
    title.classList.add('title_hover');
    title.textContent = titleValue;

    divText.appendChild(title);

    
    articleItem.appendChild(articleImage);
    articleItem.appendChild(divText);
    

    return articleItem;
}
await createPageHome();

