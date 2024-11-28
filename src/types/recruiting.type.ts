import { IGatsbyImageData } from 'gatsby-plugin-image';

interface VideoInformation {
  video_thumbnail: { asset: { gatsbyImageData: IGatsbyImageData } };
  presenter: { presenter_nickname: string; presenter_name: string }[];
  video_link: string;
}

export interface BasicInformation {
  name: string;
  short_introduction: string;
  long_introduction: string;
  apply_link: string;
  icon: {
    asset: { gatsbyImageData: IGatsbyImageData };
  };
}

export interface DefaultContentInformation {
  title: string;
  content: string[];
}

export interface SkillContentInformation extends DefaultContentInformation {
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

export interface GrowthAndDiffInformation {
  title: string;
  content: string;
}
