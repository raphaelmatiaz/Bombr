import prisma from "@/lib/prisma";

const prismaCrudOperations = {
    user: {
        // Update User
        updateUser: await prisma.user.update({
            where: {
              email: 'viola@prisma.io',
            },
            data: {
              name: 'Viola the Magnificent',
            },
          }),
          // Delete User
          deleteUser: await prisma.user.delete({
            where: {
              email: 'bert@prisma.io',
            },
          })
          },
          // Get All Users
          getAllUsers: await prisma.user.findMany(),
    post:{
        // Create Post
        createPost: await prisma.post.create({
            data: {
            //   title: 'My first post',
              content: 'Hello, world!',
              senderId: 1,
              receiverId: 2,
              message: 'Hello, world!',
              },
          }),
          // Update Post
          updatePost: await prisma.post.update({
            where: {
              id: 1,
            },
            data: {
              content: 'Updated content',
            },
          }),
          // Delete Post
          deletePost: await prisma.post.delete({
            where: {
              id: 1,
            },
          }),
    },
};

export default prismaCrudOperations;