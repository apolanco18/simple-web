import './index.scss';

const Nav = () => {

    const element = document.createElement("nav");

    element.className = "nav-style";

    const innerElement = document.createElement('div');

    innerElement.className = "nav-width";

    innerElement.innerHTML = `
    <div>
        <ul>
            <li>Ultimate Power</li>
            <li>Contact Support</li>
            <li>Amazing Picture</li>
        </ul>
    </div>

    <div class = "nav-search">
            <input type="search" placeholder="Search Please">
    </div>
    
    `


    element.appendChild(innerElement);

    return element;
}

export default Nav;