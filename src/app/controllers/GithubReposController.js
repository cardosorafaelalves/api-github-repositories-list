import GithubApiService from '../services/GihubApiService';

class GithubReposController {

    async getGithubRepositories(req, res) {

        const { user } = req.query;
        const uri = `users/${user}/repos`;

        const response = await GithubApiService.callApiGet(uri);

        if (!response) {
            return res.status(400).json({ status: false, message: 'Houve um erro ao obter os dados' });
        }
        
        return res.status(200).json({ status: true, data: response});        
    }

}

export default new GithubReposController();