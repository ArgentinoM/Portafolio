const btnMode =  document.querySelector('#btn-mode') as HTMLButtonElement;
const iconSun = document.querySelector('[data-sun]') as HTMLElement;
const iconMoon = document.querySelector('[data-moon]') as HTMLElement;
const links = document.querySelectorAll('.nav-link');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' ;

const initialTheme: 'light' | 'dark' = savedTheme ?? 'light';

root.dataset.theme = initialTheme;

btnMode.addEventListener('click', () => {

  const nextTheme: 'light' | 'dark' =
    root.dataset.theme === 'dark' ? 'light' : 'dark';

  root.dataset.theme = nextTheme;

  iconSun.classList.toggle('hidden', nextTheme === 'dark');
  iconMoon.classList.toggle('hidden', nextTheme === 'light');

  localStorage.setItem('theme', nextTheme);
  
});

links.forEach((link) => {

  link.addEventListener('click', (event) => {
    event.preventDefault();

    const id = link.getAttribute("href")?.slice(1);
    const target = document.getElementById(id as string);

    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }

  })

})
