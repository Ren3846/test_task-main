import { PaymentHistory } from 'components/common/PaymentHistory';
import React from 'react';
import { EnumPayment, EnumPaymentStatus } from 'types/enums';
import { ILanguages, IPurchaseProduct, IUserDetail } from 'types/shopTypes';
import { ChartHeader } from 'components/Charts/ChartHeader/ChartHeader';
import { BarChart } from 'components/Charts/BarChart';
import { Section, SectionBlock } from 'components/common/profile/Section';
import { ROUTES } from 'constants/routes';

const exampleUserDetail: IUserDetail = {
  avatarURL: '',
  userName: '',
};

const exampleLanguages: ILanguages = {
  sh: '',
  pt: '',
  ru: '',
  en: '',
  ar: '',
  es: '',
};

const examplePurchaseProducts: IPurchaseProduct[] = [
  {
    acceptedAt: '2023-01-01T12:00:00',
    boughtBy: exampleUserDetail,
    id: 'exampleProductId1',
    payment: {
      method: EnumPayment.CreditCard,
      paymentCode: 'examplePaymentCode1',
    },
    price: 99.99,
    productId: {
      id: 'exampleProductId1',
      shortDescription: exampleLanguages,
    },
    received: true,
    soldBy: exampleUserDetail,
    status: EnumPaymentStatus.Completed,
  },
  {
    acceptedAt: '2023-01-02T14:30:00',
    boughtBy: exampleUserDetail,
    id: 'exampleProductId2',
    payment: {
      method: EnumPayment.PayPal,
      paymentCode: 'examplePaymentCode2',
    },
    price: 49.99,
    productId: {
      id: 'exampleProductId2',
      shortDescription: exampleLanguages,
    },
    received: false,
    soldBy: exampleUserDetail,
    status: EnumPaymentStatus.PENDING,
  },
];

const SellerBoughtProducts = () => {
  return (
    <>
    <SectionBlock>
      <ChartHeader title="Incoming" />
      <BarChart/>
    </SectionBlock>
    
    <SectionBlock>
     <PaymentHistory boughtProducts={examplePurchaseProducts} href={ROUTES.PRIVATE.PAYMENT_DETAILS} />
    </SectionBlock>
    </>
  );
};

export default SellerBoughtProducts;
