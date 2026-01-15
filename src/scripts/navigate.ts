const btnMode =  document.querySelector('#btn-mode') as HTMLButtonElement;
const sun = document.querySelector('[data-sun]') as HTMLElement;
const moon = document.querySelector('[data-moon]') as HTMLElement;
const root =  document.documentElement;
const links = document.querySelectorAll('.nav-link');

const themes = localStorage.getItem('themes');
root.setAttribute('data-theme', themes as string);


btnMode.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'ligth' : 'dark';

    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    sun.classList.toggle('hidden');
    moon.classList.toggle('hidden');

});

links.forEach(link => {

    link.addEventListener('click', (event) => {
        event.preventDefault();

        const id = link.getAttribute('href');
        const target = document.querySelector(id as string);

        if(target){
            target.scrollIntoView({ behavior: "smooth" })
        }


    })

})

