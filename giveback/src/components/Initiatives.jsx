import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import DonationCards from './Initiatives/DonationCards';



const cardsData = [
  {
    title: "Make a General Impact: Donate Without Boundaries",
    content: `
      <p>Not sure which category to support? Your unrestricted gift allows IIT Jodhpur Foundation the flexibility to address the Institute’s most pressing needs and seize new opportunities as they arise. These contributions ensure we can allocate resources where they are needed most, whether it's empowering students, advancing research, upgrading infrastructure, or fostering innovation.</p>
      <br/>
      <b>Why Choose Unrestricted Giving?</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li><b>Maximum Impact: </b> Your donation directly supports the Institute's priorities and adapts to emerging challenges.</li>
        <li><b>Flexibility: </b> Enables IIT Jodhpur Foundation to respond swiftly to time-sensitive opportunities.</li>
        <li><b>Empowering Excellence: </b> Ensures students, faculty, and programs receive the necessary resources to thrive.</li>
      </ul>
      <br/>
      <p>Your generosity fuels a brighter future for IIT Jodhpur’s students, faculty, and the global community. Together, we can elevate the Institute’s legacy of excellence and innovation.</p>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
  {
    title: "Student Empowerment Funds",
    content: `
      <p>Invest in the dreams and potential of IIT Jodhpur’s students. Your support funds scholarships, research grants, and participation in national and international competitions and conferences. These initiatives ensure that no talented student is held back by financial constraints, empowering them to excel academically and professionally.</p>
      <br/>
      <b>Examples of Impact:</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li>A merit-based scholarship for deserving students.</li>
        <li>Funding for student-led innovation projects or startups.</li>
        <li>Travel grants for presenting research at global conferences.</li>
      </ul>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
  {
    title: "Cutting Edge Infrastructure",
    content: `
      <p>Help build state-of-the-art facilities that foster innovation and creativity. From advanced laboratories to modern classrooms and collaborative learning spaces, your contribution directly impacts the learning and research environment at IIT Jodhpur. These spaces become hubs of inspiration for the next generation of leaders.</p>
      <br/>
      <b>Examples of Impact:</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li>Naming opportunities for new laboratories or learning centers.</li>
        <li>Contributions to green initiatives, such as energy-efficient buildings.</li>
        <li>Upgrading equipment to ensure students and faculty have access to the latest technology.</li>
      </ul>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
  {
    title: "Faculty Excellence Fund",
    content: `
      <p>Support world-class educators and researchers in their quest for knowledge. This fund enables faculty to undertake groundbreaking research, participate in international conferences, and collaborate with peers globally. Your donation enhances IIT Jodhpur’s ability to attract and retain top-tier faculty.</p>
      <br/>
      <b>Examples of Impact:</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li>Seed funding for innovative faculty research projects.</li>
        <li>Travel grants for faculty to present their work or collaborate internationally.</li>
        <li>Endowments for named chairs or fellowships to honor exceptional educators.</li>
      </ul>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
  {
    title: "Departmental Advancement Funds",
    content: `
      <p>Empower specific departments at IIT Jodhpur to thrive. By donating to a particular department, you can directly impact its growth, research output, and academic excellence. These funds provide departments with the resources to undertake specialized projects and attract top talent.</p>
      <br/>
      <b>Examples of Impact:</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li>Supporting departmental research labs or workshops.</li>
        <li>Enhancing teaching resources with specialized software and tools.</li>
        <li>Funding interdisciplinary projects involving multiple departments.</li>
      </ul>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
  {
    title: "Alumni Engagement and Community Building",
    content: `
      <p>Strengthen the IIT Jodhpur alumni network and foster a sense of belonging. Your donation helps organize reunions, professional development workshops, and mentorship programs that connect alumni with current students and faculty, creating a thriving, engaged community.</p>
      <br/>
      <b>Examples of Impact:</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li>Sponsoring alumni-student networking events.</li>
        <li>Creating mentorship opportunities that guide students toward career success.</li>
        <li>Supporting initiatives that celebrate alumni achievements.</li>
      </ul>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
  {
    title: "Innovation and Entrepreneurship Fund",
    content: `
      <p>Encourage the spirit of entrepreneurship and innovation among students and faculty. This fund provides resources for startups, incubation programs, and competitions that challenge participants to solve real-world problems with creative solutions.</p>
      <br/>
      <b>Examples of Impact:</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li>Funding student-led startups or entrepreneurial projects.</li>
        <li>Sponsoring hackathons or innovation challenges.</li>
        <li>Supporting the establishment of startup incubation centers.</li>
      </ul>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
  {
    title: "Legacy Giving",
    content: `
      <p>Leave a lasting impact on IIT Jodhpur with planned giving or named donations. Legacy gifts create enduring opportunities for students, faculty, and research, allowing donors to make a significant difference that continues for generations.</p>
      <br/>
      <b>Examples of Impact:</b>
      <ul style="margin-left: 20px; padding-top: 10px;">
        <li>Establishing named scholarships or endowment funds.</li>
        <li>Supporting significant projects like new buildings, research centers, or institutes.</li>
        <li>Creating a legacy by honoring family members or mentors through donations.</li>
      </ul>
    `,
    imageSrc: "https://placehold.co/600x400",
    buttons: [
      { label: "Debit/Credit Card/Online Banking", link: "/" },
      { label: "Cheque /Draft", link: "/whydonate" }
    ]
  },
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
const General = () => (
    <DonationCards cardsData = {cardsData.slice(0, 1)}/>
);

const SEFunds = () => (
    <DonationCards cardsData = {cardsData.slice(1, 2)}/>
);

const CEInfra = () => (
    <DonationCards cardsData = {cardsData.slice(2, 3)}/>
);

const FEFund = () => (
  <DonationCards cardsData = {cardsData.slice(3, 4)}/>
);

const DAFund = () => (
  <DonationCards cardsData = {cardsData.slice(4, 5)}/>
);

const AECBuild = () => (
  <DonationCards cardsData = {cardsData.slice(5, 6)}/>
);

const IEFund = () => (
  <DonationCards cardsData = {cardsData.slice(6, 7)}/>
);

const LGiving = () => (
  <DonationCards cardsData = {cardsData.slice(7, 8)}/>
);

// Continue with other campaign components...

// Mapping sections to components
const sections = {
  'General: Donate Without Boundaries': General,
  'Student Empowerment Funds': SEFunds,
  'Cutting-Edge Infrastructure': CEInfra,
  'Faculty Excellence Fund': FEFund,
  'Departmental Advancement Fund': DAFund,
  'Alumni Engagement and Community Building': AECBuild,
  'Innovation and Entrepreneurship Fund': IEFund,
  'Legacy Giving': LGiving,
};

const AboutIITJFoundation = () => {
  const [activeSection, setActiveSection] = useState('General: Donate Without Boundaries');
  const ActiveSectionComponent = sections[activeSection];


  return (
    <div className="max-w-6xl mx-auto p-4 font-suse">
      <h1 className="text-3xl font-semibold text-center mb-8 font-suse mt-8">CAMPAIGNS</h1>
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
