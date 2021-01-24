import React from 'react';
import previewEasyBank from '../assets/preview-easy-bank.jpg';
import previewJobListing from '../assets/preview-job-listing.jpg';
import previewManage from '../assets/preview-manage.jpg';
import previewRoom from '../assets/preview-room.jpg';
import previewSocialMedia from '../assets/preview-social.jpg';
import previewTodo from '../assets/preview-todo.jpg';

const previews ={
    previewEasyBank: previewEasyBank,
    previewJobListing: previewJobListing,
    previewManage: previewManage,
    previewRoom: previewRoom,
    previewSocialMedia: previewSocialMedia,
    previewTodo: previewTodo
}

const ProjectItem =({icon, projectName, description, linkUrl, invert})=>(
    <div className={`w-full flex ${invert ? 'flex-col md:flex-row-reverse': 'flex-col md:flex-row'} justify-center md:justify-between items-center mt-4`}>
        <div className="w-full max-w-lg overflow-hidden mb-4 md:mb-0">
            <a href={`${linkUrl}`} target="_blank" rel="noreferrer"><img className="w-ful transition delay-100 duration-500 ease-in-out transform hover:scale-105" src={previews[icon]} alt="icon"/></a>
        </div>
        <div className="w-full h-full max-w-lg flex items-center justify-center mb-12 md:mb-0">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-blue-500 capitalize">{projectName}</div>
                <div className="text-base text-gray-500">{description}</div>
            </div>
        </div>
    </div>
)

export default ProjectItem