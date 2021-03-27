require("chromedriver");

const wd = require("selenium-webdriver");
const browser = new wd.Builder().forBrowser('chrome').build();

async function open_browser(){
	await browser.get("https://youtube.com");
}

async function search(channel_name){
	await browser.wait(wd.until.elementLocated(wd.By.css(".ytd-searchbox-spt")));
	let search_box_arr = await browser.findElements(wd.By.css(".ytd-searchbox-spt"));
	let search_button = await search_box_arr[0].findElement(wd.By.css("#search"));
	await search_button.click();
	await search_button.sendKeys(channel_name);
	await browser.wait(wd.until.elementLocated(wd.By.css("#search-icon-legacy")));
	let find_button = await browser.findElement(wd.By.css("#search-icon-legacy"));
	find_button.click();
}	

async function get_video_list(){
	await browser.wait(wd.until.elementLocated(wd.By.css("a.yt-simple-endpoint.style-scope.ytd-video-renderer")));
	let videos_list = await browser.findElements(wd.By.css("a.yt-simple-endpoint.style-scope.ytd-video-renderer"));
	console.log(videos_list.length);
}

async function main(){
    await open_browser();
    let channel_name = process.argv[2];
    await search(channel_name);
    let video_list = await get_video_list();
}
main();
