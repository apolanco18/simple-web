import './index.scss';

const Title = (props = {}) => {


    const element = document.createElement("h1");
    element.className = "title";
    element.innerHTML = "Welcome to the Jungle";

    if (props.text){
        element.innerHTML = props.text;
    }
    return element;
}

export default Title;