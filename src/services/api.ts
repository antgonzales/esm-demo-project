// API service with default export class and named utilities
export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Main API service class as default export
class ApiService {
  private config: ApiConfig;
  
  constructor(config: ApiConfig) {
    this.config = config;
  }
  
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
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
  
  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
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

// Default export - comprehensive ES module pattern
export default ApiService;

// Named utility functions exported alongside the default
export const createApiConfig = (baseUrl: string): ApiConfig => ({
  baseUrl,
  timeout: 5000,
  headers: {
    'Accept': 'application/json'
  }
});

export const isSuccessResponse = <T>(response: ApiResponse<T>): boolean => {
  return response.status >= 200 && response.status < 300;
};