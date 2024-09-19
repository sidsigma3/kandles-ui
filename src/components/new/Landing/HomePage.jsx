import React from 'react'
import './HomePage.css'


const Landing = () => {
  return (
    <div className='home-page'>
        <div  className='navbar'>
            <div className='left-logo'>
                <img></img>
            </div>

            <div className='middle'>
                <div>
                    <button>
                        Features
                    </button>
                </div>

                <div>
                    <button>
                        Market
                    </button>
                </div>

                <div>
                    <button>
                        About us 
                    </button>
                </div>

                <div>
                    <button>
                                Analytics
                    </button>
                </div>

                <div>
                    <button>
                            Pricing
                    </button>
                </div>
               
                
            </div>

            <div className='right-buttons'>

                    <div>
                        <button>
                                Login
                        </button>
                    </div>

                    <div>
                        <button>
                                Sign Up
                        </button>
                    </div>

            </div>





        </div>


    </div>
  )
}

export default Landing