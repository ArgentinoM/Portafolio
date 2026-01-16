const title = document.querySelector('#title') as HTMLElement;

const myName = 'Argentino Monroy';
const speed = 80;
const startDelay = 300;
let i = 0;

const type = () => {

    if(i < myName.length){
        title.textContent += myName[i];
        i++;
        setTimeout(type, speed);
    }
    
}

setTimeout(type, startDelay);


const fadeRightElements = document.querySelectorAll('.animate-fade-right');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

fadeRightElements.forEach((el) => observer.observe(el));