import * as React from "react";
import { useService, useWhileMounted } from "@rxfx/react";
import { uploadService } from "../services/upload-service";
import { EMPTY } from "./Queue.mocks";

const { useState } = React;

export const Queue = () => {
  const { isActive, state: queue } = useService(uploadService);

  const [numCompleted, setNumCompleted] = useState(0);

  useWhileMounted(() => {
    return uploadService.bus
      .query(uploadService.actions.complete.match)
      .subscribe(() => {
        setNumCompleted((i: number) => i + 1);
      });
  });

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
