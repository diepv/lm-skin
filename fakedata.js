var possibleContentTypes = ["news","youtube","movie","series","sports","instructional","foreign"];
//var possibleContentFeatures = ["publisher","date","description"];

var possiblePublishersNews = ["nytimes","huffington post","bloomberg business","vlogbrothers","espn","nickelodeon"];
var possiblePublishersMusic = ["Horse Face","Relaxing New Age Music Channel","Replay Records"];
var possiblePublishersYoutube = ["MITOpenCourseWare","MinutePhysics","ArtAnimationMusic"];
var possiblePublishersMovie = ["Dreamworks","Pixar","Disney","NBC"];
var possiblePublishersSeries = ["Spongebob Squarepants","Brooklyn Nine-Nine","Rick and Morty"];
var possiblePublishersSports =["Tennis","Soccer","Boxing","Chess"];
var possiblePublishersInstructional = ["BollyX", "Khan Academy","Instructables"];
var possiblePublishersForeign = ["Crayon Shin-Chan", "Old Boy","Sound of the Desert"];

var possibleDescriptionsNews = ["Where the conversation begins. Follow for breaking news, special reports, http://NYTimes.com  homepage links and RTs of our journalists.","We are dedicated to maintaining a respectful community that actively engages in lively discussions about news stories and blog posts. Please keep the following in mind when writing your comments.", "Welcome to the official Bloomberg TV YouTube page, featuring the latest global business and markets news, as well as exclusive interviews.\
For more videos visit: http://www.bloomberg.com/video/\
LIVE STREAM Bloomberg TV here: http://bloomberg.com/tv", "Raising nerdy to the power of awesome.","The Worldwide Leader in Sports","The official YouTube channel of Nickelodeon USA!\
Nickelodeon, now in its 35th year, has been the number-one entertainment brand for kids with its wide range of original cartoons, sitcoms, feature films, award shows and more! From popular series like Spongebob Squarepants, Teenage Mutant Ninja Turtles, Breadwinners, and Sam & Cat, to online games, apps, and radio on nick.com, this is the place for quality content and fun!"];

var possibleDescriptionsMusic = ["With these criteria and hours of careful research, we've put together a playlist to make you a superhuman.* It's important to note that you should listen to this music at low a volume to keep it from dominating your attention. Give it a try and see if you can get into 'the flow'.", "Recreate the feeling of being in an exclusive yoga studio with these soothing songs to help you get the most from your yoga workout. ", "You’re having a party, you say? Not sure what to cue up on your iPhone? Rest assured, we have you covered. In fact, we’re a little worried that our playlist of the 100 greatest party songs ever recorded by human beings may actually cause your dance floor to spontaneously combust in a firework explosion of pure joy and body-moving ecstasy. That’s how good we think it is."];

var possibleDescriptionsYoutube = ["The mission of MIT is to advance knowledge and educate students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century.\
The Institute is committed to generating, disseminating, and preserving knowledge, and to working with others to bring this knowledge to bear on the world's great challenges. MIT is dedicated to providing its students with an education that combines rigorous academic study and the excitement of discovery with the support and intellectual stimulation of a diverse campus community. We seek to develop in each member of the MIT community the ability and passion to work wisely, creatively, and effectively for the betterment of humankind.",
	"Simply put: cool physics and other sweet science.\
	'If you can't explain it simply, you don't understand it well enough.'\
~Rutherford via Einstein? (wikiquote) \
Created by Henry Reich", "This channel is all about art and animation !\
If you are an up-growing artist, is not getting the proper youtube exposure and wants the world to see your talent!\
Send up your videos showcasing your skills, if the admin likes it, your video will be uploaded here in front of 5000+ subscribers !\
Message the link to your video to me on youtube !"];

var possibleDescriptionsMovie = ["DreamWorks Studios also known as DreamWorks SKG, DreamWorks Pictures, or simply DreamWorks, is an American film production company which produces and develops films, television programming, and video games.", "Pixar Animation Studios, or simply Pixar, is an American computer animation film studio based in Emeryville, California. ","The Walt Disney Company, commonly known as Disney, is an American diversified multinational mass media corporation headquartered at the Walt Disney Studios in Burbank, California. ","The National Broadcasting Company is an American commercial broadcast television and radio network. It is headquartered in the Comcast Building in New York City's Rockefeller Center, with additional major offices near Los Angeles and in Chicago."];

var possibleDescriptionsSeries = ["A square yellow sponge named SpongeBob SquarePants lives in a pineapple with his pet snail, Gary, in the city of Bikini Bottom on the floor of the Pacific Ocean. ","Detective Jake Peralta, a talented and carefree cop with the best arrest record, has never had to follow the rules too closely or work very hard. ","After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. "];

var possibleDescriptionsSports = ["Wawrinka Wins Rotterdam Title","Ozil, Cazorla, Giroud Lead Arsenal","Brandon Adams\
Adams Advances To Semis","Magnus Carlsen Retains the World Champion's title"];

var possibleDescriptionsInstructional = ["BOLLYX is a high intensity Bollywood cardio workout that's coming to a gym near you. Move to the heart pumping beats of Bollywood, get ready to feel that muscle burn and unleash your inner swagger.","Our mission to provide a world-class education for anyone, anywhere.\
All Khan Academy content is available for free at www.khanacademy.org.","Instructables is a place that lets you explore, document, and share your DIY maker creations.\
Explore. Share. Make.",]

var possibleDescriptionsForeign = ["Crayon Shin-chan (クレヨンしんちゃん, Kureyon Shin-chan), also known as Shin Chan, is a Japanese manga series written and illustrated by Yoshito Usui.","After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.","Sound of the Desert is a 2014 Chinese television series based on the historical romance novel Ballad of the Desert by Tong Hua."];

var getDateCountArray = function(slotsNeeded){
	var arr = [];
	for(var i=0;i<=slotsNeeded;i++){
		var rand= Math.random();
		var d = rand * (10-1) + 1
		arr.push(d.toString());
	}
	return arr;
};


var constructData = function(){
	var finalJSON = {
		name:"Content",
		children:[]
	};
	possibleContentTypes.forEach(function(contentType){
		var typeData = {name:contentType.toUpperCase(),children:[]};
		var publisher, description, date;
		switch(contentType){
			case "news":
				publisher = possiblePublishersNews;
				description = possibleDescriptionsNews;
				break;
			case "youtube":
				publisher = possiblePublishersYoutube;
				description = possibleDescriptionsYoutube;
				break;
			case "movie":
				publisher = possiblePublishersMovie;
				description = possibleDescriptionsMovie;
				break;
			case "series":
				publisher = possiblePublishersSeries;
				description = possibleDescriptionsSeries;
				break;
			case "sports":
				publisher = possiblePublishersSports;
				description = possibleDescriptionsSports;
				break;
			case "instructional":
				publisher = possiblePublishersInstructional;
				description = possibleDescriptionsInstructional;
				break;
			case "foreign":
				publisher = possiblePublishersForeign;
				description = possibleDescriptionsForeign;
				break;
		}

		date = getDateCountArray(publisher.length);
		publisher.forEach(function(pubber,index){
			var node = {name:pubber,publisher:pubber,description:description[index],date:date[index]};
			typeData.children.push(node);
		});
		finalJSON.children.push(typeData);
	});
	return finalJSON;
};

$(document).ready(function(){
	var s = constructData();
	$(".show").html(JSON.stringify(s));
});




