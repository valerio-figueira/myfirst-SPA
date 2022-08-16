import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    /*async is useful to be used in server-side (29:00 min)*/
    async getHtml() {
        return `
        <h1>Welcome Back, Dom</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit commodi enim nesciunt praesentium. Eveniet beatae quisquam at voluptatem fugit? Quidem illum natus consequatur ab, at ipsum officiis sunt voluptas?</p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
        `;
    }
}