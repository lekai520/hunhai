export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

export async function onRequestPost({ request }) {
  const targetUrl = "https://www.kdocs.cn/api/v3/ide/file/cuKC209JI9W5/script/V2-Gb28DdbX3QGOcRKgdr8d9/sync_task";
  const token = "7bxR7Wei96eY0UXB9ogLCN";
  try {
    const payload = { Context: { argv: {} } };
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "AirScript-Token": token
      },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (e) {
    return Response.json({ error: e.toString() }, { status: 500 });
  }
}
