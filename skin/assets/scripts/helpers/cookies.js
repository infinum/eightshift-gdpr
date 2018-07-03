
export const cookies = {
  setCookie(key, value, time, path) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (time));
    let pathValue = '';

    if (typeof path !== 'undefined') {
      pathValue = `path=${path};`;
    }

    document.cookie = `${key}=${value};${pathValue}expires=${expires.toUTCString()}`;
  },
  getCookie(key) {
    const keyValue = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
  },
  setOneYear() {
    return 31536000000;
  },
};
