declare module "Doc" {
  export interface Renderer {
    displayName: string;
    names: [string];
    extension: string;
    aceMode: string;
    options: [OptionSpecification];
  }
}
