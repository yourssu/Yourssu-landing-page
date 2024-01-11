export interface TeamButtonItem {
  team: string;
  img: string;
  hoverImg: string;
  notionLink: string;
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

export type OSType = 'android' | 'ios' | 'pc' | undefined;
