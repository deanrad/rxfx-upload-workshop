import * as React from "react";
import { uploadService, FileUploadRequest } from "../services/upload-service";
const { useState } = React;

export const Chooser = () => {
  // What stores the chosen DOM File for display
  const [chosenFile, setChosenFile] = useState<FileUploadRequest>({});

  // State
  const uploadCaption = "Upload " + chosenFile?.name;
  const uploadVisibility = chosenFile?.name ? "visible" : "hidden";

  // Events

  const handleFileChosen = (event: Event) => {
    const { files } = event.target as HTMLInputElement;
    const file = (files || [])[0] || {};
    const { name } = file;
    setChosenFile({ name, file });
  };

  const handleUploadClicked = () => {
    if (!chosenFile?.name) return;

    uploadService.request(chosenFile);

    // Clear our state
    setChosenFile({});
  };

  return (
    <fieldset className="file-info">
      <label htmlFor="file-upload" className="custom-file-upload">
        <i className="fa fa-cloud-upload"></i> Choose File
        <input
          id="file-upload"
          type="file"
          className="filePicker hidden"
          onChange={handleFileChosen}
        />
      </label>

      <div>
        <button
          className="submit upload-button"
          onClick={handleUploadClicked}
          style={{ visibility: uploadVisibility }}
        >
          {uploadCaption}
        </button>
      </div>

      {/* <div className="file-name">{pendingRequest.name}</div> */}
    </fieldset>
  );
};
