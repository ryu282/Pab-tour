const { getStore } = require("@netlify/blobs");
const { defaultCatalog, sanitizeCatalog } = require("./_catalog-data");

const store = getStore("rentcar-catalog");

exports.handler = async (event) => {
  try {
    if (event.httpMethod === "GET") {
      const catalog = await readCatalog();
      return json(200, { catalog });
    }

    if (event.httpMethod === "POST") {
      const adminSecret = getAdminSecret(event);
      if (!process.env.ADMIN_SECRET) {
        return json(500, { message: "Netlify 환경변수 ADMIN_SECRET 이 설정되지 않았습니다." });
      }

      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
        return json(401, { message: "관리자 인증에 실패했습니다." });
      }

      const payload = JSON.parse(event.body || "{}");
      if (payload.action === "verify") {
        return json(200, { message: "관리자 인증이 완료되었습니다." });
      }

      const catalog = sanitizeCatalog(payload.catalog);
      await store.setJSON("catalog", catalog);
      return json(200, { message: "카탈로그가 저장되었습니다.", catalog });
    }

    return json(405, { message: "허용되지 않은 메서드입니다." });
  } catch (error) {
    return json(500, {
      message: "카탈로그 처리 중 오류가 발생했습니다.",
      detail: error.message
    });
  }
};

async function readCatalog() {
  const savedCatalog = await store.get("catalog", { type: "json" });
  return sanitizeCatalog(savedCatalog || defaultCatalog);
}

function getAdminSecret(event) {
  return (
    event.headers["x-admin-secret"] ||
    event.headers["X-Admin-Secret"] ||
    ""
  ).trim();
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  };
}
