import React from 'react';
import '../styles/TeamMember.css';
import person from '../images/person.avif'; 
import instagram_png from '../Png/instagram.png'; 
import facebook_png from '../Png/facebook.png'; 
import twitter_png from '../Png/twitter.png'; 

const TeamMember = ({ name, role, socialLinks }) => {
  return (
    <div className="team-member">
      <img src={person} alt={`Team Member ${name}`} />
      <h2>{name}</h2>
      <p>{role}</p>
      <ul className="social-links">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank">
              <img src={link.icon} alt={link.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeamPage = () => {
  const teamMembers = [
    { name: 'Subham Kumar', role: 'Web Developer', socialLinks: [{ url: 'https://www.instagram.com', icon: instagram_png, alt: 'Instagram' }, { url: '#', icon: facebook_png, alt: 'Facebook' }, { url: '#', icon: twitter_png, alt: 'Twitter' }] },
    { name: 'Subham Kumar', role: 'Graphic Designer', socialLinks: [{ url: '#', icon: instagram_png, alt: 'Instagram' }, { url: '#', icon: facebook_png, alt: 'Facebook' }, { url: '#', icon: twitter_png, alt: 'Twitter' }] },
    { name: 'Subham Kumar', role: 'Marketing Specialist', socialLinks: [{ url: '#', icon: instagram_png, alt: 'Instagram' }, { url: '#', icon: facebook_png, alt: 'Facebook' }, { url: '#', icon: twitter_png, alt: 'Twitter' }] },
  ];

  return (
    <div>
      <div className="aboutteam">
        <h1>About the team</h1>
      </div>
      <div className="whole_team">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
