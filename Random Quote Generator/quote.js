const btnE1 = document.getElementById("btn");
const quoteE1 = document.getElementById("quote");
const authorE1 = document.getElementById("author");
const shareInstagramBtn = document.getElementById("share-instagram");
const apiURL = "https://api.quotable.io/random";
async function getQuote(){
    try{
        btnE1.innerText = "Loading....";
        btnE1.disabled = true ;
        quoteE1.innerText="Updating....";
        authorE1.innerText = "Updating....";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    document.querySelector('.quote-container').classList.add('fade-out');
    setTimeout(() => {
        quoteE1.innerText = quoteContent;
        authorE1.innerText = " ~ " + quoteAuthor;
        document.querySelector('.quote-container').classList.remove('fade-out');
        document.querySelector('.quote-container').classList.add('fade-in');
    } , 500);
    btnE1.innerText = "NEW QUOTE";
    btnE1.disabled = false ;
    console.log(data);
    }
    catch(error){
        console.log(error);
        quoteE1.innerText = "An error happened, please try again later";
        authorE1.innerText = "An error happened";
        btnE1.innerText = "Generate a quote";
        btnE1.disabled = false ;
    }
}
function shareOnInstagram() {
    const quoteText = quoteE1.innerText + " " + authorE1.innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard! Now you can share it on Instagram.");
    }).catch((error) => {
        console.error("Error copying text: ", error);
    });
}

getQuote();
btnE1.addEventListener("click",getQuote);
shareInstagramBtn.addEventListener("click",shareOnInstagram);
document.querySelector('.quote-container').classList.add('fade-in');