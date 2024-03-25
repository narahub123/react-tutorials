export default function BlogPostPage({ params }) {
  console.log(params);
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
