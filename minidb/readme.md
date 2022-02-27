# Mini Database for google apps script

### Install
```bash
```

```bash
```


### QuickStart

```js
var db = new minidb.Minidb();
async function test(){
    var getData = db.getValue("key");
    console.log(getData);
    db.setValue("key", "new_data");
    db.delete("key");
    db.deletes();
}
```

## Docs

- Minidb(type); default = "user"

- getValue

    Parameters
    - key 
    - default_value == undefined

- getValues

- setValue

    Parameters
    - key 
    - value

- delete

    Parameters
    - key 

- deletes