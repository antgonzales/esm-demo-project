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
declare class ApiService {
    private config;
    constructor(config: ApiConfig);
    get<T>(endpoint: string): Promise<ApiResponse<T>>;
    post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>>;
}
export default ApiService;
export declare const createApiConfig: (baseUrl: string) => ApiConfig;
export declare const isSuccessResponse: <T>(response: ApiResponse<T>) => boolean;
//# sourceMappingURL=api.d.ts.map