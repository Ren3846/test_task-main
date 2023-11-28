'use client';
import { FC, useState } from 'react';import React from 'react';
import { PaymentDetails } from 'components/common/payment/PaymentDetails'; // Замените 'путь/к/вашему' на реальный путь

export const PaymentDetail: FC = () => {
  const blocks = [
    { title: 'Block 1', name: 'Value 1' },
    { title: 'Block 2', name: 'Value 2' },
  ];

  const types = [
    { title: 'Type 1', name: 'Value 1' },
    { title: 'Type 2', name: 'Value 2' },
  ];

  return (
      <PaymentDetails blocks={blocks} types={types} />
  );
};

export default PaymentDetail;
