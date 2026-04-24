import { test, expect } from "@playwright/test";

test("api request fixture demo", { tag: "@Smoke" }, async ({ request }) => {
  const response = await request.get(
    "https://reqres.in/api/collections/products/records?project_id=9890",
    {
      headers: {
        "x-api-key":
          "pro_962db067fb2120a9b651f046179829237bd003a79e9186f7d1e02618c5b7efd2",
      },
    },
  );
  expect(response.ok()).toBeTruthy();
});
