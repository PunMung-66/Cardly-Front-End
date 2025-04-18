// components/RecentCard.jsx
import FlipCard from './FlipCard'
import getRandomColor from '../../functions/RandomColor'
import { useNavigate } from 'react-router-dom'

const RecentCard = ({
    record_id = 'r001',
    title = 'title',
    description = 'description',
    owner = 'Owner Name',
}) => {
    const navigate = useNavigate()
    const handleClicktoFlashCard = () => {
        navigate(`/dashboard/flashcard/${record_id}`)
    }
    const front = (
        <div className="bg-white h-full w-full rounded-xl p-4 flex flex-col gap-4  shadow-md">
            <div>
                <h3 className="text-lg font-semibold line-clamp-1">
                    {title} {record_id}
                </h3>
                <p className="text-gray-600 text-[14px] line-clamp-1">
                    {description}
                </p>
            </div>
            <div className="flex items-center w-full gap-2 mt-auto">
                <div
                    style={{ backgroundColor: getRandomColor() }}
                    className="border border-gray-200 text-sm rounded-full w-7 h-7 flex items-center justify-center text-white font-semibold"
                >
                    {owner[0].toUpperCase()}
                </div>
                <p className="text-sm truncate">{owner}</p>
            </div>
        </div>
    )

    const back = (
        <div
            className="bg-blue-900 text-white px-6 py-2 h-full w-full flex flex-col items-center justify-center text-center rounded-xl"
            onClick={handleClicktoFlashCard}
        >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-blue-100  line-clamp-2">{description}</p>
        </div>
    )

    return <FlipCard front={front} back={back} flipOn="hover" type="list" />
}

export default RecentCard
