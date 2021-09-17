const qoute = document.querySelector(".qot");
const auth = document.querySelector(".auth");
const btn = document.querySelector(".btn");
const tweet = document.querySelector(".tweet");

btn.addEventListener("click", function () {
  fetch("https://api.quotable.io/random")
    .then((result) => result.json())
    .then((data) => {
      qoute.innerHTML = `"${data.content}"`;
      auth.innerHTML = `by ${data.author}`;
    });
});

tweet.addEventListener("click", function () {
  const tweeturl = `https://twitter.com/intent/tweet?text=${qoute.textContent} - ${auth.textContent}`;
  window.open(tweeturl, "_blank");
});
