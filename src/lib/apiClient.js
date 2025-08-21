export async function listASN() {
  const r = await fetch("/api/asn");
  if (!r.ok) throw new Error(`listASN failed: ${r.status}`);
  return r.json();
}

export async function createASN(payload) {
  const r = await fetch("/api/asn", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`createASN failed: ${r.status}`);
  return r.json();
}

export async function updateASN(id, payload) {
  const r = await fetch(`/api/asn/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) {
    let msg = ""; try { msg = await r.text(); } catch {}
    throw new Error(`updateASN failed: ${r.status} ${msg}`);
  }
  return r.json();
}

export async function deleteASN(id) {
  const idNum = Number(id);
  if (!Number.isInteger(idNum) || idNum <= 0) {
    throw new Error(`deleteASN invalid id: ${id}`); // cegah URL salah
  }
  const r = await fetch(`/api/asn/${idNum}`, { method: "DELETE" });
  if (!r.ok) {
    let msg = ""; try { msg = await r.text(); } catch {}
    throw new Error(`deleteASN failed: ${r.status} ${msg}`);
  }
  return true;
}

