import { ReactNode } from 'react';

export type OSType = 'android' | 'ios' | 'pc' | undefined;

export interface IntroElement {
  title: string;
  description: string;
  divStyle: string;
  color: string;
}

export interface Culture {
  id: string;
  title: string;
  description: string;
}

export interface Ideal {
  title: string;
  description: string;
}

export interface CarouselNode {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      sizes: string;
      base64: string;
      src: string;
      srcSet: string;
    };
  };
}

export interface CarouselItemData {
  itemsData: CarouselNode[];
  type: string | undefined;
}

export interface CarouselContainerData {
  children: ReactNode;
  className: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface CarouselContentData {
  className: string;
  currentIndex: number;
  itemsData: CarouselNode[];
  isType: string | undefined;
}

export interface TeamButtonData {
  team: string;
  img: string;
  hoverImg: string;
  notionLink: string;
}

export interface ButtonItem {
  team: string;
  img: string;
  hoverImg: string;
  notionLink: string;
}

export interface LayoutData {
  children: ReactNode;
  type: string | undefined;
}
