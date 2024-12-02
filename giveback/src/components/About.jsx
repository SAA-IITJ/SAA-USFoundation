import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ProfileGrid from './AboutUs/ProfileGrid';

// MenuItem component
const MenuItem = ({ text, isActive, onClick }) => (
  <div 
    className={`flex font-suse items-center p-2 cursor-pointer ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
    onClick={onClick}
  >
    <span className="text-blue-500 mr-2">|</span>
    <span>{text}</span>
    <ChevronRight className="ml-auto text-gray-400" size={16} />
  </div>
);
const dummyData = [
  {
    name: "Rajeev Ranjan",
    title: "President",
    education: "B.Tech 1990",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Jai Rawat",
    title: "VP - Faculty Alumni Initiatives",
    education: "B. Tech. 1991",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Mr. Kapil Kaul",
    title: "CEO- IITJ Development Foundation",
    education: "B.Com, MBA (Univ of Mumbai)",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Vinod Baya",
    title: "Board Member",
    education: "B. Tech. 1980, MS (Stanford)",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Vipin Agarwal",
    title: "Chief Financial Officer",
    education: "B.Tech.2003,MBA(IIM-A)",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Ratan Bajpai",
    title: "Secretary",
    education: "M. Tech. 1997",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Vinod Baya",
    title: "Board Member",
    education: "B. Tech. 1980, MS (Stanford)",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Vipin Agarwal",
    title: "Chief Financial Officer",
    education: "B.Tech.2003,MBA(IIM-A)",
    image: "https://placehold.co/600x400"
  },
  {
    name: "Ratan Bajpai",
    title: "Secretary",
    education: "M. Tech. 1997",
    image: "https://placehold.co/600x400"
  }
];


// Section components
const AboutUs = () => (
  <p className="text-sm leading-relaxed text-justify font-suse">
    The Indian Institute of Technology Jodhpur Foundation (henceforth referred to as "Foundation" / "IIT Jodhpur
    Foundation" / "IITJ Foundation" / "IITJF") was established "to mobilize alumni, enhance IIT Jodhpur branding, provide
    alumni services and raise funds for the betterment of Indian Institute of Technology Jodhpur, India". The exact
    definition of the purpose can be refined by the IIT Jodhpur Foundation Board by a Board Resolution so long as the
    PURPOSE is ONLY in the context of betterment of IIT Jodhpur or alumni located worldwide. The Foundation received
    its status as a 501(c)(3) tax-exempt organization from the IRS in January 2001 (EIN#: 94-3370645).
  </p>
);

const MissionObjectives = () => (
  <div className="bg-white p-8 text-justify rounded-lg max-w-4xl mx-auto my-10">
  <p className="mb-6 text-gray-700 font-suse">
    The Foundation was established as a non-profit public benefit corporation and received its status as a tax-exempt organization from the IRS. It is organized under the Nonprofit Public Benefit Corporation Law for charitable purposes. The specific purposes for which the Foundation is organized are to fund and promote the overall betterment of students, faculty, and alumni body of the Indian Institute of Technology, Jodhpur. Examples of fundraising include, but not limited to -- faculty chair funds, scholarships, equipment, research center, hostel improvement, etc.
  </p>
  <p className="mb-6 text-gray-700 font-suse">
    In addition, the Foundation will also assist in improving the IIT Jodhpur branding through faculty recruitment, facilitate research through academic and corporate relationships. The organization will achieve its goals by providing financial and other resources towards these initiatives.
  </p>
  <p className="text-gray-700 font-suse">
    <strong>IIT Jodhpur Foundation (IITJF)</strong>, <span className="text-blue-500 font-semibold">IIT Jodhpur Alumni Association (IITJAA)</span>, and <strong>IIT Jodhpur Development Foundation (IITJDF)</strong> through various initiatives are continuing to work closely together to strengthen and grow the global network of IIT Jodhpur alumni. The objective of these initiatives is to bring IIT Jodhpur faculty members, alumni, and industry leaders together in assisting IIT Jodhpur to realize its vision of becoming one of the world’s leading research and teaching universities.
  </p>
</div>
);

const CharitablePurpose = () => (
  <div className="bg-white p-8 text-justify rounded-lg max-w-4xl mx-auto my-10">
  <ul className="list-disc pl-6 text-gray-700 space-y-4 font-suse">
    <li>
      Post-graduate students who stayed beyond their specified dates of assistantships for research related reasons.
    </li>
    <li>
      Students & faculty attended conferences for paper presentations - Partial support to students and faculty members were provided to assist them in their travel to attend national/international conferences.
    </li>
    <li>
      Increasing student-faculty, and faculty-faculty interactions.
    </li>
  </ul>
</div>
);

const AlumniServicePurpose = () => (
  <p className="text-sm leading-relaxed text-justify font-suse">To foster fellowship among alumni through local chapters, provide a forum for communication among alumni, disseminate continuing education about IIT Jodhpur, and, provide the means for involving alumni in support of IIT Jodhpur and the mission of the Foundation</p>
);

const BoardMembers = () => (
  <ProfileGrid profiles={dummyData}/>
);

const Officers = () => (
  <ProfileGrid profiles={dummyData.slice(0,2)}/>
);

const AdvisoryBoard = () => (
  <ProfileGrid profiles={dummyData.slice(0,4)}/>
);

const Volunteers = () => (
  <ProfileGrid profiles={dummyData.slice(0,5)}/>
);

// Mapping sections to components
const sections = {
  'About us': AboutUs,
  'Mission and Objectives': MissionObjectives,
  'Charitable Purpose': CharitablePurpose,
  'Alumni Service Purpose': AlumniServicePurpose,
  'Board Members': BoardMembers,
  'Officers': Officers,
  'Advisory Board': AdvisoryBoard,
  'Volunteers': Volunteers
};

const AboutIITJFoundation = () => {
  const [activeSection, setActiveSection] = useState('About us');
  const ActiveSectionComponent = sections[activeSection];

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 font-suse">ABOUT IITJ FOUNDATION</h1>
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
