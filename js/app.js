const form = document.querySelector('form');

function done() {
    let p = document.querySelectorAll('p');
}

function vaqt() {
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let hour = date.getHours()
    let minut = date.getMinutes()
    let second = date.getSeconds()

    return `${hour<10? "0"+hour:hour}:${minut<10? "0"+minut:minut}:${(second<10)? "0"+second:second}  ${day}/${month}/${year}`
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let text = document.getElementById('text').value.trim()

    if (text.length > 1) {

        const randNum = Math.floor(Math.random() * 100000)
        const mainDiv = document.createElement("div");
        const miniDiv = document.createElement("div");
        const p = document.createElement("p");
        const img = document.createElement('img')
        const stime = document.createElement('small')

        mainDiv.setAttribute("class", "mainDiv");
        mainDiv.setAttribute("id", `${randNum}`);
        miniDiv.setAttribute("class", "info");
        img.setAttribute("src", "./closebtn.svg");

        p.textContent = text;
        stime.textContent = vaqt();

        miniDiv.appendChild(p)
        miniDiv.appendChild(img)

        mainDiv.appendChild(miniDiv)
        mainDiv.appendChild(stime)

        document.querySelector('form').appendChild(mainDiv);
        form.reset();
        img.addEventListener('click', () => {
            document.querySelector('.modal1').classList.remove('hidden')
            document.querySelector('.modal2').classList.remove('hidden')
            document.querySelector('#mYes').addEventListener('click', () => {
                document.querySelector('.modal1').classList.add('hidden')
                document.querySelector('.modal2').classList.add('hidden')
                mainDiv.remove();
            })
            document.querySelector('#mNo').addEventListener('click', () => {
                document.querySelector('.modal1').classList.add('hidden')
                document.querySelector('.modal2').classList.add('hidden')
            })
            document.querySelector('.modal1').addEventListener('click', () => {
                    document.querySelector('.modal1').classList.add('hidden')
                    document.querySelector('.modal2').classList.add('hidden')
                })
                // document.querySelector('.modal2').addEventListener('click', () => {
                //     document.querySelector('.modal1').classList.remove('hidden')
                //     document.querySelector('.modal2').classList.remove('hidden')
                // })
            document.querySelector('body').addEventListener('keydown', (event) => {
                if (event.code == 'Escape') {
                    document.querySelector('.modal1').classList.add('hidden')
                    document.querySelector('.modal2').classList.add('hidden')
                }
            })
        })

    }
})