class Data {
    static app = "https://raw.githubusercontent.com/Rafisto/postsdata/main"
    static fetchAnnouncements = Data.app + "/general/__announcements__.json";
    static fetchBook = Data.app + "/general/book.md";
    static fetchPoemList = Data.app + "/poems/__list__.json";
    static fetchPoem = Data.app + "/poems/json/";
    static fetchArticleList = Data.app + "/posts/__list__.json";
    static fetchArticle = Data.app + "/posts/json/";
    static fetchArticleImage = Data.app + "/posts/thumbnails/";
    static fetchArticleContentImage = Data.app + "/posts/";
    static homeBannerImage = Data.app + "/general/images/star.jpg";
    static fetchGalleryImageList = Data.app + "/gallery/__list__.json";
    static fetchGalleryImage = Data.app + "/gallery/";

    static fetchAccopmlishments = Data.app + "/general/accomplishments.md";	
}

export default Data