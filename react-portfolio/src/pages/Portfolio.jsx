import React from 'react';
import Project from './Project';

const Portfolio = () => {
    return (
        <section>
            <Project
                title="Project 1"
                image={/* Image URL */}
                deployedLink={/* Deployed link */}
                githubLink={/* GitHub link */}
            />
            {/* Repeat for other projects */}
        </section>
    );
};

export default Portfolio;
