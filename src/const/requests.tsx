import { REQUEST, SUCCESS, FAILURE } from 'const/actions'

function createRequestTypes(base: string) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

/* Constants
----------------------------------------*/
export const LOGIN = createRequestTypes('LOGIN')
