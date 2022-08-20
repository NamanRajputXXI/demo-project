import create from '../node_modules/zustand'
import {devtools, persist} from '../node_modules/zustand/middleware'

const skillStore = ((set : any ) =>({
   skills:[],
   addSkill:(skill : any)=>{
    set((state : any)=>({
        skills:[skill, ...state.skills]
    }))
   },
   removeSkill:(skillId : number)=>{
    set((state : any )=>({
        skills:state.skills.filter((s: any)=> s.id !== skillId)
    }))
   },
   toggleSkillStatus:(skillId : any)=>{
    set((state : any)=>({
        skills: state.skills.map((skill : any)=>skill.id === skillId ? {...skill, completed: !skill.completed}: skill)

    }))
   }
}))
const useSkillStore = create(
    devtools(
        persist(skillStore, {
            name :'skills',
        })
    )
)
export default useSkillStore;

  