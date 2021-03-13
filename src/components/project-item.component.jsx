import React from 'react';
import previewEasyBank from '../assets/preview-easy-bank.jpg';
import previewJobListing from '../assets/preview-job-listing.jpg';
import previewManage from '../assets/preview-manage.jpg';
import previewRoom from '../assets/preview-room.jpg';
import previewSocialMedia from '../assets/preview-social.jpg';
import previewTodo from '../assets/preview-todo.jpg';
import previewKeepUp from '../assets/preview-KeepUp.JPG'
import previewNote from '../assets/preview-note.JPG';
import previewNuf from '../assets/preview-nuf.JPG';

const previews = {
  previewEasyBank: previewEasyBank,
  previewJobListing: previewJobListing,
  previewManage: previewManage,
  previewRoom: previewRoom,
  previewSocialMedia: previewSocialMedia,
  previewTodo: previewTodo,
  previewKeepUp: previewKeepUp,
  previewNote: previewNote,
  previewNuf: previewNuf
}

const ProjectItem = ({ icon, projectName, description, linkUrl, invert, tools, lesson, credit, quote, githubLink }) => (
  <div className={`w-full flex ${invert ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} justify-center items-center mt-2 md:mt-8`}>
    <div style={{height: '12rem'}} className="w-full max-w-sm overflow-hidden mb-4 md:mb-0 border border-gray-300">
      <a href={`${linkUrl}`} target="_blank" rel="noreferrer"><img className="w-full transition delay-100 duration-500 ease-in-out transform hover:scale-105" src={previews[icon]} alt="icon" /></a>
    </div>
    <div className="w-full  max-w-lg flex items-center justify-center md:px-4 mb-12 md:mb-0">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full text-center text-2xl font-bold text-blue-700 capitalize">{projectName}</div>
        <div className="w-full flex flex-col items-start justify-center">
          <div className="w-full mb-2 border-b border-gray-300">
            <div className="w-full text-blue-600 text-lg font-medium">Description </div>
            <div className="w-full text-base text-gray-700 pl-4">{description}</div>
          </div>
          <div className="w-full mb-2 border-b border-gray-300">
            <div className="w-full text-blue-600 text-lg font-medium">Tools </div>
            <div className="w-full text-base text-gray-700 pl-4">{tools}</div>
          </div>
          <div className="w-full mb-2 border-b border-gray-300">
            <div className="w-full text-blue-600 text-lg font-medium">Lessons </div>
            <div className="w-full text-base text-gray-700 pl-4">{lesson}</div>
          </div>
          <div className="w-full mb-2 border-b border-gray-300">
            <div className="w-full text-blue-600 text-lg font-medium">Credit </div>
            <div className="w-full text-base text-gray-700 pl-4">{credit}</div>
          </div>
          <div className="w-full mb-2 border-b border-gray-300">
            <div className="w-full text-blue-600 text-lg font-medium">myQuote </div>
            <div className="w-full text-base text-gray-700 pl-4">{quote}</div>
          </div>
          {
            githubLink
              ?
              <div className="w-full mb-2 border-b border-gray-300">
                <div className="w-full text-blue-600 text-lg font-medium">Github Repo </div>
                <a className="w-full text-base text-blue-500 pl-4 underline" href={githubLink} target="_blank" rel="noreferrer" >
                  link to github
                </a>
              </div>
              : null
          }
        </div>
      </div>
    </div>
  </div>
)

export default ProjectItem