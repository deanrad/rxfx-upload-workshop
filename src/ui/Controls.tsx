import * as React from "react";

import { EMPTY, ONE_PROGRESSING, ONE_QUEUED } from "./Queue.mocks";

export const Controls = () => {
  const handleCancelCurrent = () => console.log("cancel current");
  const handleCancelcurrentAndQueued = () => {
    console.log("cancel current and queued");
  };

  const isActive = true;
  const queueItems = ONE_QUEUED;

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
