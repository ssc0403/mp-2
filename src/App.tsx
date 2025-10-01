import { useState, useEffect } from 'react';
import PicturePreview from './components/PicturePreview';
import { Picture } from "./types.ts";

function App() {
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
      async function loadPictures() {
          const rawData = await fetch("https://picsum.photos/v2/list?limit=100");
          const results = await rawData.json();
          setPictures(results);
      }
      loadPictures()
          .then(() => console.log("Data fetched successfully."))
          .catch((e) => console.log(e));
  }, [pictures.length])

  return (
      <div>
          <h2>Pictures from Picsum</h2>
          <PicturePreview data={pictures} />
      </div>
  )
}
export default App
