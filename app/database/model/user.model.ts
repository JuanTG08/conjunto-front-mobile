import { IUserDB } from "../../shared/interfaces/IUserDB";
import SQLConnect from "../database";

export default class UserModel {
  private conn: SQLConnect;
  private tableUser: string = "UserInfo";
  constructor() {
    this.conn = new SQLConnect();
    this.conn.createTable(
      this.tableUser,
      "( `_id` VARCHAR(128) NOT NULL , `name` VARCHAR(64) NOT NULL , `last_name` VARCHAR(64) NOT NULL , `role_id` VARCHAR(128) NOT NULL , `role_name` VARCHAR(128) NOT NULL , PRIMARY KEY (`_id`))"
    );
    // [data._id, data.name, data.last_name, data.role._id, data.role.name];
  }

  insert(data: IUserDB) {
    this.conn
      .insert(
        [data._id, data.name, data.last_name, data.role._id, data.role.name],
        this.tableUser
      )
      .then((res) => console.log(res)) // Resultado de la operación
      .catch((err) => console.log(err)) // Error de la operación
      .finally(() => this.conn.db.close()); // Finalizamos la operación
  }
}
