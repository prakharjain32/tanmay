if(localStorage.getItem('cartid')!==null){
	digitalData.cartId=localStorage.getItem('cartid')

}
else{
	
	
	digitalData.cartId=Math.floor(Math.random() * 10000);
	localStorage.setItem('cartid',digitalData.cartId)
}

if(localStorage.getItem('userid')!==null){
	digitalData.customer={}
	digitalData.customer.userId=localStorage.getItem('userid')
}
if(localStorage.getItem('userid')!==null)
digitalData.customer.loginStatus='Logged in'
else{
	digitalData.customer={}
	digitalData.customer.loginStatus='Logged out'
}
if(window.location.pathname=="/geo/login.html")
{
	
	if(localStorage.getItem('userid')!==null){
	digitalData.customer.userId=localStorage.getItem('userid')

}
else{
	
	
	digitalData.customer.userId=Math.floor(Math.random() * 1000000);
	localStorage.setItem('userid',digitalData.customer.userId)
}
	
}
if(window.location.pathname=="/geo/checkout/confirmreceipt4.html")
{

	digitalData.purchaseId=Math.floor(Math.random() * 10000);

	
}


if(window.location.pathname=="/geo/search/searchresults.html")
{

	digitalData.searchTerm=window.location.href.split('?')[1].split('=')[1];
	digitalData.searchResults=Math.floor(Math.random() * 100)
	if(digitalData.searchTerm=="null")
	{
		digitalData.searchResults=0
		digitalData.nullSearch=true
	}
	
	
}
if(digitalData.page.pageType=="Product Detail"){
	if(document.referrer.indexOf('searchresults')>-1)
		digitalData.findingMethod='Search'
	
	if(document.referrer.indexOf('intcmp')>-1)
		digitalData.findingMethod='Homepage Banner'
		digitalData.findingMethod='Homepage Banner'
}
if(window.location.pathname=="/geo/company/newsletter2.html")
{

	digitalData.newsLetters='Fashion|Travel|Business|Offers'
	
	
}