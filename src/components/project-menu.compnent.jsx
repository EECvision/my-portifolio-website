import React, { useState } from 'react';
import ProjectItem from './project-item.component';
import PROJECT_DATA from '../pages/project-data';


const ProjectMenu = () => {
  const [data] = useState(PROJECT_DATA);
  const [showAll, toggleAll] = useState(false)

  return (
    <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg border-2 border-gray-300 flex flex-col items-center justify-between mb-12 p-4 md:py-12 transform">
      {
        showAll ?
          data
            .map(({ id, ...otherProps }) => (
              <ProjectItem key={id} {...otherProps} />
            ))
          :
          data
            .filter(({ id }) => id <= 4)
            .map(({ id, ...otherProps }) => (
              <ProjectItem key={id} {...otherProps} />
            ))
      }
      <div 
        onClick={() => toggleAll(!showAll)} 
        className="inline bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-lg text-white text-xl font-medium py-3 px-8 md:px-16 text-center mt-12">
         {
           showAll 
           ? "View less projects"
           : "View more projects"
         }
        </div>
    </div>
  )
}


export default ProjectMenu;