import React, {useState} from 'react'
import useSkillStore from '../store'



const SkillForm = () => {
    const addSkill = useSkillStore((state)=>state.addSkill)
    const [skillTitle, setSkillTitle] = useState("")

    const handleSkillSubmit = ()=>{
        if(!skillTitle)return alert("please add a skill title")
        addSkill({
            id:Math.ceil(Math.random() * 100000),
            title:skillTitle
        })
        setSkillTitle('')
    }
  return (
    <div className='py-10 text-center form-container'>
        <input type="text" 
        value={skillTitle}
        onChange={(e)=>{
            setSkillTitle(e.target.value)
        }}
         />
         <button className='button'
         onClick={()=>{
            handleSkillSubmit();
         }}>
            Add Skills
         </button>
    </div>
  )
}

export default SkillForm