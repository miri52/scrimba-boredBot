const btn = document.querySelector(".btn");
const activityDOM = document.getElementById("activity");
const dogImg = document.querySelector(".dog-img");

const findActivity = () => {
  const url = "https://apis.scrimba.com/bored/api/activity";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      activityDOM.textContent = data.activity;
      activityDOM.classList.add("activity");
      dogImg.src = "happy-dog.jpg";
      dogImg.alt = "black pug in a red beret hat";
    });
};

btn.addEventListener("click", findActivity);
