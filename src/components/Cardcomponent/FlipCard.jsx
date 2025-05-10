// components/FlipCard.jsx
import { useState } from 'react'

const FlipCard = ({ front, back, flipOn = 'hover', type = 'slide' }) => {
    const [flipped, setFlipped] = useState(false)
    const flipClass =
        flipOn === 'hover'
            ? 'group-hover:[transform:rotateX(180deg)]'
            : flipOn === 'click' && flipped
            ? '[transform:rotateY(180deg)]'
            : flipOn === 'always'
            ? '[transform:rotateX(180deg)]'
            : ''

    const set_style = () => {
        if (type === 'list' || type === 'recent') {
            return 'h-32 w-full'
        } else if (type === 'slide') {
            return ' w-96 h-36'
        } else if (type === 'play') {
            return ' w-full h-[35rem] sm:w-[40rem] '
        } else {
            return 'h-32 w-full'
        }
    }

    const handleClick = () => {
        if (flipOn === 'click') setFlipped((prev) => !prev)
    }

    return (
        <div
            className={`group  [perspective:1000px] cursor-pointer ${set_style()}`}
            onClick={handleClick}
        >
            <div
                className={`relative h-full  transition-all duration-500 [transform-style:preserve-3d] ${flipClass}`}
            >
                {/* Front */}
                <div className="absolute inset-0 h-full   [backface-visibility:hidden]">
                    {front}
                </div>

                {/* Back */}
                <div
                    className={`absolute inset-0 h-full   ${
                        flipOn == 'click'
                            ? '[transform:rotateY(180deg)]'
                            : '[transform:rotateX(180deg)]'
                    } [backface-visibility:hidden] ${set_style()}`}
                >
                    {back}
                </div>
            </div>
        </div>
    )
}

export default FlipCard
