async function getPosts() {
  "use cache";

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function Home() {
  const data = await getPosts();

  return (
    <main className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-3xl font-bold text-primary">Hello World</h1>

        <p className="mb-6 text-base-content/70">
          Current Time: {new Date().toLocaleTimeString()}
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Latest Posts</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.map((post) => (
            <article
              key={post.id}
              className="card border border-base-300 bg-base-100 p-5 shadow-md transition hover:shadow-xl"
            >
              <span className="mb-2 text-sm text-primary">Post #{post.id}</span>

              <h3 className="font-semibold capitalize">{post.title}</h3>

              <p className="mt-3 text-sm leading-6 text-base-content/70">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
