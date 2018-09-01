import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import {
  Platform,
} from 'react-native';

const rootPath = RNFS.DocumentDirectoryPath;

export const downloadFile = async (fileLink, folderName, fileName, fileType) => {
  const {
    config,
    fs,
  } = RNFetchBlob;

  const options = {
    fileCache: true,
    path: fileType === 'FILE' ? `${fs.dirs.DocumentDir}/${folderName}/${fileName}.html` : `${fs.dirs.DocumentDir}/${folderName}/${fileName}.jpg`,
    addAndroidDownloads: {
      useDownloadManager: true,
      // setting it to true will use the device's native download manager and will be shown in the notification bar.
      notification: false,
      path: fileType === 'FILE' ? `${fs.dirs.DCIMDir}/${folderName}/${fileName}.html` : `${fs.dirs.DCIMDir}/${folderName}/${fileName}.jpg`,
      // this is the path where your downloaded file will live in
    },
  };
  config(options).fetch('GET', `${fileLink}`)
    .progress({ count: 10 }, (received, total) => { console.log('progress', received / total); })
    .then(res => console.log(res.path()))
    .catch(err => console.log(err));
};

export const readDir = async (folderName) => {
  try {
    const directory = await RNFS.readDir(`${rootPath}/${folderName}/`);
    return directory;
  } catch (err) {
    console.log(err);
  }
};

export const readFile = async (fileName, folderName) => {
  try {
    const iosFile = await RNFS.readFile(`${rootPath}/${folderName}/${fileName}.html`);
    console.log('GOT RESULT', iosFile);

    // For android
    // const androidfile = await RNFS.readDirAssets(`${rootPath}/${folderName}/${fileName}.png`, 'base64');

    const readFile = Platform.OS === 'android' ? androidfile : iosFile;
    return readFile;
  } catch (err) {
    console.log(err);
  }
};

export const deleteFile = async (filename, folderPath) => {
  try {
    const deletePathFile = `${rootPath}/${folderPath}/${filename}`;
    await RNFS.unlink(deletePathFile);
    return { success: true };
    console.log('File Deleted');
  } catch (err) {
    console.log(err);
  }
};
