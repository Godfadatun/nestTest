import { ArgumentsHost, Catch, HttpException, ExceptionFilter, Logger } from '@nestjs/common';


@Catch()
export class HttpsErrorFilter implements ExceptionFilter {

  catch(
    exception: HttpException,
    host: ArgumentsHost
  ) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    const errorResponse = {
      status: 'failed',
      message: exception.message || null,
      code: status,
      timeStamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.method,
      found:false,
    };

    Logger.error(
      `${request.url} ${request.method}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter'
    )

    response.status(404).json(errorResponse);
  }
}
