export default class ErrorRepository {
    constructor(key, description) {
        this.error = new Map();
        this.error.set(key, description);
    }

    translate(code) {
        if (this.error.has(code)) {
           return this.error.get(code);
        } else {
            throw new Error('Unknown error');
        }
    }
}