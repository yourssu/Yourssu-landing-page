import { IconProps } from '@/types/icon';

import {
  BackEndIcon,
  DesigPaletteIcon,
  FrontEndIcon,
  HRIcon,
  IOSIcon,
  LegalIcon,
  MarketingIcon,
  ProductManagerIcon,
  AndroidIcon,
} from './icons';

export interface PositionType {
  title: string;
  value: string;
  IconComponent: React.ComponentType<IconProps>;
  isRecruiting: boolean;
}

export const POSITIONS_DATA: PositionType[] = [
  {
    title: 'Product\nManager',
    value: 'product_manager',
    IconComponent: ProductManagerIcon,
    isRecruiting: true,
  },
  {
    title: 'Product\nDesigner',
    value: 'product_designer',
    IconComponent: DesigPaletteIcon,
    isRecruiting: true,
  },
  {
    title: 'Marketer',
    value: 'marketer',
    IconComponent: MarketingIcon,
    isRecruiting: true,
  },
  {
    title: 'iOS\nEngineer',
    value: 'ios_engineer',
    IconComponent: IOSIcon,
    isRecruiting: true,
  },
  {
    title: 'Android\nEngineer',
    value: 'android_developer',
    IconComponent: AndroidIcon,
    isRecruiting: true,
  },
  {
    title: 'HR\nPartner',
    value: 'hr_partner',
    IconComponent: HRIcon,
    isRecruiting: true,
  },
  {
    title: 'Frontend\nEngineer',
    value: 'web_frontend_engineer',
    IconComponent: FrontEndIcon,
    isRecruiting: true,
  },
  {
    title: 'Backend\nEngineer',
    value: 'backend_engineer',
    IconComponent: BackEndIcon,
    isRecruiting: true,
  },
  {
    title: 'Legal\nPartner',
    value: 'legal_partner',
    IconComponent: LegalIcon,
    isRecruiting: false,
  },
];
