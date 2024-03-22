import React from 'react';
import shivamImage from '../assets/shivam.jpg';
import anishaImage from '../assets/anisha.jpg';
import palakImage from '../assets/palak.jpg';
import jasmineImage from '../assets/jasmine.jpg';
import namanImage from '../assets/naman.jpg'

const Team = () => {
  // Define an array of team members with names, student IDs, and image URLs
  const teamMembers = [
    { name: 'Shivam Dogra', studentId: '110136372', imageUrl: shivamImage },
    { name: 'Anisha Miyan', studentId: '987654321', imageUrl: anishaImage },
    { name: 'Palak Desai', studentId: '456789123', imageUrl: palakImage },
    { name: 'Jasmine Kaur Gill', studentId: '321654987', imageUrl: jasmineImage },
    { name: 'Namandeep Kaur', studentId: '654321987', imageUrl: namanImage }
  ];

  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-3">Our Team</h1>
      <p className="text-xl mb-5">Meet our amazing team members!</p>
      <div className="flex flex-wrap justify-center">
        {/* Map over the teamMembers array and render a card for each member */}
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-6 mr-6 flex items-center" style={{ minWidth: '250px' }}>
            {/* Render the image with the member's name */}
            <img src={member.imageUrl} alt={member.name} className="h-20 w-20 rounded-full mr-4" />
            <div>
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <p className="text-lg">Student ID: {member.studentId}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
