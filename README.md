<div align="center">
    <a href="https://stark-beach-28782.herokuapp.com/">
        <img src="https://github.com/milesbowles/Match-Maker/blob/master/screenshots/screenshot.png" alt="Screenshot" width="800"/>
    </a>
</div>

# Match Maker

A compatibility-based "Match Maker" application — basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## How it works

Friends are stored as objects in the following format:

```js
    {
        name: "Chewy",
        picture: "http://image-link.jpg",
        scores: [
            4,
            5,
            4,
            3,
            4,
            2,
            4,
            5,
            4,
            4
        ]
    }
```

To determine most compatible friend, current user's scores are compared against those from other users, question by question to calculate the `totalDifference`.

     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**

> NOTE: Difference means absolute value of the differences. App will calculate both `5-3` and `3-5` as `2`.

The closest match will be the user with the least amount of difference.

## Built With

* [Express](https://expressjs.com/) - Routing
* [BodyParser](https://github.com/expressjs/body-parser) - Parsing middleware
* [JQuery](https://jquery.com/) - Event Handling & DOM manipulation
* [Materialize](http://materializecss.com/) - Front-end styling

#### Disclaimer

All content is scraped from [Curiosity.com](https://curiosity.com/)


#### Enjoy!