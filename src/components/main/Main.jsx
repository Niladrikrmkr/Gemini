import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)



  return (
    <div className='main flex-1 m-h-[100vh] pb-[15vh] relative'>
      <div className='nav flex items-center justify-between text-[22px] p-[20px] text-[#585858]'>
        <p>Gemini</p>
        <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
      </div>
      <div className='main-container max-w-[900px] m-auto'>

        {!showResult
        ?<>
          <div className='greet m-[30px] [0px] text-[56px] text-[#c4c7c5] font-medium'>
          <p><span className='bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-transparent'>Hello, Dev.</span></p>
          <p className='animate-pulse'>How can I help you today?</p>
        </div>
        <div className='cards grid grid-flow-col gap-[15px] ml-[30px]'>
          <div className='card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-[17px]'>Suggest beautiful places to see on an upcoming road trip</p>
            <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.compass_icon} alt="" />
          </div>
          <div className='card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-[17px]'>Briefly summarize the concept: urban planning</p>
            <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.bulb_icon} alt="" />
          </div>
          <div className='card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-[17px]'>Brainstrom team bonding activities for our work retreat</p>
            <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.message_icon} alt="" />
          </div>
          <div className='card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
            <p className='text-[#585858] text-[17px]'>Improve the readability of the following code</p>
            <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        :<div className='result p-[0px] [5%] max-h-[65vh] overflow-y-scroll no-scrollbar'>
          <div className='result-tile m-[40px] [0px] flex items-center gap-[20px] ml-[30px]'>
            <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className='result-data flex items-start gap-[20px] ml-[30px]'>
            <img className='w-[40px] rounded-[50%]' src={assets.gemini_icon} alt="" />
            {loading
            ?<div className='loader w-full flex flex-col gap-[10px]'>
              <hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[800px] [50px] h-[20px] animate-pulse' />
              <hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[800px] [50px] h-[20px] animate-pulse' />
              <hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[800px] [50px] h-[20px] animate-pulse' />
            </div>
            :<p className='text-[17px] font-normal leading-loose' dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            
          </div>
        </div>
        }

        
        <div className='main-bottom absolute bottom-0 w-full max-w-[900px] p-[0px] [20px] m-auto ml-[20px]'>
          <div className='search-box flex items-center justify-between gap-[20px] bg-[#f0f4f9] p-[10px] [20px] rounded-[50px]'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} className='flex-1 bg-transparent border-none outline-none p-[8px] text-[18px]' type="text" placeholder='Enter a promt here'/>
            <div className='flex items-center gap-[15px]'>
              <img className='w-[24px] cursor-pointer' src={assets.gallery_icon} alt="" />
              <img className='w-[24px] cursor-pointer' src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent()} className='w-[24px] cursor-pointer' src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottom-info text-[15px] m-[15px] [auto] text-center font-light'>Gemini may display inaccurate info, including about people, so double-check its responses.</p>
        </div>
      </div>
    </div>
  )
}

export default Main