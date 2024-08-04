import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "Loading..."}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {story && <StoryblokComponent blok={story.content} />}
      <footer>Footer content here</footer>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      key: data ? data.story.id : null,
    },
    revalidate: 3600, // Optionally cache the response
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/stories", {
    version: "draft", // or 'published'
  });

  const paths = data.stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return {
    paths,
    fallback: false, // `false` means other routes should 404
  };
}
