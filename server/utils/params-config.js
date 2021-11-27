const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];
  const imageParams = {
    Bucket: "user-images-841e7945-2fe9-4454-8896-782497c193b1",
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: "public-read", // allow read access to this file
  };
  return imageParams;
};

module.exports = params;
