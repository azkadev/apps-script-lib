/*


mini db
github.com/azkadev

MBKIhRU7yJNQOuEHsA4X5dKOF4qn-QYEF


*/

var minidb = class Minidb {
    constructor(type = "user") {
        this.db = PropertiesService.getUserProperties();
        if (RegExp("^script$", "i").exec(type)) {
            this.db = PropertiesService.getScriptProperties();
        } else if (RegExp("^document$", "i").exec(type)) {
            this.db = PropertiesService.getDocumentProperties();
        }
    }
    getValue(key) {
        try {
            var getData = this.db.getProperty(key);
            if (getData) {
                try {
                    return JSON.parse(getData);
                } catch (e) {
                    return getData;
                }
            }
            return getData;
        } catch (e) {
            return false;
        }
    }
    getValues() {
        return this.db.getProperties();
    }
    setValue(key, value) {
        if (typeof value == "object"){
            value = (JSON.stringify(value, null, 2));
        }
        return this.db.setProperty(key, value);
    }
    setValues(value) {
        return this.db.setProperties(value)
    }
    delete(key) {
        try {
            return this.db.deleteProperty(key);
        } catch (e) {
            return false;
        }
    }
    deletes() {
        return this.db.deleteAllProperties();
    }
}