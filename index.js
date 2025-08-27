import { apikey } from "./env.js";
import { createElementNewsHome } from "./home.js";
import { newsArticle } from "./mainNewsArticle.js";

// שונות
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

// שונות
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

// main
export async function createPageHome() {

    const homePage = document.createElement('div');
    homePage.classList.add('home_page');


    const res = await getDataLocalStorage();
    const data = res.articles; // res["articles"]
    if (!data) {
        console.log('Errorrrrr data not enter');
    }
    // 
    // flow plen 'a' main page = importing all data
    // 
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

    // flow plen b - enter spesific news
    root.addEventListener("click", (event) => {
        // הוא תופס את האלמנט שעוטף את הכל הקרוב ביותר אלינו - במקרה הזה articleItem
        const articleItem = event.target.closest("news_item");
        //  נשלוף מידע מה
        // data attributes
        const titleValue = articleItem.divText.title.value; // האם ה value נצרך פה - לכאורה כדי לשלוףת את ה contant צריך value

        // חיפוש בדאטה

        for (let i = 0; i < data.length; i++) {
            const dataTitleValue = data.title;
            if (dataTitleValue === titleValue) {
                // צריך לפני זה לנקות את המסך הנוכחי --!!!! חשוב
                newsArticle(data[i]);
            }
        }

})
}

// להקפיד על שמות משתנים



// להשתמש במקום אחר 


function localS() {
    if (!localStorage.key()) {
        // בקשה ...
        localStorage.setItem({ 'key': '' });
        // הצגה
        localStorage.getItem();
    }
    else {
        localStorage.getItem();
    }
}



function createNav() {
    const nav = document.createElement('nav');
    // nav.classList.add('navs');

    const homeLink = document.createElement('a');
    homeLink.setAttribute("herf", "http//localhost:2000");
    homeLink.classList.add('links');
    // נשכפל את זה כמה פעמים
    // להוסיף בCSS קלאס עבור כל הלינקים
    const homepage = document.createElement('a');
    homeLink.setAttribute("herf", "http//localhost:2000");
    homeLink.classList.add('links');

    // ובסוף
    nav.appendChild(homeLink);
    nav.appendChild(homepage);

    return nav;
}


function addElementToHTML(element) {

    root.appendChild(element);
}













async function loadPage() {
    const root = document.getElementById("root");

    root.innerHTML = ""; //מוחק את כל מה שהיה פה עד עכשיו

    root.appendChild(getNuv()) //מתודה שתביא את העיצוב העדכני 
    if (currectPage)
        root.appendChild(currectPage);
    else if (!currectPage)
        root.appendChild(await getHome()) // תביא את הברירת מחדל שהוגדרה עבור ה בית
    let currectPage; // משתנה בהתאם ללר=קוח

}
loadPage();














