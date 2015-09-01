import AbstractAdapter from './AbstractAdapter.js';
import Util from '../Unit/Util.js';

class CookieStorage extends AbstractAdapter {

    constructor(options = {}) {
        super(options);
        this._expiry = options.expiry || this.dayToMillisecond(100);
        this._path = options.path || '/';
        this._domain = options.domain || '';
    }

    getName() {
        return 'CookieStorage';
    }

    isSupported() {
        try {
            return window.navigator.cookieEnabled ||
                ('cookie' in document && (document.cookie.length > 0 ||
                (document.cookie = 'test').indexOf.call(document.cookie, 'test') > -1));
        } catch (e) {
            return false;
        }
    }

    setContainer(container) {
        let containerJson = Util.toJson(container);
        document.cookie = this._containerName + '=' + encodeURIComponent(containerJson) + this.getCookieExpiry(this._expiry) + this.getCookiePath() + this.getCookieDomain();
        return this;
    }

    getContainer() {
        let cookies = document.cookie && document.cookie.split(';') || [];

        for (let i = 0, l = cookies.length; i < l; i++) {

            let cookie = cookies[i];

            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }

            if (cookie.indexOf(this._containerName + '=') === 0) {
                let containerJson = decodeURIComponent(cookie.substring(this._containerName.length + 1, cookie.length));
                try {
                    return Util.jsonTo(containerJson);
                } catch (e) {

                }
            }
        }
        return {};
    }

    removeContainer() {
        let expiry = this._expiry;
        this._expiry = this.dayToMillisecond(-1);
        this.setContainer({});
        this._expiry = expiry;
        return this;
    }

    getCookieDomain() {
        if (this._domain) {
            return '; domain=' + this._domain;
        }
        return '';
    }

    getCookieExpiry(time) {
        let expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + time);
        return '; expires=' + expiryDate.toUTCString();
    }

    getCookiePath() {
        return '; path=' + this._path;
    }

    dayToMillisecond(day) {
        return day * 24 * 60 * 60 * 1000;
    }


}

export default CookieStorage;
