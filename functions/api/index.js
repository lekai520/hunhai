export async function onRequestPost({ request }) {
  const targetUrl = "https://www.kdocs.cn/api/v3/ide/file/cuKC209JI9W5/script/V2-6VuED5YIDMewZp4dE6buj9/sync_task";
  try {
    const payload = await request.json();
    const newReq = new Request(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });
    const res = await fetch(newReq);
    // 原样返回金山的结果
    return new Response(res.body, {
      status: res.status,
      headers: res.headers
    });
  } catch (err) {
    return Response.json({error: err.message}, {status:500});
  }
}
