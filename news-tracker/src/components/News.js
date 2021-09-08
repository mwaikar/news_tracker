import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Alex Mitchell",
            "title": "'Pan-dimwits': Jimmy Kimmel says the unvaxxed don't deserve ICU beds - New York Post ",
            "description": "Where’d you get your degree, Jimbo? ABC late-night host Jimmy Kimmel took a shot at unvaccinated Americans on air Tuesday, saying they shouldn’t be admitted to ICU beds. Ranting about i…",
            "url": "https://nypost.com/2021/09/08/jimmy-kimmel-says-unvaxxed-americans-dont-deserve-icu-beds/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/09/jimmy-kimmel-icu-covid-03.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-09-08T18:14:00Z",
            "content": "Where’d you get your degree, Jimbo?\r\nABC late-night host Jimmy Kimmel took a shot at unvaccinated Americans on air Tuesday, saying they shouldn’t be admitted to ICU beds.\r\nRanting about inflated COVI… [+1641 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Ivan Penn",
            "title": "Biden Offers Ambitious Blueprint for Solar Energy - The New York Times",
            "description": "The Energy Department analysis provides only a broad outline, and many of the details will be decided by congressional lawmakers.",
            "url": "https://www.nytimes.com/2021/09/08/business/energy-environment/biden-solar-energy-climate-change.html",
            "urlToImage": "https://static01.nyt.com/images/2021/09/08/business/08biden-solar/08biden-solar-facebookJumbo-v2.jpg",
            "publishedAt": "2021-09-08T18:06:23Z",
            "content": "One thing going for the administration is that the cost of solar panels has fallen substantially over the last decade, making them the cheapest source of energy in many parts of the country. The use … [+2305 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Colin Moynihan",
            "title": "Nxivm Leader's Top Deputy Sentenced to 42 Months in Prison - The New York Times",
            "description": "Nancy Salzman, the Nxivm “prefect,” and Keith Raniere were closely linked. But in a letter to a judge, she portrayed herself as a dupe controlled by a “sex fiend.”",
            "url": "https://www.nytimes.com/2021/09/08/nyregion/nancy-salzman-nxivm-sentencing.html",
            "urlToImage": "https://static01.nyt.com/images/2021/09/08/nyregion/08salzman/08salzman-facebookJumbo.jpg",
            "publishedAt": "2021-09-08T18:02:01Z",
            "content": "In their sentencing memo to Judge Garaufis, they enumerated the crimes committed by Ms. Salzman, who served as Nxivms president and was known within the group as Prefect.\r\nShe had taken part in unlaw… [+1327 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Gaydos",
            "title": "Cam Newton: 'I have a lot of things I need to get off my chest' after Patriots release - Fox News",
            "description": "Cam Newton teased Wednesday some interesting remarks were coming as he wanted to get some things off his chest after being released by the New England Patriots before the start of the regular season.",
            "url": "https://www.foxnews.com/sports/cam-newton-remarks-patriots-release",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/10/Cam-Newton2.jpg",
            "publishedAt": "2021-09-08T17:38:33Z",
            "content": "Cam Newton teased Wednesday some interesting remarks were coming as he wanted to get some things off his chest after being released by the New England Patriots before the start of the regular season.… [+2292 chars]"
        }
    ];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        };
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News Tracker - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((article) => {
                        return (
                            <div key={article.url} className="col-md-4">
                                <NewsItem
                                    title={article.title}
                                    description={article.description}
                                    imageUrl={article.urlToImage}
                                    newsUrl={article.url}>
                                </NewsItem>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default News;
