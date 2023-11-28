'use client';
import { OrderDetailBlocks, OrderDetailInstruction, OrderDetailTypes, OrderInfo } from 'components/common/OrdertDetail';
import { Reviews } from 'components/common/Review/Reviews';
import { SellerRating } from 'components/common/SellerRating';
import { BackButton } from 'components/common/profile/BackButton';
import { Section } from 'components/common/profile/Section';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { IReview } from 'types/userTypes';

import s from './bought-product.module.scss';

export const BoughtProducts: FC = () => {
    const t = useTranslations('ProfilePage.BoughtProducts');

    const testReview: IReview = {
        createdAt: '2023-01-01T12:00:00',
        createdBy: {
          avatarURL: 'https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436191.jpg?w=740&t=st=1701180174~exp=1701180774~hmac=04eaa765aa40c518fc1997823c735cbf92668b3d8d5ea320a12cbc769e8a8724',
          userName: 'JohnDoe',
        },
        id: 'exampleReviewId',
        rating: 4.5,
        receivedBy: {
          avatarURL: 'example-avatar.jpg',
          userName: 'JaneDoe',
        },
        text: 'Це тестовий відгук. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        updatedAt: '2023-01-02T14:30:00',
      };

      const types = [
        { title: 'Тип 1', name: 'Значення 1' },
        { title: 'Тип 2', name: 'Значення 2' },
      ];
    
      const blocks = [
        { title: 'Блок 1', name: 'Значення 1' },
        { title: 'Блок 2', name: 'Значення 2' },
      ];
    
      const instruction = {
        title: 'Інструкції',
        list: ['Крок 1: Зробити щось', 'Крок 2: Зробити ще щось', 'Крок 3: Завершити'],
      };

    return (
      <Section>
      <Section.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <BackButton />
          <h3>{t('title')}</h3>
        </div>
      </Section.Header>
      <Section.Body>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Section className={s.card}>
            <OrderInfo
              imageUrl="https://img.freepik.com/free-photo/futuristic-video-game-equipment-illuminated-in-nightclub-generative-ai_188544-32105.jpg?w=2000&t=st=1701202418~exp=1701203018~hmac=27e12e95d8dfeaa27c07f3cebdcb7da6759b015e1ca589743dc4ce16170ac8e8"
              imageAlt="Image Alt Text"
              imageHeight={160}
              types={types}
              blocks={blocks}
              instruction={instruction}
              withScrollBlock={true}
            />
          </Section>

          <Section className={s.card}>
            <OrderDetailBlocks
              blocks={blocks}
            />
            <OrderDetailInstruction instruction={instruction}/>
            <OrderDetailTypes types={[]}/>
          </Section>
        </div>

        <Section className={s.card_review}>
          <SellerRating />
          <Reviews reviews={[testReview]} />
        </Section>
      </Section.Body>
    </Section>
  );
};

export default BoughtProducts;
