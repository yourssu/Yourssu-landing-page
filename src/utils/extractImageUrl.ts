const BASE_URL = 'https://cdn.sanity.io/images';

export default function extractImageUrl(imagRef: string) {
  const refArray = imagRef.split('-');

  return `${BASE_URL}/${process.env.GATSBY_APP_SANITY_PROJECT_ID}/${process.env.GATSBY_APP_SANITY_DATASET}/${refArray[1]}-${refArray[2]}.${refArray[3]}`;
}
