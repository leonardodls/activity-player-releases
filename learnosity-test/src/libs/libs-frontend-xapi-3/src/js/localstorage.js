class Settings {

  constructor() {
    /* localStorage may be disabled due to zero-quota issues (e.g. iPad in private browsing mode) */
    this._isLocalStorageEnabled;
    this.localStorageNamespace = 'comprodls.analytics';
    this.version = '1.0.0';
  }

  /**
   * Purpose: To check if local storage is enabled in browser or not.
   * Input Parameter :none
   * Output : true or false.
   */
   isLocalStorageEnabled() {
    if (this._isLocalStorageEnabled) {
      return true;
    }
    if (typeof _isLocalStorageEnabled === 'undefined') {
      this._isLocalStorageEnabled = false;
      if (localStorage) {
        try {
          localStorage.setItem('_isLocalStorageEnabled', '?');
          localStorage.removeItem('_isLocalStorageEnabled');
          this._isLocalStorageEnabled = true;
        } catch(e) {
        }
      }
      return this._isLocalStorageEnabled;
    } else {
      return false;
    }
   };

  /**
   * Purpose: To set a value for corresponding key in localstorage
   * Input Parameter :key, value and callback function
   * Output : none
   */
    putData(key, val, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback();
        }
        return;
      }

      localStorage[this.localStorageNamespace + '.' + key + '-' + this.version] = JSON.stringify(val);

      if (callback) {
        callback();
      }
    };

    /**
     * Purpose: To get a value for corresponding key in localstorage
     * Input Parameter :key and callback function
     * Output : Value for the corresponding key.
     */
    getData(key, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback(null);
        }
        return;
      }

      let val = localStorage[this.localStorageNamespace + '.' + key + '-' + this.version];
      if (val) {
        callback(JSON.parse(val));
      } else {
        callback(null);
      }
    };

    /**
     * Purpose: To get values for all corresponding keys in localstorage
     * Input Parameter :keys and callback function
     * Output : Values for the corresponding keys.
     */
    getMultipleData(keys, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback({});
        }
        return;
      }

      let retVal = {};
      for (let i = 0; i < keys.length; i++) {
        if (localStorage[this.localStorageNamespace + '.' + keys[i] + '-' + this.version]) {
          retVal[keys[i]] = localStorage[this.localStorageNamespace + '.' + keys[i] + '-' + this.version];
        }
      }
      callback(retVal);
    };

    /**
     * Purpose: To remove all old version keys from localstorage.
     */
    removeMultipleData(callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback();
        }
        return;
      }
      let removeItems = [];
      for (let i = 0, len = localStorage.length; i < len; ++i) {
        let key = localStorage.key(i);
        if(key.indexOf(this.localStorageNamespace) !== -1) {
          let localstorageVersion = key.substring(key.lastIndexOf('-') + 1, key.length);
          if(localstorageVersion !== this.version) {
            removeItems.push(key);
          }
        }
      }
      for (let j = 0; j < removeItems.length; j++) {
        localStorage.removeItem(removeItems[j]);
      }
      if (callback) {
        callback();
      }
    };

    /**
     * Purpose: To remove a specific key from localStorage.
     */
    removeData(key, callback) {
      if (!this.isLocalStorageEnabled()) {
        if (callback) {
          callback();
        }
        return;
      }
      localStorage.removeItem(this.localStorageNamespace + '.' + key + '-' + this.version);
      if (callback) {
        callback();
      }
    };
}

export default Settings;
