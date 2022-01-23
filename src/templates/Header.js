const Header = document.createElement('div')

const title = `
    <h1>ROCK</h1>
    <h1>PAPER</h1>
    <h1>SCISSORS</h1>
`
Header.classList.add('head')
Header.innerHTML = title;

export { Header }