import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import DonationCards from './Initiatives/DonationCards';



const cardsData = [
    {
      title: "Season of Giving",
      content: "Season of Giving is a cherished tradition of IIT Jodhpur and gives us an opportunity to come together as a community and make a meaningful impact on the lives of students, faculty, and the community of the institute. We encourage our alumni, donors, and well-wishers to contribute to various causes and projects of the institute. We invite you to be a part of the Season of Giving campaign and make a significant impact on 's growth. With every contribution, you become a partner in the brighter future of your alma mater.",
      imageSrc: "https://placehold.co/600x400",
      buttons: ["Debit/Credit Card/Online Banking", "Cheque / Draft", "Stock Transfer"]
    },
    {
      title: "Class of 1974 Legacy Fund",
      content: "IIT Jodhpur has experienced remarkable expansion in recent times, particularly in its student enrollment. Since 1965, the undergraduate population has surged from 1,200 to over 5000, while postgraduate numbers.",
      imageSrc: "https://placehold.co/600x400",
      buttons: ["Debit/Credit Card/Online Banking", "Cheque / Draft", "Stock Transfer"]
    },
    {
      title: "Class Fund 1998",
      content: "The Class of 1998 has initiated a campaign to contribute to IIT Jodhpur's ongoing growth and its visionary plans for the future. Their objective is to raise funds to support the critical needs of the institute",
      imageSrc: "https://placehold.co/600x400",
      buttons: ["Debit/Credit Card/Online Banking", "Cheque / Draft", "Stock Transfer"]
    },
    {
      title: "V Srinivasan Memorial Fund",
      content: "Venkateswaran Srinivasan, an exceptional individual whose brilliance and dedication left an indelible mark on the realms of education and technology, departed from us in Chennai on the 24th of November 2023. An esteemed alumnus of IIT Jodhpur's Electrical Engineering Department (Class of 1990), Mr. Srinivasan's illustrious career spanned diverse fields. His tenure as a Physics Faculty at Rani Institute of Scholastic Education in Chennai showcased his expertise in derivatives, indices, and options trading, a testament to his wealth of experience as a self-employed professional since August 2019.",
      imageSrc: "https://placehold.co/600x400",
      buttons: ["Debit/Credit Card/Online Banking", "Cheque / Draft", "Stock Transfer"]
    },
    {
        title: "Class Fund 1998",
        content: "The Class of 1998 has initiated a campaign to contribute to IIT Jodhpur's ongoing growth and its visionary plans for the future. Their objective is to raise funds to support the critical needs of the institute",
        imageSrc: "https://placehold.co/600x400",
        buttons: ["Debit/Credit Card/Online Banking", "Cheque / Draft", "Stock Transfer"]
      },
      {
        title: "V Srinivasan Memorial Fund",
        content: "Venkateswaran Srinivasan, an exceptional individual whose brilliance and dedication left an indelible mark on the realms of education and technology, departed from us in Chennai on the 24th of November 2023. An esteemed alumnus of IIT Jodhpur's Electrical Engineering Department (Class of 1990), Mr. Srinivasan's illustrious career spanned diverse fields. His tenure as a Physics Faculty at Rani Institute of Scholastic Education in Chennai showcased his expertise in derivatives, indices, and options trading, a testament to his wealth of experience as a self-employed professional since August 2019.",
        imageSrc: "https://placehold.co/600x400",
        buttons: ["Debit/Credit Card/Online Banking", "Cheque / Draft", "Stock Transfer"]
      }
  ];
// MenuItem component
const MenuItem = ({ text, isActive, onClick }) => (


    
  <div 
    className={`flex items-center p-2 cursor-pointer ${isActive ? 'bg-gray-200 border-2 border-l-blue-600 my-1 ' : 'hover:bg-gray-100'}`}
    onClick={onClick}
  >
   <span className='text-justify mr-2 font-suse'>{text}</span>
    <ChevronRight className="ml-auto text-gray-400" size={16} />
  </div>
);

// Section components (These would represent each campaign)
const GangwalSchool = () => (
    <DonationCards cardsData = {cardsData.slice(0,4)}/>
);

const AcademicInitiatives = () => (
    <DonationCards cardsData = {cardsData.slice(0, 3)}/>
);

const FacultyChairs = () => (
    <DonationCards cardsData = {cardsData.slice(0, 4)}/>
);

// Continue with other campaign components...

// Mapping sections to components
const sections = {
  // 'Gangwal School of Medical Sciences and Technology': GangwalSchool,
  //'Academic Initiatives': AcademicInitiatives,
  //'Faculty Chairs': FacultyChairs,
  //'Young Faculty Fellowships': () =>     <DonationCards cardsData = {cardsData.slice(0, 6)}/>,
  'Student Initiatives': () =>     <DonationCards cardsData = {cardsData.slice(0, 3)}/>,
  //'Social and Community Initiatives': () =>     <DonationCards cardsData = {cardsData.slice(0, 2)}/>,
  'Infrastructure Initiatives': () =>     <DonationCards cardsData = {cardsData.slice(0, 5)}/>,
  // 'Memorial Funds': () =>     <DonationCards cardsData = {cardsData.slice(0, 3)}/>,
  'Departmental Funds': () =>     <DonationCards cardsData = {cardsData.slice(0, 1)}/>,
  //'IITJ Silicon Valley Chapter': () =>     <DonationCards cardsData = {cardsData.slice(0, 4)}/>,
};

const AboutIITJFoundation = () => {
  const [activeSection, setActiveSection] = useState('Student Initiatives');
  const ActiveSectionComponent = sections[activeSection];


  return (
    <div className="max-w-6xl mx-auto p-4 font-suse">
      <h1 className="text-3xl font-bold text-center mb-8 font-suse">CAMPAIGNS</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-gray-50 p-4">
          <h2 className="text-[#000080] font-semibold mb-4 font-suse">Campaigns</h2>
          {Object.keys(sections).map((section) => (
            <MenuItem 
              key={section}
              text={section} 
              isActive={activeSection === section}
              onClick={() => setActiveSection(section)}
            />
          ))}
        </div>
        <div className="w-full md:w-2/3 p-2">
          <h2 className="text-xl text-left font-semibold text-[#000080] mb-4 font-suse">{activeSection}</h2>
          <ActiveSectionComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutIITJFoundation;
