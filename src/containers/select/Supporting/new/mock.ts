import { IconProps } from '@/types/icon';

import {
  AndroidIcon,
  BackEndIcon,
  DesigPaletteIcon,
  FrontEndIcon,
  HRIcon,
  IOSIcon,
  LegalIcon,
  MarketingIcon,
  ProductManagerIcon,
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
    title: 'Marketing',
    value: 'marketer',
    IconComponent: MarketingIcon,
  },
  {
    title: 'iOS\nDeveloper',
    value: 'ios_developer',
    IconComponent: IOSIcon,
  },
  {
    title: 'Android\nDeveloper',
    value: 'android_developer',
    IconComponent: AndroidIcon,
  },
  {
    title: 'HR\nManager',
    value: 'hr_partner',
    IconComponent: HRIcon,
  },
  {
    title: 'Frontend\nDeveloper',
    value: 'web_fe_developer',
    IconComponent: FrontEndIcon,
  },
  {
    title: 'Backend\nDeveloper',
    value: 'backend_developer',
    IconComponent: BackEndIcon,
  },
  {
    title: 'Legal\nOfficer',
    value: 'legal_officer',
    IconComponent: LegalIcon,
  },
];
