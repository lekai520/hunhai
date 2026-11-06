export async function onRequestPost() {
  return Response.json({shi:["测试成功"]}, {
    headers: {"Access-Control-Allow-Origin":"*"}
  })
}
