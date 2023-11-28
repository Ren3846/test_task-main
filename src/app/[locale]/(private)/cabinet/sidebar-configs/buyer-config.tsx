import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { AchiveIcon } from 'components/icons/AchiveIcon';
import { ExitIcon } from 'components/icons/ExitIcon';
import { ProfileIcon } from 'components/icons/ProfileIcon';
import { NotificationIcon } from 'components/icons/NotificationIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { MessageIcon } from 'components/icons/MessageIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    { icon: <ProfileIcon />, title: 'profile', href: ROUTES.PRIVATE.PROFILE },

    { icon: <StoreIcon />, title: 'sellers', href: ROUTES.PRIVATE.SELLER.PROFILE },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
  
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <AchiveIcon />, title: 'achievement', href: ROUTES.PRIVATE.ACHIEVEMENT },
    { icon: <PaymentIcon />, title: 'payment', href: ROUTES.PRIVATE.PAYMENT },
    { icon: <NotificationIcon />, title: 'notifications', href: ROUTES.PRIVATE.NOTIFICATIONS },
    { icon: <ExitIcon />, title: 'logout', href: ROUTES.AUTH.LOGIN },

  ],
};
