/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppAbout {}
  interface AppColorpicker {}
  interface AppColorpickerViewme {
    'type': string;
  }
  interface AppHome {}
  interface AppLinechart {}
  interface AppLinechartViewme {
    'type': string;
  }
  interface AppRoot {}
  interface AppSvgmorph {}
  interface AppSvgmorphViewme {
    'type': string;
  }
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppColorpickerElement extends Components.AppColorpicker, HTMLStencilElement {}
  var HTMLAppColorpickerElement: {
    prototype: HTMLAppColorpickerElement;
    new (): HTMLAppColorpickerElement;
  };

  interface HTMLAppColorpickerViewmeElement extends Components.AppColorpickerViewme, HTMLStencilElement {}
  var HTMLAppColorpickerViewmeElement: {
    prototype: HTMLAppColorpickerViewmeElement;
    new (): HTMLAppColorpickerViewmeElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppLinechartElement extends Components.AppLinechart, HTMLStencilElement {}
  var HTMLAppLinechartElement: {
    prototype: HTMLAppLinechartElement;
    new (): HTMLAppLinechartElement;
  };

  interface HTMLAppLinechartViewmeElement extends Components.AppLinechartViewme, HTMLStencilElement {}
  var HTMLAppLinechartViewmeElement: {
    prototype: HTMLAppLinechartViewmeElement;
    new (): HTMLAppLinechartViewmeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSvgmorphElement extends Components.AppSvgmorph, HTMLStencilElement {}
  var HTMLAppSvgmorphElement: {
    prototype: HTMLAppSvgmorphElement;
    new (): HTMLAppSvgmorphElement;
  };

  interface HTMLAppSvgmorphViewmeElement extends Components.AppSvgmorphViewme, HTMLStencilElement {}
  var HTMLAppSvgmorphViewmeElement: {
    prototype: HTMLAppSvgmorphViewmeElement;
    new (): HTMLAppSvgmorphViewmeElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-colorpicker': HTMLAppColorpickerElement;
    'app-colorpicker-viewme': HTMLAppColorpickerViewmeElement;
    'app-home': HTMLAppHomeElement;
    'app-linechart': HTMLAppLinechartElement;
    'app-linechart-viewme': HTMLAppLinechartViewmeElement;
    'app-root': HTMLAppRootElement;
    'app-svgmorph': HTMLAppSvgmorphElement;
    'app-svgmorph-viewme': HTMLAppSvgmorphViewmeElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout {}
  interface AppColorpicker {}
  interface AppColorpickerViewme {
    'type'?: string;
  }
  interface AppHome {}
  interface AppLinechart {}
  interface AppLinechartViewme {
    'type'?: string;
  }
  interface AppRoot {}
  interface AppSvgmorph {}
  interface AppSvgmorphViewme {
    'type'?: string;
  }

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-colorpicker': AppColorpicker;
    'app-colorpicker-viewme': AppColorpickerViewme;
    'app-home': AppHome;
    'app-linechart': AppLinechart;
    'app-linechart-viewme': AppLinechartViewme;
    'app-root': AppRoot;
    'app-svgmorph': AppSvgmorph;
    'app-svgmorph-viewme': AppSvgmorphViewme;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-about': LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
      'app-colorpicker': LocalJSX.AppColorpicker & JSXBase.HTMLAttributes<HTMLAppColorpickerElement>;
      'app-colorpicker-viewme': LocalJSX.AppColorpickerViewme & JSXBase.HTMLAttributes<HTMLAppColorpickerViewmeElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-linechart': LocalJSX.AppLinechart & JSXBase.HTMLAttributes<HTMLAppLinechartElement>;
      'app-linechart-viewme': LocalJSX.AppLinechartViewme & JSXBase.HTMLAttributes<HTMLAppLinechartViewmeElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-svgmorph': LocalJSX.AppSvgmorph & JSXBase.HTMLAttributes<HTMLAppSvgmorphElement>;
      'app-svgmorph-viewme': LocalJSX.AppSvgmorphViewme & JSXBase.HTMLAttributes<HTMLAppSvgmorphViewmeElement>;
    }
  }
}


