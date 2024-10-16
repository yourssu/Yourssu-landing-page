export interface TeamButtonItem {
  // TODO: shortName: string; 추가
  longName: string;
  image: string;
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
