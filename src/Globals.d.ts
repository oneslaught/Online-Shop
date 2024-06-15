declare module "*.module.css" {
  const styles: Record<string, string>;
  export = styles;
}

declare module "*.jpg?as=webp" {
  const content: string;
  export default content;
}

declare module "*.png?as=webp" {
  const content: string;
  export default content;
}

declare module "*.svg?as=webp" {
  const content: string;
  export default content;
}

declare module "*.jpeg?as=webp" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}
