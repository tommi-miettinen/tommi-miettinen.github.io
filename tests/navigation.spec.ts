import { test, expect } from "@playwright/test";

test.describe("Navigating from anchor tag works", () => {
  test("finds the anchor tag and scrolls to the element", async ({ page }) => {
    await page.goto("http://localhost:5173");
    const anchors = await page.locator("a").all();

    for (const anchor of anchors) {
      const href = await anchor.getAttribute("href");

      if (!href!.startsWith("#")) continue;

      const id = href!.substring(1);

      const element = page.locator(`#${id}`);
      await element.scrollIntoViewIfNeeded();

      const isInViewport = await element.evaluate((el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
      });

      expect(isInViewport).toBe(true);
    }
  });
});
