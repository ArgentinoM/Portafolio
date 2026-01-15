const title = document.querySelector('#title') as HTMLElement;

const myName = 'Argentino Monroy';
const speed = 80;
let i = 0;

const type = () => {

    if(i < myName.length){
        title.textContent += myName[i];
        i++;
        setTimeout(type, speed);
    }
    
}

type()