export const REGEX = {
    general: /^[a-zA-Zà-żÀ-Ż-\s+-]+$/,
    address: /^[a-zA-Z0-9\u00C0-\u00FF\s,. '-]{3,}$/,
    // eslint-disable-next-line 
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    pseudo: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
}