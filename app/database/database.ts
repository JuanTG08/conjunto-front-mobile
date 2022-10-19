import SqlLite, {
  ResultSet,
  SQLiteDatabase,
  Transaction,
} from "react-native-sqlite-storage";
import { IDataUpdateDB } from "../shared/interfaces/IDataDB";

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

  async select(tableField: string, selectFields: string = "*", filter: string = "") {
    let result: any = false;
    let error: boolean | string = false;
    await this.db.transaction((tx: SqlLite.Transaction) =>
      tx.executeSql(
        `SELECT ${selectFields} FROM ${tableField} WHERE ${filter}`,
        [],
        (tx: Transaction, results: ResultSet) => {
          const len = results.rows.length;
          if (len <= 0) return (error = "No se encontro nada");
          result = results.rows;
        },
        () => (error = "No se pudo acceder a los datos")
      )
    );
    return { result, error };
  }

  async update(
    tableField: string,
    dataUpdate: IDataUpdateDB[],
    filter: string
  ) {
    if (dataUpdate.length <= 0) return false;
    let valuesMap = "";
    dataUpdate.map(
      ({ colomn, value }: IDataUpdateDB, i: number) =>
        (valuesMap +=
          ` ${colomn} = ${value}` + (i < dataUpdate.length - 1 ? "," : ""))
    );
    return await this.db.transaction((tx: SqlLite.Transaction) =>
      tx.executeSql(`UPDATE ${tableField} SET ${valuesMap} WHERE ${filter}`)
    );
  }

  async delete(tableField: string, filter: string) {
    let result: any = false;
    let error: boolean | string = false;
    await this.db.transaction((tx: SqlLite.Transaction) =>
      tx.executeSql(
        `DELETE FROM ${tableField} WHERE ${filter}`,
        [],
        (tx: Transaction, results: ResultSet) => {
          result = "Se elimino correctamente"
        },
        () => (error = "No se pudo acceder a los datos")
      )
    );
    return { result, error };
  }
}
