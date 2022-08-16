import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    /*async is useful to be used in server-side (29:00 min)*/
    async getHtml() {
        return `
        <h1>Posts</h1>
        <p>You are viewing the posts!</p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
        `;
    }
}