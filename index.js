import {apikey} from "./env.js";
import { createPageHome , getDataLocalStorage } from "./home.js";

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













async function loadPage(){
    const root = document.getElementById("root");
    
    root.innerHTML =""; //מוחק את כל מה שהיה פה עד עכשיו

    root.appendChild(getNuv()) //מתודה שתביא את העיצוב העדכני 
    if(currectPage)
        root.appendChild(currectPage);
    else if(!currectPage)
        root.appendChild(await getHome()) // תביא את הברירת מחדל שהוגדרה עבור ה בית
    let currectPage; // משתנה בהתאם ללר=קוח

}
loadPage();














