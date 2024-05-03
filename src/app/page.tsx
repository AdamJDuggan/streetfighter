import prisma from "../../lib/prisma";

async function getPosts() {
  const posts = await prisma.posts.findMany({
    where: { published: true },
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

  console.log({ posts });
  return <div>HELLO</div>;
}
