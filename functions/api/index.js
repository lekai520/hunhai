export async function onRequestPost({ request }) {
  const targetUrl = "https://www.kdocs.cn/api/v3/ide/file/cuKC209JI9W5/script/V2-6VuED5YIDMewZp4dE6buj9/sync_task";
  try {
    const bodyText = await request.text();
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: bodyText
    });
    return new Response(await res.text(), {
      status: res.status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    return Response.json({ err: e.toString() }, { status: 500 });
  }
}
