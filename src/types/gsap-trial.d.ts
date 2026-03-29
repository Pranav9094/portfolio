declare module "gsap/SplitText" {
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

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    scrollTo(position: number): void;
    paused(value?: boolean): boolean | this;
    kill(): void;
  }
}