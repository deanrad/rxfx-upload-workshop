import { Bus } from "@rxfx/bus";
import { Action } from "@rxfx/service";

export const bus = new Bus<Action<any>>();

/** Logs FSA bus events to the console - via `console.error` if their type contains 'error'.
 * @since 1.0.8
 * @example `bus.spy(consoleTracer);`
 */
export const consoleTracer = function (
  e: { type: string; payload?: any } = { type: "" }
) {
  const method = e.type.includes("error") ? "error" : "log";
  console[method]("trace: " + e.type, e.payload);
};

bus.spy(consoleTracer);
bus.errors.subscribe(console.error);
