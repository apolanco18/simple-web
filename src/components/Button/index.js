import './index.scss';

const Button = (props = {}) => {

    const onButtonClick = () => {
        console.log(props)
        if(props.callback){ 
            props.callback();
        }
        else{
            alert("Warning You Have Download Virus")
        }
    }
    const text = props.text || "Click me";

    const element = document.createElement("button");
    element.className = "cta-button";
    element.innerHTML = text;
    element.addEventListener("click",onButtonClick,false);
    return element;
  }

  export default Button;