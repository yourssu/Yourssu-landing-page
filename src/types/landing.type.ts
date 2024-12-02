import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface TeamButtonItem {
  shortName: string;
  longName: string;
  image: IGatsbyImageData | undefined;
}

export interface CarouselNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData | undefined;
  };
  name: string;
}

export type OSType = 'android' | 'ios' | 'pc' | undefined;
