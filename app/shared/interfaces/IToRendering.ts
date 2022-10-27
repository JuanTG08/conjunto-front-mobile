export interface IToRendering {
    renderPage: string;
    next?: any;
    method: string;
}

export interface IToRenderingParams {
    next?: any;
    method?: string;
    toPage: string;
}