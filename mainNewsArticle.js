

function newsArticle(objData) {



    const urlImgValue = objData.urlToImage;
    console.log(urlImgValue);
    const authorValue = objData.author;
    console.log(authorValue);
    const titleValue = objData.title;
    console.log(titleValue);

    const newElementNews = document.createElement('div');
    newElementNews.classList.add('new_element_one');

    // container
    const articleItem = document.createElement('div');
    articleItem.classList.add("news_item_one");


    const articleImage = document.createElement('img');
    articleImage.setAttribute("src", urlImgValue);
    articleImage.setAttribute("alt", "img for item");

    articleImage.classList.add('info_image_one');
    articleImage.classList.add('w-100');


    const articleAuthor = document.createElement('div');
    articleAuthor.classList.add('author_one');
    articleAuthor.textContent = authorValue;


    const title = document.createElement('div');
    title.classList.add('title_one');
    title.textContent = titleValue;



    newElementNews.appendChild(articleItem);
    newElementNews.appendChild(articleImage);

    newElementNews.appendChild(articleAuthor);
    newElementNews.appendChild(title);


    return newElementNews;

}

newsArticle()
