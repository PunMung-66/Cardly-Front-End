import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CardActionArea from '@mui/material/CardActionArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {GrowingCard,CardHeader} from '../theme/Card';
import exploreimg from '../assets/image/Explore.png'
import practiceimg from '../assets/image/Practice test.png'
import studyimg from '../assets/image/Study.png'
import flashcardimg from '../assets/image/Flashcard.png'
import { faFacebook, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'


const scrollToSection = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  };

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <>
        <div className='font-poppins bg-regal-sky-light'>
            <nav className="sticky top-0 z-50 shadow-md p-4 relative bg-white" >

                <div className=' flex justify-between items-center '> 

                    <div >
                        <h1 className="text-[40px] text-Left font-bold pl-7 text-regal-blue-darkest">CARDLY</h1>
                    </div>

                    <div className='flex ml-[900px] '>
                    <h1 className='mx-8 cursor-pointer text-regal-blue-darkest font-bold text-[1.2rem] hover:text-regal-blue-dark no-underline' onClick={() => scrollToSection('0')}>Home</h1>
                    <h1 className='mx-8 cursor-pointer text-regal-blue-darkest font-bold text-[1.2rem] hover:text-regal-blue-dark no-underline' onClick={() => scrollToSection('800')}>Features</h1>
                    <h1 className='mx-8 cursor-pointer text-regal-blue-darkest font-bold text-[1.2rem] hover:text-regal-blue-dark no-underline' onClick={() => scrollToSection('1600')}>Contact us</h1>
                    </div>   
                    
                    <div className='flex mr-[30px]'>
                        <button  onClick={() => navigate('/auth/signup')}
                        className="bg-regal-blue-darkest text-white rounded-[5px] p-2 font-bold text-[1.2rem] hover:bg-regal-blue-light transition duration-300 no-underline mx-5">Sign up</button>

                        <button  onClick={() => navigate('/auth/login')}
                        className="bg-white text-regal-blue-darkest rounded-[5px] p-2 font-bold text-[1.2rem] hover:bg-regal-blue-lightest transition duration-300 no-underline mx-5">Login</button>   
                
                    </div>
                
                </div>
                    
            </nav>

            <div className='pt-10  '>
                
                <div  className='mt-[50px]'>
                    <h4 className="text-[27px] text-center font-bold text-regal-blue-darkest">Introducing platform for Learners</h4>
                </div>
                
                <div className='flex  justify-between mt-[100px] mx-auto max-w-7xl  mr-[300px] '> 
                    <div className=' text-center '> {/*left */}
                    
                    <DotLottieReact
                        src="https://lottie.host/cb97fbfc-4a0e-4b56-a1b7-f48c61e037ad/lJEArDBrr9.lottie"
                        loop
                        autoplay
                        className="w-[600px] h-[500px]"
                    />
                     </div>

                     
                    <div className="h-[500px] w-[6px] bg-regal-blue-darkest "></div>
                        
                     
                      <div className=' text-center  pt-[170px] '> {/*right */}
                        <h1 className='text-[50px] font-bold'>Recap your knowledge</h1>
                        <h2 className='text-[30px] font-bold p-9 text-[#1e3a8a]'>Study smart not hard</h2>
                        <button  onClick={() => navigate('/auth/signup')}
                        className="bg-regal-blue-darkest text-white rounded-[5px] p-2 font-bold text-[2rem] w-60 hover:bg-regal-blue-light transition duration-300 no-underline mx-5">Get Start!</button>
                     </div>

                </div>

                <div className='mt-[210px] '>
                    <h4 className="text-[70px] text-center font-bold text-regal-blue-darkest">Feature</h4>
                </div>

                <div className='mt-[80px] flex  justify-center  '>

                    <div className='mx-4 '>
                    <GrowingCard>
                        
                            <CardHeader sx={{ backgroundColor: '#ffeb9a ' }}>
                            Study
                            </CardHeader>

                            <CardActionArea onClick={() => navigate('/auth/signup')}  sx={{
    "&:hover": {
      backgroundColor: "transparent"
    }
  }}>

                            <img 
                                        src={studyimg} 
                                        alt="Cardly Logo" 
                                        style={{ height: '100%', width: '100%' }}
                                    />
                            </CardActionArea>

                      </GrowingCard>
                    </div>
                    

                    <div className=' mx-4'>
                    <GrowingCard>

                            <CardHeader sx={{ backgroundColor: '#003677', color:'white'}}>
                                Flashcards
                            </CardHeader>

                                <CardActionArea onClick={() => navigate('/auth/signup')}>

                                <img 
                                        src={flashcardimg} 
                                        alt="Cardly Logo" 
                                        style={{ height: '100%', width: '100%' }}
                                    />

                                </CardActionArea>

                    </GrowingCard>
                    </div>
                          
                    <div className='mx-4'>
                    <GrowingCard>

                            <CardHeader sx={{ backgroundColor: '#f9ae8f' }}>      
                                Practice Tests
                            </CardHeader>

                                <CardActionArea onClick={() => navigate('/auth/signup')}>

                                

                                <img 
                                        src={practiceimg} 
                                        alt="Cardly Logo" 
                                        style={{ height: '100%', width: '100%' }}
                                    />

                                </CardActionArea>

                    </GrowingCard>  
                    </div>
                        

                    <div className='mx-4'> 
                    <GrowingCard>

                        <CardHeader sx={{ backgroundColor: '#78c8bd' }}>
                            Explore
                        </CardHeader>

                            <CardActionArea onClick={() => navigate('/auth/signup')}>

                            <img 
                                    src={exploreimg} 
                                    alt="Cardly Logo" 
                                    style={{ height: '100%', width: '100%' }}
                                />

                            </CardActionArea>

                        </GrowingCard>  
                    </div>
                        
                        
                </div>

            
                
                
            </div>


            <footer className="mt-[180px] bg-regal-blue-dark w-full">
                    
                    <div className='flex w-full p-[80px] justify-between items-center'>
                        <div className='ml-[20px]'> 
                            <h1 className="text-[70px] font-bold text-white">CARDLY</h1>
                        </div>

                        <div className="text-white mr-[60px] flex flex-col items-center space-y-3">
                        <h2 className="text-[30px] font-bold text-white">Contact us</h2>
                            <div>
                            <h2 className="text-[20px] text-white">  (+99) 887766554</h2>
                            <h2 className="text-[20px]  text-white">cardly@gmail.com</h2>
                            <h2 className="text-[20px]  text-white">reggin@gmail.com</h2>
                            </div>
                        </div>
                        
                        <div className="text-white mr-[60px]  flex flex-col items-center space-y-4">
                            <h2 className="text-[30px] font-bold text-white">Social</h2>
                            <div className="flex flex-row space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                                <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                            </a>

                            <a href="https://www.youtube.com/watch?v=lCcXjR7t9R4&ab_channel=Genierock" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                                <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
                            </a>

                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                                <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
                            </a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className='flex w-full p-2 pt-0 justify-center items-center '>
                        <div> 
                            <h1 className="text-[20px]  text-white">Copyright © 2025 | Reggin' Database Bros</h1>
                        </div>
                    </div>
                </footer>

            

            
        </div>   
         
        </>
    )
}
