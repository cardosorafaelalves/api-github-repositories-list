import { Router } from 'express';
import GithubReposController from './app/controllers/GithubReposController';

class Routes {
    constructor() {
        this.routes = new Router();
        this.createroutes();
    }

    createroutes() {
        this.routes.get('/', (req, res) => res.send('API GITHUB REPOSITORIES LIST'));
        this.routes.get('/get-github-repos', GithubReposController.getGithubRepositories);
    }
}

export default new Routes().routes;