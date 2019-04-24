export class BacktraceClientOptions {
  public timeout: number = 15000;
  public endpoint!: string;
  public token!: string;
  public attributes: object = {};

  public disableGlobalHandler: boolean = false;
  public handlePromises: boolean = false;
  public allowMultipleUncaughtExceptionListeners: boolean = false;

  public tabWidth: number = 8;
  public contextLineCount: number = 200;

  public sampling: number | undefined = undefined;
  public rateLimit: number = 0;
}