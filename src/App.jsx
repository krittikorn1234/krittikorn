import './App.css';
import TagInput from './components/TagInput';

function App() {
  const handleTagsChange = (tags) => {
    console.log('Updated tags:', tags);
  };

  return (
    <>
      <div>
        <h1>Tag Input Example</h1>
        <TagInput
          value={['example']}
          onChange={handleTagsChange}
          maxTags={5}
          separator={/,|\n/}
          allowDuplicates={false}
        />
      </div>
    </>
  );
}

export default App;