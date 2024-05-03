import prisma from "./lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: false },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      HELLO
      {posts[0].title}
    </div>
  );
}
