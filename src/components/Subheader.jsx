import React from 'react'

export default function Subheader({
    title = 'Section Title',
    icon = 'fa-solid fa-card-diamond',
    icon_color = 'text-regal-blue',
}) {
    return (
        <h2 className="z-20 text-lg font-bold text-regal-blue p-3 border bg-white shadow-[-5px_5px_0px_0px_#7cc8d2] self-start ml-[10px]">
            <i className={`mr-2 ${icon + ' ' + icon_color}`}></i>
            {title}
        </h2>
    )
}
