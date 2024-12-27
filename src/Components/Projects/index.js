import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = () => {
  const handleProjectClick = (github) => {
    if (github) {
      window.open(github, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <div key={project.id} onClick={() => handleProjectClick(project.github)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
