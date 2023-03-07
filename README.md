# RxFx Uploader Workshop

- [The Finished App](#the-finished-app)
- [The Starter Skeleton](#the-starter-skeleton)
- [The Feature Specification](#the-feature-specification)
 
## The Finished App
The finished app looks like this: [Finished Uploader](https://d2jksv3bi9fv68.cloudfront.net/RxFxUploaderFinal.gif)

---
## The Starter Skeleton
The skeleton begins like this:

![RxFxUploaderWalkthrough-Step1](https://user-images.githubusercontent.com/24406/223446498-f7911e23-16cd-4b8d-a19a-540965352e31.gif)

## The Feature Specification
The SlAY language specification of the app is below

```yaml
Component: Chooser
  State:
    Has: chosenFile, uploadCaption, uploadVisibility
  Context: Upload Button
    It: Is Hidden
  When: A File is Chosen FILE_NAME.TXT
    Context: Upload Button
      It: Is Visible
      It: Displays the Text Upload
      It: Displays the Text FILE_NAME.TXT
      When: Clicked
        It: Calls uploadService.request with the file
        It: Is Hidden

Service: UploadService
  Context: Payloads
    Request: name, File
    Next: name, percentComplete
    Complete: null
    Cancel: null
  Context: Effect
    Effect: Calls observableUpload, promiseUpload, or mockUpload
      Concurrency: Queued
  Context: promiseUpload
    When: uploadService.request(FILE_NAME.txt)
      It: Calls fetch
      When: Awaited
        It: Yields a next event with name, percentComplete 100
        It: completes
  Context: mockUpload
    When: uploadService.request()
      It: calls concat, after
      When: Awaited
        It: Yields several percentComplete updates
        It: Completes
    When: uploadService.request()
      When: uploadService.cancelCurrent();
        It: Cancels
  Context: observableUpload
    When: uploadService.request()
      It: rxjs/ajax ajax
      When: Awaited
        It: Yields several percentComplete updates
        It: Completes
    When: uploadService.request()
      When: uploadService.cancelCurrent();
        It: Cancels
  Context: Reducer
    State:
      items: [{ name, status, percentComplete }]
    Event: Request
      It: Pushes a new pending item
    Event: Next (name)
      It: Updates percentComplete of (name)
    Event: Canceled
      It: Changes all pending to canceled
    Event: Complete
      It: Pops first off the queue
      It: Removes all canceled

Component: Controls
  Context: "Cancel Current" Button
    It: Is Disabled
    When: uploadService.started
      It: Is Enabled
      When: Clicked
        Calls: uploadService.cancelCurrent()
      When: uploadService.cancelCurrentAndQueued()
        It: Is Disabled
  Context: "Cancel Current And Queued" Button
    It: Is Disabled
    When: uploadService.started and more than one pending file
      It: Is Enabled
      When: Clicked
        Calls: uploadService.cancelCurrentAndQueued()
      When: uploadService.cancelCurrentAndQueued()
        It: Is Disabled

Component: Queue
  Context: Header
    It: Shows no completed text
    It: Shows no hourglass
  When: uploadService.isActive
    It: Shows an hourglass
    When: uploadService.canceled
      It: Shows no hourglass
  When: uploadService.completed
    It: Shows "1 completed"
    When: uploadService.completed
      It: Shows "2 completed"
  Context: Items
    It: Shows no items
    When: uploadService.request File.mp3
      It: Shows "File.mp3" text
      It: Shows "0 %" text
      When: uploadService.next File.mp3, loaded 10, total 20
        It: Shows "50 %" text
        When: uploadService.cancelCurrent()
          It: Shows "canceled" text
      When: uploadService.request File2.mp3
        It: Shows "File2.mp3" text
        It: Shows "0 %" text
        When: uploadService.next File2.mp3, loaded 5, total 20
        It: Shows "25 %" text
        When: uploadService.cancelCurrent()
          It: Shows "canceled" text
      When: uploadService.complete
        It: pops one off the stack
      When: uploadService.cancelCurrentAndQueued()
        It: Shows all files as canceled
        It: Shows no hourglass
```
