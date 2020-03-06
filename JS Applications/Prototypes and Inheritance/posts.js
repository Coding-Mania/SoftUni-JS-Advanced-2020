function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}` + this.getComments();
        }

        getComments() {

            if (this.comments.length === 0) {
                return '';
            }

            return "\nComments:\n" + this.comments.reduce((acc, c) => {
                acc.push(` * ${c}`);
                return acc;
            }, []).join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
