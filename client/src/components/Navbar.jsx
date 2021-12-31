import React,{useState,useEffect} from 'react'
import {  Transition } from '@headlessui/react'
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Searchbar from './Searchbar';
import { Link,useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionType from '../constants/actionTypes';
import decode from 'jwt-decode';


const useStyles = makeStyles({
  profile: {
    margin: '60px', 
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  purple:{
    backgroundColor: 'blue'
  }
  
})
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

   const dispatch = useDispatch();
    const location = useLocation();
   const history = useHistory();

    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

     const logout = () => {
       dispatch({ type: actionType.LOGOUT });
  
       history.push('/');
  
       setUser(null);
     };
  
     useEffect(() => {
        const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
       setUser(JSON.parse(localStorage.getItem('profile')));
     }, [location]);


    return (
        <div>
        <nav className="bg-gray-800 position-sticky ">
          <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                    
                  />
                  
                </div>
                <div className="hidden md:block">
                  <div className="  ml-40 flex items-baseline space-x-14">
                   
                    <a
                      href="#"
                      className=" hover:bg-gray-700 text-white px-3 py-2  rounded-md text-2xl font-medium"
                    >
                      <Link to="/">
                           HOME
                      </Link>
                    </a>
  
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                    >
                      ABOUT
                    </a>
  
                    {user?. result ? (
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                     <Link to="/list">
                           LIST
                      </Link>
                  </div>
                   ) : (
                     ''
                   )
                 }
  
                    {user?.result ? (
                     <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                        <Link to="/write">
                              WRITE
                          </Link>
                      </div>
                    ) : (
                      ''
                    )
            }
  

                    <Searchbar />

                        {
                          user?.result ? (
                              <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
                                <Link to="/settings">
                                  {user?.result.name.charAt(0)}
                                </Link>
                                  </Avatar>
                                <button className="  mb-4 mr-52   bg-pink-600 border border-transparent rounded-md px-3 py-1 flex items-center justify-center text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"onClick={logout} >                            
                                     LOGOUT                                
                             </button>
                              </div>
                          ) : (
                       
                            <button className="mb-8  bg-indigo-600 border border-transparent rounded-md px-3 py-1 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >                            
                                <Link to="/auth">
                                     REGISTER
                                </Link>  
                             </button>
                          )
                        }
                  </div>
                </div>
              </div>
              
              <div className="-mr-2 flex md:hidden">
              
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  
                >
                 
                  <span className="sr-only">Open main menu</span>
                
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    
                  )}
                  
                </button>
                
              </div>
 
            </div>
            
            
          </div>
          
          
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <Link to="/">
                           HOME
                      </Link>
                  </a>
  
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    ABOUT
                  </a>
  
                   {user?. result ? (
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                     <Link to="/list">
                           LIST
                      </Link>
                  </div>
                   ) : (
                     ''
                   )
                 }
  
                  {user?.result ? (
                     <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                        <Link to="/write">
                              WRITE
                          </Link>
                      </div>
                    ) : (
                      ''
                    )
            }
  
                 

                  {
                    user?.result ? (
                          <div className={classes.profile}>
                          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                          <button className=" mr-52 mt-4  bg-pink-600 border border-transparent rounded-md px-3 py-1 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={logout} >                            
                               LOGOUT                                
                          </button>
                            </div>
                          ) : (
                       
                            <button className="mb-8  bg-indigo-600 border border-transparent rounded-md px-3 py-1 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >                            
                                <Link to="/auth">
                                     REGISTER
                                </Link>  
                             </button>
                          )
                        }

                </div>
              </div>
            )}
          </Transition>
          
        </nav>
        
      </div>
    )
}

export default Navbar






