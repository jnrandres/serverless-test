/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
export const RESPONSE = {
  GET_SUCCESS: 'Se ha obtenido correctamente los registros',
  ERROR: 'Error interno al procesar la solicitud',
  CREATED_SUCCESS: 'Se ha creado correctamente el registro',
  REMOVED_SUCCESS: 'Se ha eliminado correctamente el registro',
  UPDATED_SUCCESS: 'Se ha actualizado correctamente el registro',
};
interface IResponse {
  message: string;
  data?: any;
}
interface IResponseLambda {
  statusCode: number;
  body: string;
}

export class MethodResponse {
  static getSuccess( data: any ): IResponseLambda {
    const response: IResponse = {
      message: RESPONSE.GET_SUCCESS,
      data
    }
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify(response)
    };
  }
  static error(err: Error): IResponseLambda {
    console.error(err);
    const response: IResponse = {
      message: RESPONSE.ERROR
    }
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify(response)
    };
  }
  static registerSuccess( data: any ): IResponseLambda {
    const response: IResponse = {
      message: RESPONSE.CREATED_SUCCESS,
      data
    }
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify(response)
    };
  }
  static removeSucess( data: any ): IResponseLambda {
    const response: IResponse = {
      message: RESPONSE.REMOVED_SUCCESS
    }
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify(response)
    };
  }
  static updateSucess( data: any ): IResponseLambda {
    const response: IResponse = {
      message: RESPONSE.UPDATED_SUCCESS,
    }
    return {
      statusCode: StatusCodes.OK,
      body: JSON.stringify(response)
    };
  }
}
