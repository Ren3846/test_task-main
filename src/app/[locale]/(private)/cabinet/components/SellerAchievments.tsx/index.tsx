// pages/AchievementsPage.tsx
// use client
import React from 'react';
import { FC } from 'react';
import { Achievements } from 'components/common/Acievments';
import { Section } from 'components/common/profile/Section';

const achievementsData = [
  {
    id: 1,
    name: 'Achievement 1',
    description: 'Description for Achievement 1',
    criteria: ['Criteria 1', 'Criteria 2'],
  },
  {
    id: 2,
    name: 'Achievement 2',
    description: 'Description for Achievement 2',
    criteria: ['Criteria 3', 'Criteria 4'],
  },
  {
    id: 3,
    name: 'Achievement 3',
    description: 'Description for Achievement 3',
    criteria: ['Criteria 5', 'Criteria 6'],
  },
  {
    id: 4,
    name: 'Achievement 4',
    description: 'Description for Achievement 4',
    criteria: ['Criteria 7', 'Criteria 8'],
  },
  {
    id: 5,
    name: 'Achievement 5',
    description: 'Description for Achievement 5',
    criteria: ['Criteria 9', 'Criteria 10'],
  },
  {
    id: 6,
    name: 'Achievement 6',
    description: 'Description for Achievement 6',
    criteria: ['Criteria 11', 'Criteria 12'],
  },
];

const SellerAchievments: FC = () => {
  return (
    <Section>
      <Achievements achievements={achievementsData} />
    </Section>
  );
};

export default SellerAchievments;
