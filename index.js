const btn = document.querySelector('.btn')
const activityDOM = document.getElementById('activity')


const findActivity = () => {
    const url = 'https://apis.scrimba.com/bored/api/activity'
    fetch(url).then(res => res.json()).then(data => {
        activityDOM.textContent = data.activity;
        activityDOM.classList.add('activity')

    })
}

btn.addEventListener('click', findActivity)