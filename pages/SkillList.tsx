import React from 'react'
import useSkillStore from './store'

const SkillsList = () => {
    const { skills, removeSkill,  toggleSkillStatus} = useSkillStore(
        (state : any)=>({
            skills: state.skills,
            removeSkill: state.removeSkill,
            toggleSkillStatus: state.toggleSkillStatus
        })
    )
  return (
    <div className='text-center'>
    <ul>
        {skills.map((skill: any, i  : any)=>{
            return(
                    <li className="skill-item" key={i}>
                        <span>
                            <input
                            checked={skill.completed}
                            placeholder="enter skill"
                            className='input'
                             type="checkbox"
                             
                            onChange={(e)=>{
                                toggleSkillStatus(skill.id)

                            }}
                             
                             />
                        </span>
                        <span>{skill?.title}</span>
                        <button className='button'
                        onClick={()=>{
                            removeSkill(skill.id)
                        }}
                        >Delete</button>
                    </li>

            )
        })}
    </ul>
    </div>
  )
}

export default SkillsList