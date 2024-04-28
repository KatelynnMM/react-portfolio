import React from 'react';
import Project from '../components/Project'; // Assuming you have a Project component

const Portfolio = () => {
    return (
        <div id="projects">
            <h2 className="text-center">Projects</h2>
            <div className="projects">
                {/* Project 1 */}
                <Project
                    title="Project 1"
                    image="src/assets/Screenshot 2023-12-03 102701.png" // Use your image URL
                    deployedLink="https://katelynnmm.github.io/code-refactor/" // Use your deployed link
                    githubLink="https://github.com/" // Use your GitHub link
                />

                {/* Project 2 */}
                <Project
                    title="Project 2"
                    image="src/assets/coming-soon-1898936_640.jpg" // Use your image URL
                    deployedLink="https://fisherk19.github.io/music-explorer/" // Use your deployed link
                    githubLink="https://github.com/FisherK19/music-explorer" // Use your GitHub link
                />

                {/* Project 3 */}
                <Project
                    title="Project 3"
                    image="src/assets/coming-soon-1898936_640.jpg" // Use your image URL
                    deployedLink="https://protected-stream-88252-41be40b06e65.herokuapp.com/" // Use your deployed link
                    githubLink="https://github.com/ECiarabellini/RecipeHub" // Use your GitHub link
                />

                {/* Add more Project components as needed */}
            </div>
        </div>
    );
};

export default Portfolio;
