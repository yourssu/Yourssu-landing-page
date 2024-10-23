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
      sub_name: string;
      _rawIcon: {
        asset: {
          _ref: string;
        };
      };
    };
  };
}
