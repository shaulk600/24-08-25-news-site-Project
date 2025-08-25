

function newsArticle(objData) {



    const urlImgValue = objData.urlToImage;
    console.log(urlImgValue);
    const authorValue = objData.author;
    console.log(authorValue);
    const titleValue = objData.title;
    console.log(titleValue);

    const newElementNews = document.createElement('div');
    newElementNews.classList.add('new_element');

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

    newElementNews.appendChild(articleItem);
    newElementNews.appendChild(articleImage);
    newElementNews.appendChild(divText);


    return newElementNews;

}

newsArticle()
