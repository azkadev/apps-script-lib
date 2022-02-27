/*
============================================================================
Licensed ( creator script ) :
GoogleSheet : @azkadev

ID:

1. MIgz3_PHZHDfCyYqvXf4l3qOF4qn-QYEF
2. 18cr79yjSN-3kIN2qLq1yjaDwOGKAj89R3Y_aFAly-KxyOIUsSpNXb7l3

https://www.youtube.com/channel/UCj9stNGVvQJspYMp8-lG_ng

============================================================================
*/
var gsheets = class Gsheets {

    constructor(sheet_id) {
        if (typeof sheet_id != "string") {
            throw {
                "message": "sheet id harus string"
            };
        }
        if (!sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        this.sheet_id = sheet_id;
    }

    getAll(range_name) {
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        return Sheets.Spreadsheets.Values.get(this.sheet_id, String(range_name)).values;
    }

    getUserRow(range_name, user_data) {
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }

        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }

        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return false;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^" + user_data + "$", "i");
                if (pola.exec(data[row][0])) {
                    return row + 2;
                }
            }
            return false;
        }
    }

    save(range_name, user_data, array_save, array_update, range_name_update) {

        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }

        if (!user_data) {
            return "User data is required Please Read My docs, example msg.from.id";
        }
        if (!array_save) {
            return "array_save is required Please Read My docs, example [msg.from.id, msg.from.username]";
        }
        if (!array_update) {
            return "array_update is required Please Read My docs, example [msg.from.id, msg.from.username]";
        }
        if (!range_name_update) {
            return "range_name_update is required Please Read My docs, example \"Sheet!A\"";
        }
        var rownum = this.getUserRow(range_name, user_data);
        if (rownum == 0) {
            var datauser = [
                array_save
            ];
            var valueRange = Sheets.newValueRange();
            valueRange.values = datauser;
            var result = Sheets.Spreadsheets.Values.append(valueRange, this.sheet_id, range_name, { valueInputOption: 'USER_ENTERED' });
        } else {
            var datauser = [
                array_update
            ];
            var rangeName = range_name_update.replace(/(:.*)/ig, "") + rownum + ":" + range_name_update.replace(/(.*:)/ig, "") + rownum;
            var valueRange = Sheets.newValueRange();
            valueRange.values = datauser;
            var result = Sheets.Spreadsheets.Values.update(valueRange, this.sheet_id, rangeName, { valueInputOption: 'USER_ENTERED' });
        }
    }

    allow(range_name, user_data, get_row_num, return_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return 0;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^" + user_data + "$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    return Number(data[row][return_row_num]);
                }
            }
            return 0;
        }
    }
    count(range_name, user_data, get_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }

        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example \"private\"";
        }
        var users = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!users) {
            return 0;
        } else {
            var x = 0;
            for (var row = 0; row < users.length; row++) {
                var pola = new RegExp("^" + user_data + "$", "i");
                if (pola.exec(users[row][get_row_num])) {
                    x = x + 1;
                }
            }
            return x;
        }
    }

    arrayToJson(data) {
        var result = {}
        for (x in data) {
            result[x] = data[x];
        }
        return result;
    }
    getRow(range_name, user_data, get_row_num, return_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return false;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^" + user_data + "$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var hasil = data[row][return_row_num];
                    return hasil;
                }
            }
            return false;
        }
    }
    getRows(range_name, user_data, get_row_num) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
            return false;
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^" + user_data + "$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var hasil = data[row];
                    return { ...hasil };
                }
            }
            return false;
        }
    }

    saveRow(range_name, user_data, get_row_num, new_data, range_name0) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        if (!new_data) {
            return "new_data data is required Please Read My docs, example msg.from.id";
        }
        if (!range_name0) {
            return "range_name0 is required Please Read My docs, example \"0\"";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {
        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^" + user_data + "$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var rownum = row + 2;
                    var datauser = [
                        [new_data]
                    ];
                    var rangeName = range_name0 + rownum;
                    var valueRange = Sheets.newValueRange();
                    valueRange.values = datauser;
                    var result = Sheets.Spreadsheets.Values.update(valueRange, this.sheet_id, rangeName, { valueInputOption: 'USER_ENTERED' });
                }
            };
        }
    }

    saveRows(range_name, user_data, get_row_num, new_data_array, range_name_update, range_name_update0) {
        if (!this.sheet_id) {
            return "Sheet id is required Please Read My docs, example \"1KAxctBF3qT8OiZXeA34eFYPYCft22e32e\"";
        }
        if (!range_name) {
            return "range name is required example \"Sheet!A2:Z\"";
        }
        if (!user_data) {
            return "Usee data is required Please Read My docs, example msg.from.id";
        }
        if (!new_data_array) {
            return "new_data_array data is required Please Read My docs, example msg.from.id";
        }
        if (!range_name_update) {
            return "range_name_update is required Please Read My docs, example \"0\"";
        }
        if (!range_name_update0) {
            return "range_name_update0 is required Please Read My docs, example \"0\"";
        }
        var data = Sheets.Spreadsheets.Values.get(this.sheet_id, range_name).values;
        if (!data) {

        } else {
            for (var row = 0; row < data.length; row++) {
                var pola = new RegExp("^" + user_data + "$", "i");
                if (pola.exec(data[row][get_row_num])) {
                    var rownum = row + 2;
                    var datauser = [
                        new_data_array
                    ];
                    var rangeName = range_name_update + rownum + ":" + range_name_update0 + rownum;
                    var valueRange = Sheets.newValueRange();
                    valueRange.values = datauser;
                    var result = Sheets.Spreadsheets.Values.update(valueRange, this.sheet_id, rangeName, { valueInputOption: 'USER_ENTERED' });
                }
            };
        }
    }


}

