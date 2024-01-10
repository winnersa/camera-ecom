
export const BASE_URL = "http://206.189.46.201:31000"

export const SIGN_UP = BASE_URL + "/api/auth/local/register";

export const SIGN_IN = BASE_URL + "/api/auth/local";

export const PRODUCT_LIST = BASE_URL + "/api/products?populate=*";

export const PRODUCT_COMPARE = BASE_URL + "/api/features?populate=*";

export function prependBaseUrl(url) {
    return BASE_URL + url
}

