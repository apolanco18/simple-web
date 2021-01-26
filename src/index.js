import Button from "./components/Button"
import Title from "./components/Title"
import Input from "./components/Input"
import Nav from "./components/Nav"

import './index.scss';

const App = () => {
    const element = document.createElement('div');

    element.className = "container";

    element.appendChild(Title({
        text:"Story Creator"
    }));
    element.innerHTML += 
    `
        <div class="paragraph-container">
            <p class="story-start">Select one of the Buttons below to add a story</p>
        </div>
    `

    const randStory = () => {
        console.log("HEllo")
        const randStories = [
            'Jimmy went up a well',
            'Jimmy fell down a well',
            'Sarah fought a monster',
            'Sarah saved Jimmy from the well',
            'Jimmy drank water from the well'
        ]
        const value = Math.floor(Math.random() * (5));

        const el = document.querySelector(".paragraph-container");
        const p = document.createElement('p');
        p.innerHTML = randStories[value];
        el.appendChild(p);

    }
    


    const inputDiv = document.createElement('div')
    inputDiv.className = "signup-container";
    inputDiv.innerHTML = 
    `
        <div>
            <text>Sign up to receive the awesome power to create stories</text>
        </div>
    
    `
    inputDiv.appendChild(Input());
    inputDiv.appendChild(Button({
        text: "Submitt for Ultimate Power",
    })
    );
    element.appendChild(Button({
        text:'Hello',
        callback:randStory
    }));
    element.appendChild(Button({
        text:'Story 2',
        callback:randStory
    }));


    element.appendChild(inputDiv);



    

    return element;
}


document.getElementById("root").appendChild(Nav());
document.getElementById("root").appendChild(App());