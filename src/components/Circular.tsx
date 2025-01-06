import React, { useState } from "react";

const Circular = () => {
    const items = [
        { id: 0, label: "1" },
        { id: 1, label: "2" },
        { id: 2, label: "3" },
        { id: 3, label: "4" },
        { id: 4, label: "5" },
        { id: 5, label: "6" },
    ];

    const [activeIndex, setActiveIndex] = useState<number>(0); // Phần tử đang được chọn
    const [rotation, setRotation] = useState<number>(0); // Góc xoay hiện tại

    const handleClick = (index: number) => {
        const totalItems = items.length; // Tổng số phần tử
        const diff = index - activeIndex; // Khoảng cách giữa nút được bấm và nút hiện tại

        // Tính toán chiều xoay ngắn nhất (giới hạn -90° đến 90°)
        const shortestRotation =
            diff > 0
                ? diff <= totalItems / 2
                    ? diff
                    : diff - totalItems
                : -diff <= totalItems / 2
                    ? diff
                    : diff + totalItems;

        // Cập nhật góc xoay
        const newRotation = rotation - shortestRotation * (180 / totalItems);

        // Giới hạn góc xoay trong khoảng -90° đến 90°
        if (newRotation > 90) {
            setRotation(newRotation - 180);
        } else if (newRotation < -90) {
            setRotation(newRotation + 180);
        } else {
            setRotation(newRotation);
        }

        // Cập nhật nút đang được chọn
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            {/* Vòng tròn carousel */}
            <div
                className="relative w-[600px] h-[600px] rounded-full border-[5px] border-white flex items-center justify-center"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.5s ease-in-out",
                }}
            >
                {items.map((item, index) => {
                    const angle = -90 + (180 / (items.length - 1)) * index; // Góc từ -90° đến 90°
                    return (
                        <div
                            key={item.id}
                            className="absolute flex flex-col items-center justify-center"
                            style={{
                                transform: `rotate(${angle}deg) translate(195px)`,
                            }}
                        >
                            {/* Nút tròn */}
                            <div
                                className={`w-[40px] h-[40px] rounded-full border-[5px] bg-white  flex items-center justify-center ${index === activeIndex ? "border-red-300 " : "border-gray-300"
                                    }`}
                                onClick={() => handleClick(index)}
                            >
                                <span className="text-sm font-semibold text-center">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Hiển thị phần tử đang được chọn */}
            <div className="mt-6 text-xl font-bold text-gray-700">
                Đang chọn: {items[activeIndex].label}
            </div>
        </div>
    );
};

export default Circular;
