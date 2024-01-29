export interface BasicInformation {
  name: string;
  short_introduction: string;
  long_introduction: string;
  apply_link: string;
  _rawIcon: {
    asset: { _ref: string };
  };
}

export interface DefaultContent {
  title: string;
  content: string[];
}
