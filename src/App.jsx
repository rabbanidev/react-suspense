import { Suspense, useState } from "react";
import PostSelector from "./components/PostSelector";
import Comments from "./components/Comments";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>
      <ErrorBoundary
        fallback={<h1 className="error">Something went wrong: Posts</h1>}
      >
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
      </ErrorBoundary>

      {selectedPostId && (
        <ErrorBoundary
          fallback={<h1 className="error">Something went wrong: Comments</h1>}
        >
          <Suspense fallback={<h1>Loading comments...</h1>}>
            <Comments postId={selectedPostId} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default App;
