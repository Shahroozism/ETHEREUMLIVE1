$.getJSON("https://api.coingecko.com/api/v3/coins/ethereum?localization=True&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true",function(object){
  console.log(object);

var crypto= object.description.en;
var price = object.market_data.current_price.usd;
var highDay = object.market_data.high_24h.usd;
var lowDay = object.market_data.low_24h.usd;
var currentvolume = object.tickers[0].volume;
var time = object.tickers[0].timestamp;
var twentyfourpricechange = object.market_data.price_change_percentage_24h;
var symbol = "https://assets.coingecko.com/coins/images/279/small/ethereum.png";
$(".symbol").attr("src", symbol);

$(".price").append(price);
$(".crypto").append(crypto);
$(".highDay").append(highDay);
$(".lowDay").append(lowDay);
$(".currentvolume").append(currentvolume);
$(".time").append(time);
$(".twentyfourpricechange").append(twentyfourpricechange);
});



