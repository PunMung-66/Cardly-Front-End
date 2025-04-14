// Container.jsx
import React from 'react'
import Subheader from './Subheader'
import ContainerContext from '../Context/ContainerContext'

export default function Container({ children, icon, icon_color, title }) {
    const value = { icon, icon_color } // props you want to pass to children

    return (
        <ContainerContext.Provider value={value}>
            <div className="w-full flex flex-col">
                <div className="flex flex-col items-center justify-center gap-5">
                    <Subheader
                        title={title}
                        icon={icon}
                        icon_color={icon_color}
                    />
                    <div className="flex flex-col items-center w-full">
                        {children}
                    </div>
                </div>
            </div>
        </ContainerContext.Provider>
    )
}
