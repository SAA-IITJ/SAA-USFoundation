import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cardData } from '../../data/cards';

const CardBox = ({ title, description, imagesrc, imagealt, href }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(href);
        window.scrollTo(0, 0);
    }
    return (
        <div class="card-container w-full max-w-md mx-auto min-h-full">
            <div class="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col min-h-full">
                <div onClick={handleClick} className='hover:cursor-pointer'>
                    <img class="w-full h-48 object-cover transition duration-10 hover:brightness-110"
                        src={imagesrc}
                        alt={imagealt} />
                </div>
                <div class="p-6 flex-grow">
                    <div class="mb-4">
                        <div onClick={handleClick}
                            class="font-medium text-xl sm:text-2xl hover:text-[#000080] transition duration-500 ease-in-out inline-block mb-2 hover:cursor-pointer">
                            {title}
                        </div>
                    </div>
                    <p class="text-gray-500 text-sm sm:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const Card = () => {
    const imagesrc = ["./assets/card1.jpg", "./assets/iitj12.JPG", "./assets/iitj15.png"];
    const imagealt = ["Sunset in the mountains", "IITJ Campus", "Fountain"];
    const href = ["/about#MissionandObjectives", "/whydonate", "/initiatives"];

    return (
        <div className='max-w-screen-xl mx-auto p-0 sm:p-10 md:p-16 font-suse'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {cardData.map((object, index) => {
                    return <CardBox title={object.title} description={object.description} href={href[index]} imagesrc={imagesrc[index]} imagealt={imagealt[index]} />
                })}
            </div>
        </div>
    );

}

export default Card;