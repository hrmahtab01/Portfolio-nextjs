import React from 'react'
import ProfileOverview from './Components/ProfileOverview'
import Project from './Components/Project'
import Skills from './Components/Skills'
import WorkExperience from './Components/WorkExperience'


const page = () => {
  return (
    <>
      <ProfileOverview/>
      <Project/>
      <Skills/>
      <WorkExperience/>
    </>
  )
}

export default page
