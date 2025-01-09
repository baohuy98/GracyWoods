import React, { useState } from "react"

const CircularTimeline = () => {
    const items = [
        { id: 0, label: "3311 R.G.E" },
        { id: 1, label: "3312 R.G.E" },
        { id: 2, label: "3313 R.G.E" },
        { id: 3, label: "3314 R.G.E" },
        { id: 4, label: "3315 R.G.E" },
        { id: 5, label: "3316 R.G.E" },
    ];

    const [activeIndex, setActiveIndex] = useState<number>(2)
    const [rotation, setRotation] = useState<number>(0)

    const handleClick = (index: number) => {
        const anglePerItem = 180 / (items.length - 1)
        const currentAngle = -90 + anglePerItem * index
        let newRotation = -currentAngle

        if (newRotation > 180) newRotation -= 360
        if (newRotation < -180) newRotation += 360

        setRotation(newRotation)
        setActiveIndex(index)
    }




    return (
        <div className="flex flex-col items-center justify-center m">
            <div className="relative">
                <div
                    className="relative w-[600px] h-[600px] z-2 rounded-full border-[8px] border-white flex items-center justify-center"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: "transform 0.5s ease",
                    }}
                >
                    {items.map((item, index) => {
                        const angle = -90 + (180 / (items.length - 1)) * index
                        const shouldShowLabel = index === activeIndex - 1 ||
                            index === activeIndex ||
                            index === activeIndex + 1
                        return (
                            <div
                                key={item.id}
                                className="absolute flex flex-col items-center"
                                style={{
                                    transform: `rotate(${angle}deg) translate(295px)`,
                                }}
                            >

                                <button
                                    onClick={() => handleClick(index)}
                                    className={`bg-white z-1 rounded-full transition-all duration-300 
                                        ${index === activeIndex
                                            ? "w-[25px] h-[25px] ring-4 ring-red-400"
                                            : "w-[20px] h-[20px] ring-4 ring-white"
                                        }`}
                                />

                                {shouldShowLabel && (
                                    <div
                                        className="absolute  whitespace-nowrap text-white transition-all duration-300 "
                                        style={{
                                            transform: `rotate(${-rotation - angle}deg) translateX(-100px)`,
                                            transition: "transform 0.5s ease, opacity 0.3s ease",
                                            opacity: index === activeIndex ? 1 : 0.5,
                                            fontSize: index === activeIndex ? '1.25rem' : '1rem',
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                )}
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default CircularTimeline
