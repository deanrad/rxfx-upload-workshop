import * as React from "react";
import { useWhileMounted } from "@rxfx/react";
import { uploadService } from "../services/upload-service";
import { Chooser, Controls, Queue } from "./";

export const App = () => {
  useWhileMounted(() => {
    // When unmounted, attempt to cancel
    return () => uploadService.cancel();
  });

  return (
    <div>
      <Chooser />
      <Controls />
      <Queue />
    </div>
  );
};
