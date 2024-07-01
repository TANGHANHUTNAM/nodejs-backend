const uploadSingleFile = async (fileObject) => {
  let uploadPath = __dirname + fileObject.name;

  try {
    await fileObject.mv(uploadPath);
    console.log(uploadPath);
    return {
      status: "success",
      path: "linl-image",
      error: null,
    };
  } catch (error) {
    console.log(">>> err = ", error);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
  // Use the mv() method to place the file somewhere on your server
};

const uploadMultipleFile = () => {};

module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
