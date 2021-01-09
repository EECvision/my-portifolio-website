import React,{useState} from 'react';
import ProjectItem from './project-item.component';

const projectData = [
    {
        id: 1,
        projectName: 'manage landing page',
        description: 'A responsive landing page',
        icon: 'previewManage',
        linkUrl: 'https://eecvision.github.io/manage-landing-page',
        invert: false
    },
    {
        id: 2,
        projectName: 'room homepage',
        description: 'A responsive landing page',
        icon: 'previewRoom',
        linkUrl: 'https://eecvision.github.io/room-homepage',
        invert: true

    },
    {
        id: 3,
        projectName: 'easy bank landing page',
        description: 'A responsive landing page',
        icon: 'previewEasyBank',
        linkUrl: 'https://eecvision.github.io/easy-banking-landing-page',
        invert: false
    },
    {
        id: 4,
        projectName: 'social media dashboard',
        description: 'A responsive landing page',
        icon: 'previewSocialMedia',
        linkUrl: 'https://eecvision.github.io/social-media-dashboards',
        invert: true
    },
    {
        id: 5,
        projectName: 'Job listing website',
        description: 'A responsive landing page',
        icon: 'previewJobListing',
        linkUrl: 'https://eecvision.github.io/job-listing',
        invert: false
    },
    {
        id: 6,
        projectName: 'url shortening api',
        description: 'A responsive landing page',
        icon: 'previewUrl',
        linkUrl: 'https://eecvision.github.io/url-shortening-api',
        invert: true
    },

]

const ProjectMenu =()=>{
    const [data] = useState(projectData)
    return(
        <div className="w-full bg-white rounded-xl shadow-lg border-2 border-gray-300 flex flex-col items-center justify-between mb-12 p-4 md:px-24 md:py-20 transform">
            {
                data.map(({id,...otherProps})=>(
                    <ProjectItem key={id} {...otherProps} />
                ))
            }
            <div className="inline bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg text-white text-xl font-medium py-3 px-16 text-center mt-12">View all projects</div>
        </div>    
    )
}


export default ProjectMenu;