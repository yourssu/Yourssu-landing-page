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
}

export const POSITIONS_DATA: PositionType[] = [
  {
    title: 'Product\nManager',
    value: 'product_manager',
    IconComponent: ProductManagerIcon,
  },
  {
    title: 'Product\nDesigner',
    value: 'product_designer',
    IconComponent: DesigPaletteIcon,
  },
  {
    title: 'Marketer',
    value: 'marketer',
    IconComponent: MarketingIcon,
  },
  {
    title: 'iOS\nEngineer',
    value: 'ios_engineer',
    IconComponent: IOSIcon,
  },
  {
    title: 'Android\nEngineer',
    value: 'android_developer',
    IconComponent: AndroidIcon,
  },
  {
    title: 'HR\nManager',
    value: 'hr_partner',
    IconComponent: HRIcon,
  },
  {
    title: 'Frontend\nEngineer',
    value: 'web_frontend_engineer',
    IconComponent: FrontEndIcon,
  },
  {
    title: 'Backend\nEngineer',
    value: 'backend_engineer',
    IconComponent: BackEndIcon,
  },
  {
    title: 'Legal\nOfficer',
    value: 'legal_partner',
    IconComponent: LegalIcon,
  },
];
