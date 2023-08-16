import React, { useState } from 'react';
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from 'react-filerobot-image-editor';
//import Test from './images/test.jpg';

function App() {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);

  // for the background image
  const [image, setImage] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
      openImgEditor();
    }
  };

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };


  return (
    <div>
      <label for="uploadFile">Choose a picture:</label>
      <input type="file" accept="image/png, image/jpeg" id="uploadFile" onChange={handleFileChange} />
      {isImgEditorShown && (
        <FilerobotImageEditor
          source={image}
          onSave={(editedImageObject, designState) =>
            console.log('saved', editedImageObject, designState)
          }
          onClose={closeImgEditor}
          annotationsCommon={{
            fill: '#ff0000',
          }}
          Text={{ text: 'What do you want to write?' }}
          Rotate={{ angle: 90, componentType: 'slider' }}
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ANNOTATE} // or 'Annotate'
          defaultToolId={TOOLS.IMAGE} // or 'Text'
        />
      )}
    </div>
  );
}

export default App;
