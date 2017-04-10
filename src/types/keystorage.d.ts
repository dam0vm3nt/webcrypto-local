interface IKeyStorage {

    /**
     * Return list of names of stored keys
     * 
     * @returns {Promise<string[]>} 
     * 
     * @memberOf KeyStorage
     */
    keys(): Promise<string[]>;
    /**
     * Returns key from storage
     * 
     * @param {string} key 
     * @returns {Promise<CryptoKey>} 
     * 
     * @memberOf KeyStorage
     */
    getItem(key: string): Promise<CryptoKey>;
    /**
     * Add key to storage
     * 
     * @param {string} key 
     * @param {CryptoKey} value 
     * @returns {Promise<void>} 
     * 
     * @memberOf KeyStorage
     */
    setItem(key: string, value: CryptoKey): Promise<void>;

    /**
     * Removes item from storage by given key
     * 
     * @param {string} key 
     * @returns {Promise<void>} 
     * 
     * @memberOf KeyStorage
     */
    removeItem(key: string): Promise<void>;

}