'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import s from './sellers.module.scss';
import { Section } from 'components/common/profile/Section';
import { Tabs } from 'components/common/Tabs';
import SellerAchievments from '../../components/SellerAchievments.tsx';
import SellerProfile from '../../components/SellerProfile';
import SellerOffers from '../../components/SellerOffers';
import SellerBoughtProducts from '../../components/SellerBoughtProducts';
import SellerPayments from '../../components/SellerPayments';
import { ProfileSidebar } from '../../components/ProfileSidebar';
import { ISidebarConfig } from '../../layout';
import { IUser } from 'types/userTypes';
import { EnumRoles } from 'types/enums';
import { EmailIcon } from 'components/icons/EmailIcon';
import { AchiveIcon } from 'components/icons/AchiveIcon';
import { Achievement, Achievements } from 'components/common/Acievments';

interface SellerProfileProps {}

const tabs: ITab[] = [
  { name: 'Профіль продавця', filter: 'tab1' },
  { name: 'Пропозиції', filter: 'tab2' },
  { name: 'Платежі', filter: 'tab3' },
  { name: 'Досягнення', filter: 'tab4' },
  { name: 'Куплені товари', filter: 'tab5' },
];

export const Seller: FC<SellerProfileProps> = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');
  const t = useTranslations('SellerPage');

  const renderContent = () => {
    switch (selectedTab) {
      case 'tab1':
        return <SellerProfile />;
      case 'tab2':
        return <SellerOffers />;
      case 'tab3':
        return <SellerPayments />;
      case 'tab4':
        return <SellerAchievments/>;
      case 'tab5':
        return <SellerBoughtProducts />;
      default:
        return null;
    }
  };

  const sidebarConfig: ISidebarConfig = {
    items: [
      // { icon: <AchiveIcon />, title: '', href: '' },
    ],
  };

  const testUser: IUser = {
    achievements: ['Перше досягнення', 'Друге досягнення'],
    avatarURL: 'https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436191.jpg?w=740&t=st=1701180174~exp=1701180774~hmac=04eaa765aa40c518fc1997823c735cbf92668b3d8d5ea320a12cbc769e8a8724',
    backgroundColor: '#ffffff',
    banned: false,
    bonuses: 100,
    confidentLvl: 80,
    email: 'test@example.com',
    emailConfirmDate: '2023-01-01',
    experience: 50,
    id: '1234567890',
    isTwoFactorEnabled: true,
    level: 5,
    qrCode: 'https://example.com/qrcode.png',
    role: EnumRoles.SELLER,
    stripeId: 'stripe123',
    subscribed: true,
    userName: 'Лоїс Лейн',
  };

  const achievementsData = [
    {
      id: 1,
      name: 'Досягнення 1',
      criteria: ['Критерій 1', 'Критерій 2'],
    },
  ];

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      
      <Section.Body>
      <ProfileSidebar config={sidebarConfig} user={testUser}/>
        <Tabs tabs={tabs} onSelectTab={(tab) => setSelectedTab(tab)} />
        <div className={s.bodyContent}>{renderContent()}</div>
      </Section.Body>
    </Section>
  );
};
