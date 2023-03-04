import { Bus } from "@rxfx/bus";
import { Action } from "@rxfx/service";

export const bus = new Bus<Action<any>>();

bus.spy(console.log);
bus.errors.subscribe(console.error);
