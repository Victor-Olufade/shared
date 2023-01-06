import  SanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId: '2sfotemk',
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)