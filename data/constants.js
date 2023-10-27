
export const BASE_URL = "http://localhost:3001"

export const SIGN_UP = BASE_URL + "/api/auth/local/register";

export const SIGN_IN = BASE_URL + "/api/auth/local";

export const PRODUCT_LIST = BASE_URL + "/api/products?populate=*";

export const PRODUCT_COMPARE = BASE_URL + "/api/products";

export function prependBaseUrl(url) {
    return BASE_URL + url
}

