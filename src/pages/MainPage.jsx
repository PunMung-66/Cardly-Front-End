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
      <div className='font-poppins bg-regal-sky-light min-h-screen flex flex-col w-full min-w-[320px] overflow-x-hidden'>
        {/* Responsive Navigation */}
            <nav className="fixed top-0 z-50 shadow-md p-7 bg-white w-full max-w-full">
            <div className='w-full flex justify-between items-center max-w-full'>
                <div className="pl-4 md:pl-6">
                <h1 className="text-4xl md:text-5xl font-bold text-regal-blue-darkest">CARDLY</h1>
                </div>

                

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center ml-auto mr-2 md:mr-4'>
                <div className="flex md:mx-10">
                    <h1
                    className='mx-1 sm:mx-2 md:mx-8 cursor-pointer text-regal-blue-darkest font-bold text-base lg:text-[1.7rem] whitespace-nowrap hover:text-regal-blue-dark no-underline'
                    onClick={() => scrollToSection(0)}
                    >
                    Home
                    </h1>
                    <h1
                    className='mx-1 sm:mx-2 md:mx-8 cursor-pointer text-regal-blue-darkest font-bold text-base lg:text-[1.7rem] whitespace-nowrap hover:text-regal-blue-dark no-underline'
                    onClick={() => scrollToSection(800)}
                    >
                    Features
                    </h1>
                    <h1
                    className='mx-1 sm:mx-2 md:mx-8 cursor-pointer text-regal-blue-darkest font-bold text-base lg:text-[1.7rem] whitespace-nowrap hover:text-regal-blue-dark no-underline'
                    onClick={() => scrollToSection(1600)}
                    >
                    Contact us
                    </h1>
                </div>
                </div>

                <div className='hidden lg:flex mr-4 md:mr-6'>
                <button
                    onClick={() => navigate('/auth/signup')}
                    className="bg-regal-blue-darkest text-white rounded-md px-3 py-1.5 lg:px-3 lg:py-3 font-bold text-base lg:text-[1.7rem] hover:bg-regal-blue-light transition duration-300 no-underline mx-1 lg:mx-2 whitespace-nowrap"
                >
                    Sign up
                </button>
                <button
                    onClick={() => navigate('/auth/login')}
                    className="bg-white text-regal-blue-darkest rounded-md px-3 py-1.5 lg:px-3 lg:py-3 font-bold text-base lg:text-[1.7rem] hover:bg-regal-blue-lightest transition duration-300 no-underline mx-1 lg:mx-2 whitespace-nowrap"
                >
                    Login
                </button>
                </div>
            </div>
    
            </nav>

        {/* Hero Section */}
        <div className='flex-grow overflow-x-hidden'>
          <div className='container mx-auto px-4 pt-10 max-w-[2000px]'>
            <div className="mt-[200px]">
              <h4 className="text-xl md:text-4xl text-center font-bold text-regal-blue-darkest break-words">
                Introducing platform for Learners
              </h4>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center mt-[90px] gap-8 w-full max-w-full'>
              <div className='w-full lg:w-1/2 text-center max-w-full'>
                <DotLottieReact
                  src="https://lottie.host/cb97fbfc-4a0e-4b56-a1b7-f48c61e037ad/lJEArDBrr9.lottie"
                  loop
                  autoplay
                  className="w-full max-w-xl mx-auto"
                />
              </div>

              <div className="hidden lg:block h-80 w-1 bg-regal-blue-darkest mx-4"></div>

              <div className='w-full lg:w-1/2 text-center max-w-full'>
                <h1 className='text-3xl md:text-6xl font-bold break-words'>Recap your knowledge</h1>
                <h2 className='text-xl md:text-4xl font-bold p-4 md:p-9 text-[#1e3a8a] break-words'>
                  Study smart not hard
                </h2>
                <button
                  onClick={() => navigate('/auth/signup')}
                  className="bg-regal-blue-darkest text-white rounded-md p-2 font-bold text-xl md:text-4xl w-48 md:w-[250px] md:h-30 hover:bg-regal-blue-light transition duration-300 no-underline"
                >
                  Get Start!
                </button>
              </div>
            </div>

            {/* Features Section */}
            <div className='mt-20 lg:mt-[250px] w-full max-w-full'>
              <h4 className="text-4xl md:text-7xl text-center font-bold text-black break-words">Feature</h4>
            </div>

            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-full px-4'>
              <div className='w-full max-w-xs flex flex-col items-center'>
                <GrowingCard className="w-full h-full flex flex-col">
                  <CardHeader sx={{ backgroundColor: '#ffeb9a' }}>Study</CardHeader>
                  <CardActionArea
                    onClick={() => navigate('/auth/signup')}
                    sx={{
                      "&:hover": { backgroundColor: "transparent" },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexGrow: 1,
                    }}
                  >
                    <div className=" w-full flex justify-center">
                      <img
                        src={studyimg}
                        alt="Study"
                        className="w-full h-full object-cover"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </CardActionArea>
                </GrowingCard>
              </div>

              <div className='w-full max-w-xs flex flex-col items-center'>
                <GrowingCard className="w-full h-full flex flex-col">
                  <CardHeader sx={{ backgroundColor: '#003677', color: 'white' }}>Flashcards</CardHeader>
                  <CardActionArea
                    onClick={() => navigate('/auth/signup')}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexGrow: 1,
                    }}
                  >
                    <div className="w-full flex justify-center">
                      <img
                        src={flashcardimg}
                        alt="Flashcards"
                        className="w-full h-full object-cover"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </CardActionArea>
                </GrowingCard>
              </div>

              <div className='w-full max-w-xs flex flex-col items-center'>
                <GrowingCard className="w-full h-full flex flex-col">
                  <CardHeader sx={{ backgroundColor: '#f9ae8f' }}>Practice Tests</CardHeader>
                  <CardActionArea
                    onClick={() => navigate('/auth/signup')}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexGrow: 1,
                    }}
                  >
                    <div className=" w-full flex justify-center">
                      <img
                        src={practiceimg}
                        alt="Practice Tests"
                        className="w-full h-full object-cover"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </CardActionArea>
                </GrowingCard>
              </div>

              <div className='w-full max-w-xs flex flex-col items-center'>
                <GrowingCard className="w-full h-full flex flex-col">
                  <CardHeader sx={{ backgroundColor: '#78c8bd' }}>Explore</CardHeader>
                  <CardActionArea
                    onClick={() => navigate('/auth/signup')}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexGrow: 1,
                    }}
                  >
                    <div className=" w-full flex justify-center">
                      <img
                        src={exploreimg}
                        alt="Explore"
                        className="w-full h-full object-cover"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </CardActionArea>
                </GrowingCard>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-[200px] bg-regal-blue-dark w-full max-w-full overflow-hidden">
          <div className='container mx-auto max-w-[2000px]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-16 w-full max-w-full'>
              <div className='text-center md:text-left'>
                <h1 className="text-4xl md:text-6xl md:ml-[100px] font-bold text-white break-words">CARDLY</h1>
              </div>

              <div className="text-white flex flex-col items-center space-y-3">
                <h2 className="text-4xl font-bold text-white break-words">Contact us</h2>
                <div className="text-center">
                  <h2 className="text-lg text-white break-words">(+99) 887766554</h2>
                  <h2 className="text-lg text-white break-words">cardly@gmail.com</h2>
                  <h2 className="text-lg text-white break-words">reggin@gmail.com</h2>
                </div>
              </div>

              <div className="text-white flex flex-col items-center  space-y-4">
                <h2 className="text-4xl font-bold text-white break-words">Social</h2>
                <div className="flex space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full p-2 pt-0 text-center '>
              <h1 className="text-lg text-white break-words">Copyright © 2025 | Reggin' Database Bros</h1>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
