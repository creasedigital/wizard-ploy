import { useRouter } from "next/router";
// import { ParsedUrlQuery } from "querystring";

/* interface UseRouterParamsOptions {
  method?: "push" | "replace";
  shallow?: boolean;
} */

const useRouterParams = () =>{
    const { pathname, query, push } = useRouter()
  
  /**
   * Adds a query param to the URL string. Multiple params with the same name
   * and different values can be added.
   * @param name The name of the param.
   * @param value The value of the param.
   */
const addParam = (name: string, value: string | boolean | number) => {
  const { [name]: param, ...rest } = query
  let newQuery

  if (!param) {
    newQuery = { ...rest, [name]: encodeURIComponent(value) }
  } else if (Array.isArray(param)) {
    if (param.indexOf(encodeURIComponent(value)) > -1) return
    newQuery = { ...rest, [name]: [...param, encodeURIComponent(value)] }
  } else {
    if (param === encodeURIComponent(value)) return
    newQuery = { ...rest, [name]: [param, encodeURIComponent(value)] }
  }
}

    return {
      addParam,
      
    }
  }

  export { useRouterParams };