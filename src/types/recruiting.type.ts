export interface BasicInformation {
  name: string;
  short_introduction: string;
  long_introduction: string;
  apply_link: string;
  _rawIcon: {
    asset: { _ref: string };
  };
}

export interface DefaultContentInformation {
  title: string;
  content: string[];
}

export interface ApplyProcedureInformation {
  schedule: string;
  step: string;
}

export interface InaWordInformation {
  title: string;
  content: string;
}
