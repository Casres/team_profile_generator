





class Engineer extends Employee {
    constructor() {
        this.GitHubUserName = '';
    };

    getGitHub() {
        return `www.github.com/${this.GitHubUserName}`;
    };

    getRole() {
        // this.getRole() = Engineer;
    };
}