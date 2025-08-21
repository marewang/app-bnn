import { getPool } from './_utils/db.js';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.method !== 'POST') { res.statusCode = 405; res.end(JSON.stringify({ error: 'Use POST' })); return; }
  try {
    const pool = getPool();
    await pool.query(`
      CREATE TABLE IF NOT EXISTS asns (
        id BIGSERIAL PRIMARY KEY,
        nama TEXT,
        nip TEXT,
        tmt_pns DATE,
        riwayat_tmt_kgb DATE,
        riwayat_tmt_pangkat DATE,
        jadwal_kgb_berikutnya DATE,
        jadwal_pangkat_berikutnya DATE,
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
    `);
    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, error: e.message }));
  }
}
