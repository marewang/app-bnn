import { getPool } from './_utils/db.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  try {
    const pool = getPool();
    const meta = await pool.query('select now() as now, current_database() as db');
    let count = { n: null }, tableOk = true;
    try {
      const r = await pool.query('select count(*)::int as n from asns');
      count = r.rows[0];
    } catch (e) {
      tableOk = false;
    }
    res.statusCode = 200;
    res.end(JSON.stringify({
      ok: true,
      db: meta.rows[0].db,
      now: meta.rows[0].now,
      table_asns_exists: tableOk,
      asns_count: count.n
    }));
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, error: e.message }));
  }
}
