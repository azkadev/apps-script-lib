var db = new minidb();

async function test(){
 
    var getData = db.getValue("key");
    console.log(getData);
    db.setValue("key", "new_data");
    db.delete("key");
    db.deletes();
}