export interface Node {
  publicURL: string;
  name: string;
}

export interface ProjectImgNode {
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

export interface SeoSiteNode {
  title: string;
  description: string;
  siteUrl: string;
}

export interface SeoFileNode {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  width: number;
}

export interface FooterData {
  logo: {
    nodes: Node[];
  };
}

export interface TeamIconData {
  teams: {
    nodes: Node[];
  };
  hovers: {
    nodes: Node[];
  };
}

export interface TeamsData {
  team: string;
  img: string;
  hoverImg: string;
  notionLink: string;
}

export interface CarouselData {
  carouselItemButtonImgData: {
    nodes: Node[];
  };
  carouselItemLinkImgData: {
    nodes: Node[];
  };
  carouselItemListImgData: {
    nodes: Node[];
  };
  projectImgData: {
    nodes: ProjectImgNode[];
  };
  backgroundImgData: {
    nodes: Node[];
  };
}

export interface SeoData {
  site: {
    siteMetadata: SeoSiteNode;
  };
  file: {
    childImageSharp: {
      fixed: SeoFileNode;
    };
  };
}

export interface HeaderData {
  logo: {
    nodes: Node[];
  };
  social: {
    nodes: Node[];
  };
  tooltip: {
    nodes: Node[];
  };
}
