export interface NodeType {
  publicURL: string;
  name: string;
}

export interface NodeListType {
  nodes: NodeType[];
}

export interface TeamButtonEdge {
  node: {
    basicInformation: {
      name: string;
      _rawIcon: {
        asset: {
          _ref: string;
        };
      };
    };
  };
}
