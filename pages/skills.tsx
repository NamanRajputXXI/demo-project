import React from 'react'
import SkillForm from './SkillForm'
import SkillsList from './SkillList'

const skills = () => {
  return (
    <div>
        <h1 className="py-10 text-4xl text-center">Add the list of skills</h1>
      
        <SkillForm/>
        <SkillsList/>

    </div>
  )
}

export default skills