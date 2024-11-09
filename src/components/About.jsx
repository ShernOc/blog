import { faSmile } from "@fortawesome/free-regular-svg-icons/faSmile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function About(){

    return (
        <>
        <h1> ABOUT</h1>
        <p>
            Welcome to my blog! Am writing this blog as a platform to share my experience and progress as i learn to code, to be specific learning <b>React</b>. I believe that that everyone has a way of grasping information and for me writing/recapping is the solution. 
            <br />
            <b>Sources:</b> 
            Majority of what i will be sharing is from <b><a href="https://moringaschool.com/" target = "_blank" >MORINGA SCHOOL PLATFORM </a> and <a href="https://react.dev/learn/passing-props-to-a-component" target = "_blank"> React </a></b>. To me, React is a combination of JavaScript and lots of HTML/JSX syntax code to create incredible and an easy application. Look at it as making work easier.Instead of the constant getting/getting DOM: aka DOMContentLoaded, or the document.queryselector.. , every time you want to make your website dynamic, React comes in and combines both. 
            My expectation for you is that throughout the reading, you get to appreciate the two pairs, and the simplified way of how i understand React. 
            Coding is both easy and complex in its own right depending on language of focus. For React, have the knowledge of both HTML and Javascript and you are ready to learn. I know you are curious but yes i am proficient in this languages:
            </p>
            <b>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                </ul>
            </b>
            <p>
                <b>Note:This Blog was created using React.</b>
                What is next: Follow along i study React. Also comments and contribution to the code is highly recommended. 
                Thank you!! <FontAwesomeIcon icon = {faSmile}/></p>

        </>
    )
}

export default About 