
import { apiGithub } from './ApiService';

class GihubApiService {

    async callApiGet(uri) {

        try {
            const response = await apiGithub.get(uri);  
            return response.data;

        } catch (error) {
            return false;
        } 

    }
}

export default new GihubApiService();