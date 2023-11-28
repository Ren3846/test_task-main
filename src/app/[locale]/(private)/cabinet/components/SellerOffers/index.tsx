import React from 'react';
import { Table } from 'components/common/Table';
import { ChartHeader } from 'components/Charts/ChartHeader/ChartHeader';
import { BarChart } from 'components/Charts/BarChart';
import { PieChart } from 'components/Charts/PieChart';
import { Section, SectionBlock, SectionBlockBody } from 'components/common/profile/Section';

import s from './SellerOffers.module.scss';

const SellerOffers = () => {
  const data = [
    { title: 'AFK Arena', category: 'AFK Arena, Account', created: '3 Sep 2023  15:30', quantity: '5/10' },
    { title: 'AFK Arena', category: 'AFK Arena, Account', created: '3 Sep 2023  15:30', quantity: '5/10' },
  ];

  const columns = [
    { Header: 'Title', accessor: 'title' },
    { Header: 'Category/subcategory', accessor: 'category' },
    { Header: 'Created Date', accessor: 'created' },
    { Header: 'Quantity', accessor: 'quantity' },
  ];

  const translateFn = (itemForTranslate: any) => itemForTranslate;

  return (
    <SectionBlockBody>
      <div className={s.card_space}> 
        <Section className={s.card}>
          <ChartHeader title="Overview" />
          <BarChart />
        </Section>

        <Section className={s.card}>
          <ChartHeader title="Top Sales" />
           <PieChart />
        </Section>
      </div>

      <Section>
        <Table
          data={data}
          columns={columns}
          translateFn={translateFn}
          wrapperClassName="your-wrapper-class"
          className="your-table-class"
        />
      </Section>
    </SectionBlockBody>
  );
};

export default SellerOffers;
