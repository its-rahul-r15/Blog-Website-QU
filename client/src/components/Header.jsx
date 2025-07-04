import React, {useRef} from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext()

  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = ()=> {
    setInput('')
      inputRef.current.value = ''
    
  }
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
       <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary select-none
'>
            <p>New: AI feature integrated</p>
            <img src={assets.star_icon} className='w-2.5' alt="star-icon" />
        </div>
            
            <h1 className='text-5xl sm-text-6xl font-semibold sm-leading-16 text-gray-700 select-none
'>Your voice at <span className='text-primary'>Quantum</span> ,<br /> your blog.</h1>
            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm-text-xs text-gray-700 select-none
'>A space for students to share ideas, stories, and experiences.
From academics to everyday thoughts — let your voice be heard.</p>

     <form onSubmit={onSubmitHandler} className='flex justify-center max-w-lg max-sm-scale-75 mx-auto border border-gray-300 rounded bg-white overflow-hidden'>
        <input ref={inputRef} type="text" placeholder='Search for blog' required className='w-full pl-4 outline-none'/>
        <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Submit</button>
     </form>
       </div>

       <div className='text-center'>
        {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>
        }
       </div>
       <img src={assets.gradientBackground} alt="bacground" className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header