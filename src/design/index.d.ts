// Files with below extensions are processed by Webpack file-loader.
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
// Fix ts2307 for placeholder webpack loader
declare module 'placeholder-svg-loader?*';

declare module 'quill-mention';
interface Window {
  customPulldown(tagetdiv: string): void;
  customUpload(): void;
  customTabsLong(): void;
  customTabs(): void;
  customNavItem(tagetdiv: string): void;
  customSearchBar(): void;
}
