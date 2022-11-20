//Get Story (URL/link AND Title), Author, Score, and Comments

// {
//     "by": "rbanffy",
//     "descendants": 7,
//     "id": 33673517,
//     "kids": [],
//     "score": 121,
//     "time": 1668885125,
//     "title": "Investigating why Steam started picking a random font",
//     "type": "story",
//     "url": "http://blog.pkh.me/p/35-investigating-why-steam-started-picking-a-random-font.html"
//     }

//link for top 500 stories
//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

//link to get stories by id (will list objects/keys for each story)
//https://hacker-news.firebaseio.com/v0/item/(story ID goes here).json?print=pretty

//URL on comments page
//https://news.ycombinator.com/item?id=(story ID goes here)

/*
title = url/title
author = by
story score = score
comments = url/descendents
*/

let getStories = async() => {
    let response = await fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`));
    let data = await response.json();
    console.log(data);
    for (let i = 0; i < 100; i++){
        fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`))
    .then(function(response2){
        return response2.json();
        
    })
    .then(function(data){ 
        let orderedList = $(".ordered-list");
        let linkedTitle = $(`<li>Title: <a href=${data.url} target="_blank" style="color: 0077b6"> ${data.title}</a></li>`);
        let author = (`Author: ${data.by}<br>`);
        let storyScore = (`Story Score: ${data.score} points`)
        let linkedComments = $(`<p>Comments: <a href="https://news.ycombinator.com/item?id=${data.id}" target="_blank" style="color: 0077b6"> ${data.descendants}</a></p>`);
        
        orderedList.append(linkedTitle);
        orderedList.append(author);
        orderedList.append(storyScore);
        orderedList.append(linkedComments);
    })
    }
}
getStories();
