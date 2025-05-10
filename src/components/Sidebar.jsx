import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../helper/supabaseClient'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        navigate('/auth/login')
    }

    const Menus_top = [
        {
            title: 'Dashboard',
            icon: 'fa-duotone fa-solid fa-table-columns',
            path: '/dashboard',
        },
        {
            title: 'Flash Cards',
            icon: 'fa-duotone fa-regular fa-cards-blank',
            path: '/dashboard/myflashcards',
        },
        {
            title: 'Bookmark',
            icon: 'fa-solid fa-book-bookmark',
            path: '/dashboard/mybookmarks',
        },
        {
            title: 'Add',
            icon: 'fa-regular fa-square-plus',
            path: '/dashboard/addcontent',
        },
    ]
    const Menus_down = [
        {
            title: 'Profile',
            icon: 'fa-solid fa-circle-user',
            path: '/dashboard/profile',
        },
        {
            title: 'Logout',
            icon: 'fa-solid fa-right-from-bracket',
            path: '/',
        },
    ]

    const navigate = useNavigate()
    const handleNavtoPath = (path) => {
        navigate(path)
    }

    return (
        <>
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={`${
                    isOpen
                        ? 'w-[13rem] lg:w-60 left-0'
                        : ' -left-[242px] xl:left-0 md:w-20'
                } duration-500 md:duration-300 p-5 pt-8 border-r-2 border-gray-200 bg-white h-full lg:h-screen gap-y-10 fixed z-50 flex flex-col  2xl:sticky top-0`}
            >
                <div className="flex items-center gap-x-4 border-b-2 border-gray-200 pb-4">
                    <i
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${
                            isOpen && ' -rotate-45'
                        } fa-solid fa-card-diamond  p-2 transition-all duration-300 cursor-pointer bg-white text-2xl`}
                    ></i>
                    <h2
                        className={`${
                            !isOpen && 'scale-0'
                        } absolute left-16 origin-left duration-300 font-bold `}
                    >
                        CARDLY
                    </h2>
                </div>

                {/* Option Section */}
                {/* Menu 1 */}
                <div className="flex flex-col gap-4 pb-4 border-b-2 border-gray-200 flex-grow ">
                    {Menus_top.map((menu, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 cursor-pointer text-center p-2 hover:bg-gray-100 hover:font-semibold rounded-md relative"
                            onClick={() => handleNavtoPath(menu.path)}
                        >
                            <i className={`${menu.icon} text-xl`}></i>
                            <div
                                className={`${
                                    !isOpen && 'scale-0'
                                } absolute left-12 origin-left duration-300 md:text-sm 2xl:text-base`}
                            >
                                {menu.title}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Menu 2 */}
                <div className=" flex flex-col gap-4 ">
                    {Menus_down.map((menu, index) => (
                        <div
                            key={index}
                            className=" flex items-center gap-4 cursor-pointer text-center p-2 hover:bg-gray-100 hover:font-semibold rounded-md relative"
                            onClick={() => {
                                handleNavtoPath(menu.path)
                                if (menu.title === 'Logout') {
                                    signOut()
                                }
                            }}
                        >
                            <i className={`${menu.icon} text-xl`}></i>
                            <div
                                className={`${
                                    !isOpen && 'md:scale-0'
                                } md:absolute left-12 origin-left duration-300 `}
                            >
                                {menu.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Side bar tockle */}

            <i
                className={` ${
                    isOpen && ' -rotate-45 '
                } z-30 duration-300 shadow-md fixed top-5 right-3 sm:right-6   fa-solid fa-card-diamond text-3xl px-5 py-3 rounded-full border border-gray-200 cursor-pointer xl:hidden bg-white`}
                onClick={() => setIsOpen(!isOpen)}
            ></i>
        </>
    )
}
