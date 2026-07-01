import { SimpleCenteredPage } from "../../_components/simple-centered-page";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return <SimpleCenteredPage title={`BLOG: ${slug}`} />;
}
