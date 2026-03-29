declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | string[] | Element | Element[] | NodeList | any,
      vars?: any
    );
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}