import * as React from "react";
import { useService } from "@rxfx/react";
import { uploadService, FileUploadRequest } from "../services/upload-service";
import { Chooser, Controls, Queue } from "./";

const { useState } = React;

export const App = () => {
  const { request: requestUpload } = useService(uploadService);

  return (
    <div>
      <Chooser />
      <Controls />
      <Queue />
    </div>
  );
};
