const app = "https://raw.githubusercontent.com/Rafisto/postsdata/main";
const url = (part: String) => {
    return app + part;
}

class APILinks {
    static fetchArticles = url("/projects/articles/__list__.json");
    static fetchArticle = url("/projects/articles/");
    static fetchArticleContentImage = url("/projects/articles/images/");
    static fetchAccopmlishments = url("/general/accomplishments");
}

export default APILinks