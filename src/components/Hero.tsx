import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeroSection = styled.section`
  background: radial-gradient(circle at top right, rgba(100, 255, 218, 0.1), transparent),
              linear-gradient(45deg, var(--background) 0%, var(--background-light) 100%);
  color: var(--text-primary);
  padding: calc(var(--spacing) * 6) 0;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing);
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  justify-content: center;
  flex-wrap: wrap;
`;

const ProfileImageContainer = styled.div`
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(100, 255, 218, 0.3);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.15);
  transition: all 0.3s ease;
  filter: brightness(1.05) contrast(1.05);

  &:hover {
    transform: scale(1.02) translateY(-5px);
    border-color: var(--secondary-color);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileContent = styled.div`
  text-align: left;
  flex: 1;
  min-width: 300px;
  padding: calc(var(--spacing) * 3);
  background: var(--glass-background);
  border-radius: 20px;
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 2rem;
    padding: calc(var(--spacing) * 2);
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #ffffff, var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, var(--secondary-color), transparent);

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Tagline = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: calc(var(--spacing) * 2) 0;
  color: var(--text-secondary);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  p {
    margin: calc(var(--spacing) * 1.5) 0;
  }
  
  strong {
    color: var(--secondary-color);
    font-weight: 500;
    margin: 0 0.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  background: var(--glass-background);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(var(--glass-blur));

  svg {
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    color: var(--text-primary);
    border-color: rgba(100, 255, 218, 0.3);

    svg {
      transform: scale(1.1);
    }
  }

  &.github:hover {
    background: rgba(36, 41, 46, 0.9);
    box-shadow: 0 8px 20px rgba(36, 41, 46, 0.2);
  }

  &.linkedin:hover {
    background: rgba(0, 119, 181, 0.9);
    box-shadow: 0 8px 20px rgba(0, 119, 181, 0.2);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="about">
      <Container>
        <ProfileContainer>
          <ProfileImageContainer>
            <ProfileImage src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Vinay Kulkarni" />
          </ProfileImageContainer>
          <ProfileContent>
            <Title>Data & Technology Leader</Title>
            <Tagline>
              <p>
                Seasoned data and technology leader with over 15 years building high-performing teams and
                delivering modern <strong>data platforms</strong> and <strong>analytics solutions</strong>.
                Proven track record of driving innovation at <strong>WISR</strong>, <strong>REA Group</strong>,
                and <strong>The Iconic</strong>.
              </p>
              <p>
                Expertise across <strong>data architecture</strong>, <strong>cloud strategy</strong>, and
                <strong>machine learning operations</strong> with a strong commitment to
                <strong>data quality</strong> and engineering excellence.
              </p>
              <p>
                Focused on <strong>platform modernization</strong>, <strong>team mentorship</strong>, and
                enabling organizations to become truly <strong>data‑driven</strong>.
              </p>
            </Tagline>
            <SocialLinks>
              <SocialLink
                href="https://github.com/vincyf1"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/vinayskulkarni/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </SocialLink>
            </SocialLinks>
          </ProfileContent>
        </ProfileContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
