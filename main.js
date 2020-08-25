    const $btn = document.getElementById('btn-kick')
    const $btnStrike = document.getElementById('btn-kick-strike')

    const character = {
        name: "Pikachu",
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById('health-character'),
        elProgressBar: document.getElementById('progressbar-character')
    }
    const enemy = {
        name: "Charmander",
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById('health-enemy'),
        elProgressBar: document.getElementById('progressbar-enemy')
    }

    $btn.addEventListener('click', () => {
        console.log('Kick')
        changeHP(random(20), character)
        changeHP(random(20), enemy)
    })
    $btnStrike.addEventListener('click', () => {

        changeHP(random(40), character)
        changeHP(random(40), enemy)

    })


    init = () => {
        console.log('Start game!')
        renderHp(character)
        renderHp(enemy)

    }
    renderHp = (person) => {
        renderHpLife(person)
        renderProgressBarHp(person)
    }
    renderHpLife = (person) => {
        person.elHP.innerText = person.damageHP + '/' + person.defaultHP

    }
    renderProgressBarHp = (person) => {
        person.elProgressBar.style.width = person.damageHP + '%'
    }
    changeHP = (count, person) => {
    if (person.damageHP < count){
        person.damageHP=0
        alert('Покемон' +' ' + person.name + ' ' +'проиграл')
        $btn.disabled = true

    } else {
        person.damageHP -= count
    }

        renderHp(person)
    }
    random = (num) => {
        return Math.ceil(Math.random() * num)
    }

    init()