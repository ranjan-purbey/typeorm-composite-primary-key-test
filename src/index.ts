import { ConnectionOptions, createConnection } from "typeorm";
import { Category } from "./entities/Category";
import { Post } from "./entities/Post";
import { PostCategory } from "./entities/PostCategory";

(async () => {
  const config: ConnectionOptions = {
    name: "default",
    ...(require("../ormconfig.json") as ConnectionOptions),
    entities: [Post, Category, PostCategory],
  };
  const { manager } = await createConnection(config);

  const post = await manager.save(
    manager.create(Post, { content: "Sample post" })
  );
  const category = await manager.save(
    manager.create(Category, { name: "javascript" })
  );
  const postCategory = manager.create(PostCategory);
  postCategory.post = Promise.resolve(post);
  postCategory.category = Promise.resolve(category);
  await manager.save(postCategory);

  console.log({ post, category, postCategory });
  console.log({
    postId: manager.getId(post),
    categoryId: manager.getId(category),
    postCategoryId: manager.getId(postCategory),
  });
})();
