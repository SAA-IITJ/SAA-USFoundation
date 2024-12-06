import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ProfileGrid from './AboutUs/ProfileGrid';
import { div } from 'framer-motion/client';

// MenuItem component
const MenuItem = ({ text, isActive, onClick }) => (
  <div 
    className={`flex font-suse items-center p-2 cursor-pointer ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
    onClick={onClick} id={text.replaceAll(' ','')}
  >
    <span className="text-blue-500 mr-2">|</span>
    <span>{text}</span>
    <ChevronRight className="ml-auto text-gray-400" size={16} />
  </div>
);
const dummyData = [
  {
    name: "Suraj Nadipelly",
    title: "President",
    image: "./Picture1.png"
  },
  {
    name: "Kedar Vaidya", 
    title: "Executive Vice President (EVP)",
    image: "./kedar.jpg"
  },
  {
    name: "Sankha Narayan Guria",
    title: "Vice President (VP – Operations)",
    image: "./sankha.jpg"
  },
  {
    name: "Boobalan Gnanasekharan",
    title: "Secretary",
    image: "./boobalan.jpg"
  },
  {
    name: "TBD",
    title: "Treasurer",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Kaushal A.Desai",
    title: "Dean of Alumni Relations (DORA), IIT Jodhpur (Ex-Officio)",
    image: "./kaushal.jpg"
  },
  {
    name: "Avinash Kumar Agarwal",
    title: "Director, IIT Jodhpur (Ex-Officio)",
    image: "./avinash.jpg"
  },
];


// Section components

const MissionObjectives = () => (
<div className="bg-white p-2 text-justify rounded-lg max-w-4xl mx-auto">
  <p className="mb-2 text-gray-700 font-suse text-lg">
    <strong>Mission</strong>
  </p>
  <p className="mb-2 text-gray-700 font-suse">
    The IIT Jodhpur North America Foundation (henceforth referred to as “IIT Jodhpur Foundation” / “IITJ Foundation” / “IITJF” / “Foundation”) was established to engage and support alumni, enhance branding, and raise funds for the betterment of the Indian Institute of Technology Jodhpur.
  </p>
  <p className="mb-6 text-gray-700 font-suse">
    The IIT Jodhpur Foundation unites visionary faculty, accomplished alumni, and influential industry leaders in championing IIT Jodhpur’s journey toward becoming a globally renowned hub for research and education. As a nonprofit organization (incorporated in Florida in 2024; pending 501(c)(3) tax-exempt status from the IRS), our mission is to elevate IIT Jodhpur to the forefront of global academia by fostering excellence, innovation, and opportunities that inspire future generations.
  </p>
  <p className="mb-2 text-gray-700 font-suse text-lg">
    <strong>Objectives</strong>
  </p>
  <p className="mb-2 text-gray-700 font-suse">
    We aim to achieve this mission through the following key initiatives:
    <ol className="list-decimal pl-5">
      <li className="mb-4">
        <strong>Promoting Education and Research:</strong> Enhancing education and research opportunities for students and faculty at IIT Jodhpur through:
        <ul className="list-disc pl-10 mt-2">
          <li>
            <strong>Scholarships and Grants:</strong> Supporting students’ education, research, and participation in national and international conferences.
          </li>
          <li>
            <strong>Faculty Development:</strong> Allocating funds to faculty for their research, teaching, and professional growth.
          </li>
          <li>
            <strong>Global Collaboration:</strong> Facilitating partnerships and collaborative research between IITJ faculty and students and educational & research institutions worldwide, particularly in the USA.
          </li>
          <li>
            <strong>Industry Engagement:</strong> Supporting research projects between IITJ faculty and the US industry.
          </li>
          <li>
            <strong>Professional Support:</strong> Assisting IITJ faculty, students, and alumni in pursuing their professional goals in the US through mentorship and networking opportunities.
          </li>
          <li>
            <strong>Visiting Faculty Programs:</strong> Encouraging and supporting visits by US faculty to IITJ for teaching, research, or collaborative initiatives.
          </li>
        </ul>
      </li>
      <li className="mb-4">
        <strong>Funding:</strong> Securing resources through donations, bequests, gifts, and grants from alumni, associates, and benefactors – including individuals, corporations, and trusts – to support IIT Jodhpur’s mission of excellence in education and research in technology, science, social sciences, and humanities.
      </li>
      <li>
        <strong>Networking:</strong> Building a robust network of faculty, alumni, associates, and benefactors across the USA to promote education and research at IIT Jodhpur. This includes fostering meaningful connections that drive collaboration and long-term impact.
      </li>
    </ol>
  </p>
  <p className="mb-2 mt-6 text-gray-700 font-suse text-lg">
    <strong>Commitment to Equity</strong>
  </p>
  <p className="mb-2 text-gray-700 font-suse">
    The IITJF is committed to utilizing all donations judiciously for the activities listed above, without discrimination based on race, sex, religion, or national origin.
  </p>
  <p className="mb-2 text-gray-700 font-suse text-lg">
    <strong>Collaborative Efforts</strong>
  </p>
  <p className="mb-2 text-gray-700 font-suse">
    IITJF works closely with the IIT Jodhpur Director’s office and the Dean of Relations and Alumni (DORA) to strengthen and expand the global IIT Jodhpur alumni network, creating a lasting legacy of excellence and innovation.
  </p>
</div>
);

const GovernanceFramework = () => (
  <div className="bg-white p-2 text-justify rounded-lg max-w-4xl mx-auto">
    <p className="mb-2 text-gray-700 font-suse">
    The IIT Jodhpur Foundation’s governance framework is designed to ensure transparent leadership, accountability, and alignment with IIT Jodhpur’s mission. Below is an overview of the key roles and responsibilities within our leadership structure, highlighting how each position contributes to the Foundation’s success and growth.
    </p>
    <p className="mb-2 text-gray-700 font-suse">
      <strong>Board of Directors (Voting Rights)</strong>
      <ol className="list-decimal pl-5">
        <li className="mb-1">
          <strong>IIT Jodhpur Director (ex-officio):</strong> Provides oversight and ensures alignment with IIT Jodhpur’s mission, goals, and standards.
        </li>
        <li className="mb-1">
          <strong>IIT Jodhpur Dean - Dean of Resources & Alumni (DORA) (ex-officio):</strong> Represents alumni relations leadership, acting as a liaison between IIT Jodhpur
          and the Foundation.
        </li>
        <li className="mb-1">
          <strong>President:</strong> The leader of the foundation, responsible for overall leadership, strategy, and management.
        </li>
        <li className="mb-1">
          <strong>Executive Vice President (EVP):</strong> Supports the President and provides continuity in leadership, reporting to the President.
        </li>
        <li className="mb-1">
          <strong>Treasurer:</strong> Manages financial affairs with accountability and transparency, reporting to the President.
        </li>
        <li className="mb-1">
          <strong>Secretary:</strong> Manages operations, maintains records, ensures legal compliance, and supports communication within the Board, reporting to the President.
        </li>
        <li className="mb-4">
          <strong>Vice President (VP) (Up to 6 maximum):</strong> Lead key initiatives, implement strategic decisions, and contribute specialized expertise to drive the Foundation’s goals, reporting to the President or EVP.
        </li>
      </ol>
    </p>
    <p className="mb-2 text-gray-700 font-suse">
      <strong>Advisors and Supporting Roles (No Voting Rights)</strong>
      <ol className="list-decimal pl-5">
        <li className="mb-1">
          <strong>Associate Vice President (AVP) (multiple):</strong> Collaborates with the board to execute initiatives in various areas ensuring effective support without adding complexity to governance, reporting to the EVP or VP.
        </li>
        <li className="mb-1">
          <strong>Board Advisor(s) (multiple):</strong> Provides specialized knowledge and counsel to
          the board, supporting strategic initiatives.
        </li>
        <li className="mb-1">
          <strong>Board Emeritus(s) (multiple):</strong> Honorary positions recognizing past
          contributions, allowing experienced individuals to continue offering guidance.
        </li>
        <li className="mb-1">
          <strong>Volunteers (multiple):</strong> Engage in various activities and projects, providing operational support, expanding the foundation’s reach, and strengthening its branding and network.
        </li>
      </ol>
    </p>
</div>
);

const BoardMembers = () => (
  <ProfileGrid profiles={dummyData}/>
);

const AdvisoryBoard = () => (
  <div className="bg-white p-2 text-justify rounded-lg max-w-4xl mx-auto"></div>
);

// Mapping sections to components
const sections = {
  'Mission and Objectives': MissionObjectives,
  'Governance Framework': GovernanceFramework,
  'Board Members': BoardMembers,
  'Advisory Board': AdvisoryBoard,
};

const AboutIITJFoundation = () => {
  const [activeSection, setActiveSection] = useState('Mission and Objectives');
  const ActiveSectionComponent = sections[activeSection];

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <h1 className="text-4xl tracking-tight leading-none md:text-5xl lg:text-3xl font-semibold text-black mb-10 mt-8 font-suse">ABOUT IITJ FOUNDATION</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-gray-50 p-4 font-suse">
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
