document.querySelector("#burger").addEventListener('click', () => {
    const aside = document.querySelector('aside');
    const toggle = aside.classList.toggle('active');
    const burger = document.querySelector('#burger');
    console.log(toggle)
    if (toggle) {
        burger.src ='/images/icones/croix.png';
    } else {
        burger.src = '/images/icones/burger.png';
    }
} )