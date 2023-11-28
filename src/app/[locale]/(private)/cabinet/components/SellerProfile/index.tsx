import React from 'react';
import { FieldBox } from 'components/common/fieldBox';
import { EmailIcon } from 'components/icons/EmailIcon';
import { PhoneIcon } from 'components/icons/PhoneIcon';
import { MapIcon } from 'components/icons/MapIcon';
import { PaperClipIcon } from 'components/icons/PaperClipIcon';
import { ProfileIcon } from 'components/icons/ProfileIcon';
import { ChoosePhone } from 'components/common/ChoosePhone';
import { Section } from 'components/common/profile/Section';

const SellerProfile = () => {
  return (
    <div>
       <Section>
      <div style={{ display: 'flex', marginBottom: '30px', justifyContent: 'space-between', alignItems: 'end'}}>
        <FieldBox
          name="userName"
          label="User Name"
          placeholder="Enter your user name"
          autoComplete="off"
          className="custom-class"
          type="text"
          errors={{}}
          register={() => {}}
          value=""
          icon={<ProfileIcon />}
        />
        <FieldBox
          name="email"
          label="Email"
          placeholder="Enter your email"
          autoComplete="off"
          className="custom-class"
          type="email"
          errors={{}}
          register={() => {}}
          value=""
          icon={<EmailIcon />}
        />
        <FieldBox
          name="city"
          label="City"
          placeholder="Enter your city"
          autoComplete="off"
          className="custom-class"
          type="text"
          errors={{}}
          register={() => {}}
          value=""
          icon={<MapIcon />}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
        <FieldBox
          name="zipCode"
          label="Zip Code"
          placeholder="Enter your zip code"
          autoComplete="off"
          className="custom-class"
          type="text"
          errors={{}}
          register={() => {}}
          value=""
          icon={<EmailIcon />}
        />
        <FieldBox
          name="street"
          label="Street"
          placeholder="Enter your street"
          autoComplete="off"
          className="custom-class"
          type="text"
          errors={{}}
          register={() => {}}
          value=""
          icon={<PaperClipIcon />}
        />
            <ChoosePhone
          name="phoneNumber"
          label="Phone Number"
          phone=""
          onChange={(phone) => {}}
          error={false}
        />
      </div>
    </Section>
    </div>
  );
};

export default SellerProfile;
