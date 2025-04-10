// components/FlipCard.jsx

const FlipCard = ({ front, back, flipOn = 'hover', set_style = 'h-32' }) => {
    const flipClass =
        flipOn === 'hover'
            ? 'group-hover:[transform:rotateX(180deg)]'
            : flipOn === 'click'
            ? 'group:focus-within:[transform:rotateX(180deg)]'
            : flipOn === 'always'
            ? '[transform:rotateX(180deg)]'
            : ''

    return (
        <div
            className={`group w-full [perspective:1000px] cursor-pointer ${set_style}`}
        >
            <div
                className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${flipClass}`}
            >
                {/* Front */}
                <div className="absolute inset-0 h-full w-full  [backface-visibility:hidden]">
                    {front}
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full  [transform:rotateX(180deg)] [backface-visibility:hidden]">
                    {back}
                </div>
            </div>
        </div>
    )
}

export default FlipCard
