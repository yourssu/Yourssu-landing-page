import { BASE_URL, DATASET, PROJECT_ID } from '@/constants/sanity';

export default function extractImagUrl(imagRef: string) {
  const refArray = imagRef.split('-');

  return `${BASE_URL}/${PROJECT_ID}/${DATASET}/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
}
