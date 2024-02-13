interface VideoInformation {
  video_thumbnail: { _rawAsset: { _ref: string } };
  presenter: { presenter_nickname: string; presenter_name: string }[];
  video_link: string;
}

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

export interface SkillContentInformation {
  title: string;
  content: string[];
  notice: string[];
}

export interface ApplyProcedureInformation {
  schedule: string;
  step: string;
}
export interface RoadToProInformation {
  title: string;
  roadToPro_list: VideoInformation[];
}

export interface InaWordInformation {
  title: string;
  content: string;
  word: string;
}
