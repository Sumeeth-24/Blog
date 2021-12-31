import React from 'react'

const Header = () => {
    return (
        <div className=' mt-6'>
           <div className='flex-col items-center text-center mr-60 '>
               <span className='absolute mt-0 font-medium text-7xl font-Oswald'>BLOG</span>
            </div>
                <img className='w-full h-96 mt-0 object-cover'
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                />
        </div>
    )
}

export default Header;
