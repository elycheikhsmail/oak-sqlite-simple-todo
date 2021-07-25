//import client from "../config/db_sqlite_client.ts";
import todoSql from "./todo-sqlite-sql.ts";
import { DB as DbClient } from "./deps.ts";

class TodoService {
  // tn = tablenale
  tn = "todo";

  async getAll(dbClient:DbClient) {
    const sql = todoSql.getAll();
    const rows = await [...dbClient.query(sql).asObjects()];
    return rows;
  }

  async save(dbClient:DbClient, text: string) {
    const sql = todoSql.save();
    try {
      const saved = await dbClient.query(sql, [text]);
      console.log("saved : ", saved);
      return dbClient.lastInsertRowId;
    } catch (error) {
      console.log({ error });
    }
  }

  async delete(dbClient:DbClient, _id: string) {
    const sql = todoSql.delete();
    try {
      const deleted = await dbClient.query(sql, [_id]);
      console.log("deleted : ", deleted);
      return dbClient.changes;
    } catch (error) {
      console.log({ error });
    }
  }


  async deleteAll(dbClient:DbClient):Promise<number> {
    const sql = todoSql.deleteAll()
    try {
      const deleted = await dbClient.query(sql);
      console.log("deleted : ", deleted);
      return dbClient.changes;
    } catch (error) {
      console.log({ error });
      return -1
    }
  }


  async update(dbClient:DbClient, _id: string, text: string) {
    const sql = todoSql.update();

    try {
      const deleted = await dbClient.query(sql, [text, _id]);
      console.log("deleted : ", deleted);
      return dbClient.changes;
    } catch (error) {
      console.log({ error });
    }
  }
}

const todoService = new TodoService();
export default todoService;
