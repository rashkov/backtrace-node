# Backtrace Node Release Notes

## Version 1.1.0

- improved deduplication: the relative library path is used instead of absolute path for purposes of deduplication.
- updated backtrace-node attributes - Backtrace will capture application, application.name, and main attributes based on
  the application package.json - not the faulting library package.json file.

## Version 1.0.9

- axios client update

## Version 1.0.8

- dependency updates

## Version 1.0.7

- Full source map support,
- readme updates

## Version 1.0.6 30.10.2019

- Added sourcemap support to Backtrace-node
- Fixed type attributes for report function
- Changed a unit test result - removed console.log and check data instead.

## Version 1.0.5 28.08.2019

- Fixed invalid source code line number

## Version 1.0.4 26.08.2019

- Added attachments checks,
- Added callback funciton to third parameter of send method,
- Removed Backtrace stack frames from message error,

## Version 1.0.3 06.06.2019

- Added new events to event emitter: `new-report`, `unhandledRejection`, `uncaughtException`. `uncaughtException` and
  `unhandledRejection` events will be emited by library when library catch unhandled exception or unhandler promise
  rejection. `new-report` event will be emited when library create new `backtraceReport` object.

## Version 1.0.2 05.06.2019

- Fixed arguments in callback function in report `send` method.

## Version 1.0.1 05.06.2019

- Added type definition for report `send` method

## Version 1.0.0 04.06.2019

- `Backtrace-node` now supports TypeScript. We care about your applications that using Backtrace-Node library so we
  prepared compatible API for you. If you still want to use modern API please use `BacktraceClient` instead.
- `Backtrace-node` options now support sampling and client rate limiting.
  - sampling allows you to drop random reports generated by your application depends on sampling value,
  - client rate limit allows you to set up client limit. By setting this value you will tell library how many reports
    per minute, client can send to Backtrace
- `Backtrace-node` send methods accept new paramtere - `fileAttachment`. If you pass array of strings `backtrace-node`
  will try to read each file from hard drive and add this as attachment to `backtraceReport`.
- `Backtrace-node` allows you to use `eventEmmiter` events! Now when you can use events like: `'before-send'`,
  `'after-send'` and others!
- Modern Promise API is here! `Backtrace-node` allows you to use `async/await` syntax to send reports to Backtrace!
- `reportSync` and `reportAsync` methods now returns `BacktraceResult` object that allows you to understand what happend
  with report. If you have connection/configuration problems `BacktraceResult` allows you to learn what happend inside
  library!
- Backtrace prepare a lot sample application for you! If you want to learn how to use Backtrace in your nodejs
  application (no matter if you using JavaScript/TypeScript) please check examples directory!
