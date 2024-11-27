import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface TeamButtonItem {
  shortName: string;
  longName: string;
  image: string;
}

export interface CarouselNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData | undefined;
  };
  name: string;
}

export type OSType = 'android' | 'ios' | 'pc' | undefined;
