import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const[extended,setExtended]=useState(false)
    const{onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between p-[20px] [15px] bg-[#f0f4f9]'>
        <div className='top'>
            <img onClick={()=>setExtended(prev=>!prev)} className='w-[25px] block ml-[10px] cursor-pointer' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className='new-chat mt-[50px] inline-flex items-center gap-[10px] p-[15px] [15px] bg-[#e6eaf1] rounded-[50px] text-[15px] text-gray-400 cursor-pointer'>
                <img className='w-[15px]' src={assets.plus_icon} alt="" />
                {extended ? <p>New Chat</p> : null}
            </div>
            {extended ? <div className='recent flex flex-col'>
                <p className='mt-[30px] mb-[20px]'>Recent</p>
                {prevPrompts.map((item,index)=>{
                    return (
                        <div onClick={()=>loadPrompt(item)} className='recent-entry flex items-start gap-[10px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                            <img className='w-[25px] ' src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)} ..</p>
                        </div>
                    )
                })}
                
            </div> : null}
        </div>
        <div className='bottom flex flex-col'>
            <div className='bottom-item1 flex items-start gap-[10px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img className='w-[25px]' src={assets.question_icon} alt="" />
                {extended ? <p>Help</p> : null}
            </div>
            <div className='bottom-item2 flex items-start gap-[10px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img className='w-[25px]' src={assets.history_icon} alt="" />
                {extended ? <p>Activity</p> : null}
            </div>
            <div className='bottom-item3 flex items-start gap-[10px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img className='w-[25px]' src={assets.setting_icon} alt="" />
                {extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar