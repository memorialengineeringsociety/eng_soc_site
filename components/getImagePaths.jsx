import { useEffect, useState } from 'react';

function getImagePaths(props) {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('../res/academics');
        const data = await response.json();
        setFileList(data);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFiles();
  }, []);

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);

  // rest of your component
}

export default getImagePaths;
