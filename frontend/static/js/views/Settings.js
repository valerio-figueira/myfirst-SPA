import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    /*async is useful to be used in server-side (29:00 min)*/
    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>Manage your privacy and configuration.</p>
        <p>
            <a href="/" data-link>Back to Dashboard</a>.
        </p>
        `;
    }
}