use crate::server::context::Context;
use crate::server::request::IncomingRequest;
use crate::server::response;
use crate::server::response::ResponseResult;

pub fn get (_req: IncomingRequest, ctx: Context<'_>) -> ResponseResult {
    let body = ctx.global.startup_time.to_string();
    Ok(response::send(body))
}
