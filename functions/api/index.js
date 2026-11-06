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

export async function onRequestPost() {
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
    const raw = await res.json();
    // 金山sync_task返回结构是 {data:{result:"xxx"}}，result才是你脚本return的json字符串
    const realData = JSON.parse(raw.data.result);
    return Response.json(realData, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
