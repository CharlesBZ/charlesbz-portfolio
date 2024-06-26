import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => {
  if (!source) {
    console.error("No source provided for URL generation");
    return "";  // Return a default image URL or an empty string
  }
  return builder.image(source).url();
};