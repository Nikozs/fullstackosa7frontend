
const puppeteer = require("puppeteer");

describe("blogform", () => {
	it("writes title and creates screenshot", async () => {

		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto("http://localhost:3000/create");
		await page.waitFor(1000);
		await page.click("input[name=\"newTitle\"]");
		await page.keyboard.type("testiotsikko2");
		await page.screenshot({ path: "create2.png" });

		await browser.close();
	});

	describe("loginform", () => {
		it("writes username and creates screenshot", async () => {
			const browser = await puppeteer.launch();
			const page = await browser.newPage();
			await page.goto("http://localhost:3000/");
			await page.waitFor(1000);
			await page.click("button");
			await page.click("input[name=\"username\"]");
			await page.keyboard.type("something");
			await page.screenshot({ path: "login.png" });

			await browser.close();
		});

		describe("blog app", () => {
			it("renders main page", async () => {
				const browser = await puppeteer.launch();
				const page = await browser.newPage();
				await page.goto("http://localhost:3000");
				const textContent = await page.$eval("body", el => el.textContent);

				expect(textContent.includes("Blog")).toBe(true);
			});
		});

		describe("blog app", () => {
			it("renders Users", async () => {
				const browser = await puppeteer.launch();
				const page = await browser.newPage();
				await page.goto("http://localhost:3000/users");
				const textContent = await page.$eval("body", el => el.textContent);

				expect(textContent.includes("Users")).toBe(true);
			});
		});

		describe("blog app", () => {
			it("renders Bloglist", async () => {
				const browser = await puppeteer.launch();
				const page = await browser.newPage();
				await page.goto("http://localhost:3000/blogs");
				const textContent = await page.$eval("body", el => el.textContent);

				expect(textContent.includes("Blogs")).toBe(true);
			});
		});
	});
});