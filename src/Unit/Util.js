class Util {
    jsonTo(json) {
        return JSON.parse(json);
    }

    toJson(value) {
        return JSON.stringify(value);
    }
}

export default new Util();
