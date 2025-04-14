// components/FlipCard.jsx

const FlipCard = ({ front, back, flipOn = 'hover', type = 'slide' }) => {
    const flipClass =
        flipOn === 'hover'
            ? 'group-hover:[transform:rotateX(180deg)]'
            : flipOn === 'click'
            ? 'group:focus-within:[transform:rotateX(180deg)]'
            : flipOn === 'always'
            ? '[transform:rotateX(180deg)]'
            : ''

    const set_style = () => {
        if (type === 'list' || type === 'recent') {
            return 'h-32 w-full'
        } else if (type === 'slide') {
            return ' w-96 h-36'
        } else {
            return 'h-32 w-full'
        }
    }
    return (
        <div
            className={`group  [perspective:1000px] cursor-pointer ${set_style()}`}
        >
            <div
                className={`relative h-full  transition-all duration-500 [transform-style:preserve-3d] ${flipClass}`}
            >
                {/* Front */}
                <div className="absolute inset-0 h-full   [backface-visibility:hidden]">
                    {front}
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full   [transform:rotateX(180deg)] [backface-visibility:hidden]">
                    {back}
                </div>
            </div>
        </div>
    )
}

export default FlipCard
