import React from 'react';

interface Comment {
  id: number;
  body: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface UserDetailsProps {
  userDetails: {
    comments: Comment[];
    todos: Todo[];
    posts: Post[];
  } | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userDetails }) => {
  if (!userDetails) return null;

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6 mb-10 montreal-details">
     
      <div className="component-first flex-1 max-h-[620px] overflow-y-auto bg-white p-4 rounded-md shadow-md border-slim4">
        <h3 className="font-semibold text-lg mb-3 formula-details">Comments:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {userDetails.comments.map((comment: Comment) => (
            <li key={comment.id} className="text-sm">
              {comment.body}
            </li>
          ))}
        </ul>
      </div>

     
      <div className="component-second flex-1 max-h-[620px] overflow-y-auto bg-white p-4 rounded-md shadow-md border-slim4">
        <h3 className="font-semibold text-lg mb-3 formula-details">To do:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {userDetails.todos.map((todo: Todo) => (
            <li key={todo.id} className="text-sm">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>

  
      <div className="component-third flex-1 max-h-[620px] overflow-y-auto bg-white p-4 rounded-md shadow-md border-slim4">
        <h3 className="font-semibold text-lg mb-3 formula-details">Posts:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {userDetails.posts.map((post: Post) => (
            <li key={post.id} className="text-sm">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
