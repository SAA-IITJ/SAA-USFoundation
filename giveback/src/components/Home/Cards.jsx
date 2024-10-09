import React from 'react';

const Card = () => {        
    return (
        <div className='max-w-screen-xl mx-auto p-0 sm:p-10 md:p-16'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                {/* CARD 1 */}
                <div class="card-container w-full max-w-md mx-auto">
                <div class="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                    <a href="/about" class="block relative">
                        <img class="w-full h-48 object-cover"
                            src="./assets/card1.jpg"
                            alt="Sunset in the mountains" />
                        <div class="absolute inset-0 bg-gray-900 opacity-25 transition duration-300 hover:opacity-0"></div>
                    </a>
                    <div class="p-6 flex-grow">
                        <div class="mb-4">
                            <a href="/about"
                                class="font-medium text-xl sm:text-2xl hover:text-primary transition duration-500 ease-in-out inline-block mb-2">
                                Our Mission
                            </a>
                        </div>
                        <p class="text-gray-500 text-sm sm:text-base">
                            The Indian Institute of Technology Jodhpur Foundation (henceforth referred to as "Foundation" / "IIT Jodhpur Foundation" / "IITJ Foundation" / "IITJF") was established "to mobilize alumni, enhance IIT Jodhpur branding, provide alumni services and raise funds for the betterment of Indian Institute of Technology Jodhpur.
                        </p>
                    </div>
                </div>
                </div>

                {/* CARD 2 */}
                <div class="card-container w-full max-w-md mx-auto">
                <div class="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                    <a href="/whydonate" class="block relative">
                        <img class="w-full h-48 object-cover"
                            src="./assets/card.jpg"
                            alt="Sunset in the mountains" />
                        <div class="absolute inset-0 bg-gray-900 opacity-25 transition duration-300 hover:opacity-0"></div>
                    </a>
                    <div class="p-6 flex-grow">
                        <div class="mb-4">
                            <a href="/whydonate"
                                class="font-medium text-xl sm:text-2xl hover:text-primary transition duration-500 ease-in-out inline-block mb-2">
                                Why Support IITJ
                            </a>
                        </div>
                        <p class="text-gray-500 text-sm sm:text-base">
                        Your every gift to the institute brings a positive change and creates an impact. At IITJ brilliant minds converge to produce path-breaking research and forge a bright future. With your generosity, you become a partner in their success. Every gift matters. Explore a way to support your alma mater in a way that works for you.
                        </p>
                    </div>
                </div>
                </div>

                {/* CARD 3 */}
                <div class="card-container w-full max-w-md mx-auto">
                <div class="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                    <a href="/initiatives" class="block relative">
                        <img class="w-full h-48 object-cover"
                            src="./assets/card2.jpg"
                            alt="Sunset in the mountains" />
                        <div class="absolute inset-0 bg-gray-900 opacity-25 transition duration-300 hover:opacity-0"></div>
                    </a>
                    <div class="p-6 flex-grow">
                        <div class="mb-4">
                            <a href="/initiatives"
                                class="font-medium text-xl sm:text-2xl hover:text-primary transition duration-500 ease-in-out inline-block mb-2">
                                Initiatives
                            </a>
                        </div>
                        <p class="text-gray-500 text-sm sm:text-base">
                        The Indian Institute of Technology Jodhpur Alumni Fund, helps to shape IITJ's today and tomorrow by providing critical funds to meet the most pressing needs of the Institute and its students. Your support helps the Institute respond to unexpected needs and ensures the Institute community remains diverse and at the forefront of higher education.
                        </p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Card;
