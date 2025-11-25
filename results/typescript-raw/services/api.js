// Main API service class as default export
class ApiService {
    config;
    constructor(config) {
        this.config = config;
    }
    async get(endpoint) {
        const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
            headers: this.config.headers || {},
            signal: AbortSignal.timeout(this.config.timeout)
        });
        return {
            data: await response.json(),
            status: response.status,
            message: response.statusText
        };
    }
    async post(endpoint, data) {
        const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(this.config.headers || {})
            },
            body: JSON.stringify(data),
            signal: AbortSignal.timeout(this.config.timeout)
        });
        return {
            data: await response.json(),
            status: response.status,
            message: response.statusText
        };
    }
}
// Default export - the "problematic" pattern
export default ApiService;
// Named utility functions exported alongside the default
export const createApiConfig = (baseUrl) => ({
    baseUrl,
    timeout: 5000,
    headers: {
        'Accept': 'application/json'
    }
});
export const isSuccessResponse = (response) => {
    return response.status >= 200 && response.status < 300;
};
//# sourceMappingURL=api.js.map