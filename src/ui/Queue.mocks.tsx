import { QueueItem } from "../types"

export const EMPTY : QueueItem[] = []

export const ONE_FRESH : QueueItem[] = [
  {name: 'Learn To Fly', status: 'pending', percentComplete: "0"}
]
export const ONE_PROGRESSING : QueueItem[] = [
  {name: 'Learn To Fly', status: 'pending', percentComplete: "10"}
]

export const ONE_QUEUED : QueueItem[] = [
  {name: 'Learn To Fly', status: 'pending', percentComplete: "50"}
  {name: 'Monkey Wrench', status: 'pending', percentComplete: "0"}
]

export const ALL_CANCELED : QueueItem[] = [
  {name: 'Learn To Fly', status: 'canceled', percentComplete: "50"}
  {name: 'Monkey Wrench', status: 'canceled', percentComplete: "0"}
]