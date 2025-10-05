declare module 'juice/client' {
  interface JuiceOptions {
    applyAttributesTableElements?: boolean;
    applyHeightAttributes?: boolean;
    applyStyleTags?: boolean;
    applyWidthAttributes?: boolean;
    decodeStyleAttributes?: boolean;
    extraCss?: string;
    insertPreservedExtraCss?: boolean | string;
    inlinePseudoElements?: boolean;
    preserveFontFaces?: boolean;
    preserveImportant?: boolean;
    preserveMediaQueries?: boolean;
    preserveKeyFrames?: boolean;
    preservePseudos?: boolean;
    removeStyleTags?: boolean;
    resolveCSSVariables?: boolean;
    xmlMode?: boolean;
  }

  interface JuiceClient {
    (html: string, options?: JuiceOptions): string;
    inlineContent?(html: string, css: string, options?: JuiceOptions): string;
  }

  const juice: JuiceClient;
  export default juice;
}