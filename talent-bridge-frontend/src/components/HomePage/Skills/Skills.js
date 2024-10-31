import React from 'react'
import SkillsBox from './SkillsBox'
import iconmask10 from '../../../assets/icons/Group.png'
import {Stack } from '@mui/material'


const Skills = () => {
    const skillData = [
        {
            image: iconmask10,
            title: 'C++ Developers',
            description: '1 Freelancer',
        },
        {
            image: iconmask10,
            title: 'C++ Developers',
            description: '1 Freelancer',
        },
        {
            image: iconmask10,
            title: 'C++ Developers',
            description: '1 Freelancer',
        },
        {
            image: iconmask10,
            title: 'C++ Developers',
            description: '1 Freelancer',
        },
        {
            image: iconmask10,
            title: 'C++ Developers',
            description: '1 Freelancer',
        },
    ]
  return (
    <Stack direction={'row'}>
    {skillData.map((skill, index) => (
            <SkillsBox
                key={index}
                image={skill.image}
                title={skill.title}
                description={skill.description}
                />
        ))}
    </Stack>
  )
}

export default Skills