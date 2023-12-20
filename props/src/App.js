import Blog from './components/blog';

function App() {
  return (
    <>
      <Blog
        title="Artificial Intelligence"
        category="Technology"
        isPublished={true}
      />
      <Blog
        title="What's the hype about Artificial Intelligence"
        category="Tech Gist"
        isPublished={false}
      ></Blog>
      <Blog
        title="Virtual Reality"
        category="Tech Gist"
        isPublished={false}
      ></Blog>
      <Blog
        title="React Framework"
        category="Programming"
        isPublished={true}
      ></Blog>
      <Blog
        title="Block chain Technology"
        category="Technology"
        isPublished={true}
      ></Blog>
    </>
  );
}

export default App;
