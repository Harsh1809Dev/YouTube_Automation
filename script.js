require("chromedriver");

const wd = require("selenium-webdriver");
const browser = new wd.Builder().forBrowser('chrome').build();

async function open_browser(){
	await browser.get("https://youtube.com");

async function main(){
    //await browser.get("https://youtube.com");
    await open_browser();
    // await browser.wait(wd.until.elementLocated(wd.By.css("")));
    // let sign_button = await browser.findElements(wd.By.css("role['button']"));
    // console.log(sign_button);
    // await sign_button.click();
    // // console.log(sign_button.size);


    

 

    	//for searching
  	await browser.wait(wd.until.elementLocated(wd.By.css("#search-icon-legacy")));
    	let find_button = await browser.findElement(wd.By.css("#search-icon-legacy"));
	await browser.wait(wd.until.elementLocated(wd.By.css("input.ytd-searchbox")));
	let search_button = await browser.findElement(wd.By.css("input.ytd-searchbox"));
    	// await browser.wait(wd.until.elementLocated(wd.By.xpath('//*[@id="search"]')));
	// let search_button = await browser.findElement(wd.By.xpath('//*[@id="search"]'));
	await search_button.click();
	await search_button.sendKeys("rakazone gaming");
	await find_button.click();
	
	//for playing first video
	let videos_list = [];
	let video_url = [];"ytd-searchbox-spt
	async function get_video_list(){
		await browser.wait(wd.until.elementLocated(wd.By.css("a.yt-simple-endpoint.style-scope.ytd-video-renderer")));
		videos_list = await browser.findElements(wd.By.css("a.yt-simple-endpoint.style-scope.ytd-video-renderer"));
		for(let i = 0; i< videos_list.length;i++){
			video_url[i] = await videos_list[i].getAttribute("href");
		}
		console.log(video_url.length);
	}
	await setTimeout(get_video_list, 5000);
		

	
	
	
	
	
	
	
	
	
	
	
	//=====================================================================

    	//for playing first video
	// await browser.wait(wd.until.elementLocated(wd.By.css("ytd-vertical-list-renderer.style-scope.ytd-vertical-list-renderer")));
	// let videos = await browser.findElments(wd.By.css("ytd-vertical-list-renderer.style-scope.ytd-vertical-list-renderer"));
	// console.log(videos.length);
	// await videos[1].click();
    	// await browser.wait(wd.until.elementLocated(wd.By.xpath('/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]')));
    	// let first_video = await browser.findElement(wd.By.xpath('/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]'));
    	// await first_video.click();

	    //for signing
	    //await browser.wait(wd.until.elementLocated(wd.By.xpath('//*[@id="buttons"]/ytd-button-renderer/a')));
	    //let sign = await browser.findElement(wd.By.xpath('//*[@id="buttons"]/ytd-button-renderer/a'));
	    //await sign.click();
	    //for email
	    //await browser.wait(wd.until.elementLocated(wd.By.xpath('//*[@id="identifierId"]')));
	    //let email_id = await browser.findElement(wd.By.xpath('//*[@id="identifierId"]'));
	    //await email_id.click();
	    //await email_id.sendKeys("nibbaXnibbi6969@gmail.com");
	    //for next button
	    //await browser.wait(wd.until.elementLocated(wd.By.css(".VfPpkd-RLmnJb")));
	    //let next = await browser.findElement(wd.By.css(".VfPpkd-RLmnJb"));
	    //await next.click();
	    //for password
	    //await browser.wait(wd.until.elementLocated(wd.By.xpath('//*[@id ="password"]/div[1]/div / div[1]/input')));
	    //let password = await browser.findElement(wd.By.xpath('//*[@id ="password"]/div[1]/div / div[1]/input'));
	    //await password.sendKeys("N1bba69N1bb1");
	    //await browser.wait(wd.until.elementLocated(wd.By.xpath('//*[@id ="passwordNext"')));
	    //let next_password = await browser.findElement(wd.By.xpath('//*[@id ="passwordNext"'));
	    //await next_password.click();

	    // //for like
	    // await browser.wait(wd.until.elementLocated(wd.By.xpath('//*[@id="top-level-buttons"]/ytd-toggle-button-renderer[1]/a')));
	    // let like = await browser.findElement(wd.By.xpath('//*[@id="top-level-buttons"]/ytd-toggle-button-renderer[1]/a'));
	    // await like.click();

	    // //for subscribe
	    // await browser.wait(wd.until.elememtLocated(wd.By.xpath('//*[@id="button"]')));
	    // let susbcribe = await browser.findElement(wd.By.xpath('//*[@id="button"]'));
	    // await susbcribe.click();
	   
}
main();
