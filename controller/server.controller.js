import { pool } from "../config/database.config.js";

pool.connect;

//#region CRUD

export const createServer = async (req, res) => {
  const { name, maxPlayer, wipeType, wipeDay, wipeTime } = req.body;
  console.log(
    "🚀 ~ file: server.controller.js:9 ~ createServer ~ req.body:",
    req.body
  );

  let result = null;
  await pool
    .query(
      "INSERT INTO server (name, max_player, wipe_type, wipe_day, wipe_time ) VALUES ($1, $2, $3, $4, $5);",
      [name, maxPlayer, wipeType, wipeDay, wipeTime]
    )
    .then((_response) => {
      result = `✅ server ${name} successfully added  ✅`;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return res.json(result);
};

export const getAllServer = async (req, res) => {
  let result = null;
  await pool
    .query("SELECT * FROM server")
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const getServerByName = async (req, res) => {
  const { name } = req.params;

  let result = null;
  await pool
    .query("SELECT * FROM server WHERE name = $1;", [name])
    .then((res) => {
      result = res.rows;
    })
    .catch((error) => console.log(error));
  return res.json(result);
};

export const updateServerByName = async (req, res) => {
  const { name } = req.params;
  const { newName, maxPlayer, wipeType, wipeDay } = req.body;

  let result = null;
  pool
    .query(
      "UPDATE server SET name = $1, max_player = $2, wipe_type = $3, wipe_day = $4 WHERE name = $5;",
      [newName, maxPlayer, wipeType, wipeDay, name]
    )
    .then((_res) => {
      result = `✅ server ${name} successfully modified  ✅`;
    })
    .catch((error) => {
      console.log(error);
      result = `🚨 server ${name} wasn't updated  🚨`;
    });
  return res.json(result);
};

export const deleteServerById = async (req, res) => {
  const { id } = req.params;

  let result = null;
  await pool
    .query("DELETE FROM server WHERE id = $1;", [id])
    .then((res) => {
      result = `✅ server ${id} successfully deleted  ✅`;
    })
    .catch((error) => console.error(error));
  return result;
};
//#endregion
