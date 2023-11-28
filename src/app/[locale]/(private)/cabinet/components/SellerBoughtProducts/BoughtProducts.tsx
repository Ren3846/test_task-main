'use client';
import { FC, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

import { animationService } from 'utils/services/animation-service';
import { ROUTES } from 'constants/routes';

import { Container } from 'ui/components/Container';
import { MinorLinkButton, SecondaryLinkButton } from 'ui/components/Button';

import DiabloIcon from 'assets/images/maketplaces/diablo-gold.png';

import s from './BoughtProducts.module.scss';

export const BoughtProducts: FC = () => {
  const t = useTranslations('Home.TopSelling');

  const cards = [
  
    {
      title: t('diablo_title'),
      icon: DiabloIcon,
      value: 250,
      width: 250,
      height: 100,
    },
    {
        title: t('diablo_title'),
        icon: DiabloIcon,
        value: 250,
        width: 250,
        height: 100,
    },
    {
        title: t('diablo_title'),
        icon: DiabloIcon,
        value: 250,
        width: 250,
        height: 100,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <section className={s.selling}>
      <Container>
        <ul className={s.selling_cards} ref={ref}>
          {cards.map((card, index) => (
            <motion.li
              {...animationService.scaleOut({ index, controls: mainControls })}
              className={s.card}
              key={index}
            >
              <div className={s.card_top}>
                <Image
                  src={card.icon}
                  width={card.width || 72}
                  height={card.height || 72}
                  alt={card.title}
                />
              </div>
              <div className={s.card_body}>
                <span className={s.card_title}>{card.title}</span>
                <span className={s.card_value}>
                  11.11.2023
                </span>
              </div>
              <div className={s.card_footer}>
                <MinorLinkButton className={s.card_see} href={ROUTES.PRIVATE.BOUGHT_PRODUCTS}>
                  {t('see_items')}
                </MinorLinkButton>
              </div>
            </motion.li>
          ))}
        </ul>
    </Container>
    </section>
  );
};
