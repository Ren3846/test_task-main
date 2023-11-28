'use client';
import { FC, useState } from 'react';
import React from 'react';
import { PaymentDetails } from 'components/common/payment/PaymentDetails'; // Замініть 'путь/к/вашему' на реальний шлях

export const PaymentDetail: FC = () => {
  const blocks = [
    { title: 'Блок 1', name: 'Значення 1' },
    { title: 'Блок 2', name: 'Значення 2' },
  ];

  const types = [
    { title: 'Тип 1', name: 'Значення 1' },
    { title: 'Тип 2', name: 'Значення 2' },
  ];

  return (
    <PaymentDetails blocks={blocks} types={types} />
  );
};

export default PaymentDetail;
