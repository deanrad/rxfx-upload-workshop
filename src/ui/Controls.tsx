import { useService } from "@rxfx/react";
import * as React from "react";
import { uploadService } from "../services/upload-service";

export const Controls = () => {
  const handleCancelCurrent = () => uploadService.cancelCurrent();
  const handleCancelcurrentAndQueued = () => {
    uploadService.cancelCurrentAndQueued();

    // HACK a workaround for the spinner showing too long

    // HACK a workaround for the ui not showing canceled
    uploadService.state.value.forEach((item) => {
      item.status !== "canceled" &&
        uploadService.bus.trigger(uploadService.actions.canceled());
    });
    uploadService.bus.trigger(uploadService.actions.complete());
  };

  const { isActive, state: queueItems } = useService(uploadService);

  return (
    <div className="controls">
      <button
        className="cancel"
        onClick={handleCancelCurrent}
        disabled={!isActive}
      >
        Cancel Current
      </button>
      <button
        className="cancel-queued"
        onClick={handleCancelcurrentAndQueued}
        disabled={
          !isActive ||
          queueItems.filter((item) => item.status === "pending").length <= 1
        }
      >
        Cancel Current and Queued
      </button>
    </div>
  );
};
