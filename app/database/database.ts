import SqlLite, { SQLiteDatabase } from "react-native-sqlite-storage";

export default class SQLConnect {
  public db: SQLiteDatabase;

  constructor(private nameDb: string = "MobileDB") {
    this.db = SqlLite.openDatabase(
      {
        name: this.nameDb,
        location: "default",
      },
      () => {},
      (err) => console.log(err) // Error al conectarse
    );
  }

  createTable(nameTable: string, fieldSql: string) {
    this.db.transaction((tx: SqlLite.Transaction) =>
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${nameTable} ${fieldSql} ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`
      )
    );
  }

  async insert(data: any, tableField: string) {
    if (data.length <= 0) return false;
    let valuesMap = "";
    data.map(
      (item: any, i: number) =>
        (valuesMap += "?" + (i < data.length - 1 ? ", " : ""))
    );
    return await this.db.transaction((tx: SqlLite.Transaction) =>
      tx.executeSql(`INSERT INTO ${tableField} VALUES (${valuesMap})`, [
        ...data,
      ])
    );
  }

  async select(selectFields: string = "*", filter: string = "") {
    return await this.db.transaction((tx: SqlLite.Transaction) =>
      tx.executeSql(`SELECT ${selectFields} FROM ${filter}`)
    );
  }
}
