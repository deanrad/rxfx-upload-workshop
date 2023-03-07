import * as React from "react";
import { useService } from "@rxfx/react";
import { uploadService } from "../services/upload-service";
import { EMPTY } from "./Queue.mocks";

const { useState } = React;

export const Queue = () => {
  const { isActive } = useService(uploadService);
  const queue = EMPTY;

  const [numCompleted] = useState(0);

  const icon = isActive ? "⏳" : "";
  const completedText = numCompleted ? `(${numCompleted} completed)` : "";

  return (
    <>
      <section>
        <div className="upload-queue-header">
          <div>
            Queue {completedText} {icon}{" "}
          </div>

          <div>Status</div>
        </div>

        <ol role="list" id="queue" className="upload-queue">
          {queue.map(({ name, status, percentComplete }) => {
            const statusText =
              status === "pending" ? `${percentComplete} %` : status;

            return (
              <li className="queue-item" key={name}>
                <div>{name}</div>
                <div>{statusText}</div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
