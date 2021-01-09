import React from 'react';
import ProjectMenu from '../components/project-menu.compnent';

function ProjectsPage() {
    return (
        <div id='projects' className="relative flex flex-col items-center justify-start overflow-hidden">
            <div className="absolute w-full h-48 bg-gray-700 flex items-start justify-center">
                <div className="text-gray-100 text-4xl text-center font-bold mt-4">My Projects</div>
            </div>
            <div className="w-full px-4 md:px-24 mt-24">
                <ProjectMenu/>
            </div>
        </div>
    )
}

export default ProjectsPage;
