/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AiPopover {}
  interface AppCanvas {
    'addImageToCanvas': (imageString: string, width: number, height: number) => Promise<unknown>;
    'clearCanvas': () => Promise<void>;
    'clearGrid': () => Promise<unknown>;
    'color': string;
    'dragMode': boolean;
    'drawGrid': () => Promise<unknown>;
    'exportToOneNote': () => Promise<void>;
    'liveConnect': () => Promise<void>;
    'mode': string;
    'saveCanvas': (name: string) => Promise<void>;
    'savedDrawing': string | null;
    'shareCanvas': () => Promise<void>;
    'writeNativeFile': (fileHandler: any) => Promise<void>;
  }
  interface AppControls {}
  interface AppHome {
    'name': string;
    'username': string;
  }
  interface AppImages {}
  interface AppIntro {}
  interface AppProfile {
    'name': string;
  }
  interface AppRoot {}
  interface AppSettings {}
  interface ColorModal {}
  interface ContactsModal {}
  interface DrivePreview {
    'imageInfo': any;
  }
  interface ImagePopover {}
  interface InstallModal {
    'installEvent': any;
  }
}

declare global {


  interface HTMLAiPopoverElement extends Components.AiPopover, HTMLStencilElement {}
  var HTMLAiPopoverElement: {
    prototype: HTMLAiPopoverElement;
    new (): HTMLAiPopoverElement;
  };

  interface HTMLAppCanvasElement extends Components.AppCanvas, HTMLStencilElement {}
  var HTMLAppCanvasElement: {
    prototype: HTMLAppCanvasElement;
    new (): HTMLAppCanvasElement;
  };

  interface HTMLAppControlsElement extends Components.AppControls, HTMLStencilElement {}
  var HTMLAppControlsElement: {
    prototype: HTMLAppControlsElement;
    new (): HTMLAppControlsElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppImagesElement extends Components.AppImages, HTMLStencilElement {}
  var HTMLAppImagesElement: {
    prototype: HTMLAppImagesElement;
    new (): HTMLAppImagesElement;
  };

  interface HTMLAppIntroElement extends Components.AppIntro, HTMLStencilElement {}
  var HTMLAppIntroElement: {
    prototype: HTMLAppIntroElement;
    new (): HTMLAppIntroElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSettingsElement extends Components.AppSettings, HTMLStencilElement {}
  var HTMLAppSettingsElement: {
    prototype: HTMLAppSettingsElement;
    new (): HTMLAppSettingsElement;
  };

  interface HTMLColorModalElement extends Components.ColorModal, HTMLStencilElement {}
  var HTMLColorModalElement: {
    prototype: HTMLColorModalElement;
    new (): HTMLColorModalElement;
  };

  interface HTMLContactsModalElement extends Components.ContactsModal, HTMLStencilElement {}
  var HTMLContactsModalElement: {
    prototype: HTMLContactsModalElement;
    new (): HTMLContactsModalElement;
  };

  interface HTMLDrivePreviewElement extends Components.DrivePreview, HTMLStencilElement {}
  var HTMLDrivePreviewElement: {
    prototype: HTMLDrivePreviewElement;
    new (): HTMLDrivePreviewElement;
  };

  interface HTMLImagePopoverElement extends Components.ImagePopover, HTMLStencilElement {}
  var HTMLImagePopoverElement: {
    prototype: HTMLImagePopoverElement;
    new (): HTMLImagePopoverElement;
  };

  interface HTMLInstallModalElement extends Components.InstallModal, HTMLStencilElement {}
  var HTMLInstallModalElement: {
    prototype: HTMLInstallModalElement;
    new (): HTMLInstallModalElement;
  };
  interface HTMLElementTagNameMap {
    'ai-popover': HTMLAiPopoverElement;
    'app-canvas': HTMLAppCanvasElement;
    'app-controls': HTMLAppControlsElement;
    'app-home': HTMLAppHomeElement;
    'app-images': HTMLAppImagesElement;
    'app-intro': HTMLAppIntroElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'app-settings': HTMLAppSettingsElement;
    'color-modal': HTMLColorModalElement;
    'contacts-modal': HTMLContactsModalElement;
    'drive-preview': HTMLDrivePreviewElement;
    'image-popover': HTMLImagePopoverElement;
    'install-modal': HTMLInstallModalElement;
  }
}

declare namespace LocalJSX {
  interface AiPopover {}
  interface AppCanvas {
    'color'?: string;
    'dragMode'?: boolean;
    'mode'?: string;
    'savedDrawing'?: string | null;
  }
  interface AppControls {
    'onAllImages'?: (event: CustomEvent<any>) => void;
    'onClearCanvas'?: (event: CustomEvent<any>) => void;
    'onColorSelected'?: (event: CustomEvent<any>) => void;
    'onDoGrid'?: (event: CustomEvent<any>) => void;
    'onDoShare'?: (event: CustomEvent<any>) => void;
    'onDragMode'?: (event: CustomEvent<any>) => void;
    'onEraserMode'?: (event: CustomEvent<any>) => void;
    'onExport'?: (event: CustomEvent<any>) => void;
    'onLive'?: (event: CustomEvent<any>) => void;
    'onPenMode'?: (event: CustomEvent<any>) => void;
    'onSaveCanvas'?: (event: CustomEvent<any>) => void;
  }
  interface AppHome {
    'name'?: string;
    'username'?: string;
  }
  interface AppImages {}
  interface AppIntro {}
  interface AppProfile {
    'name'?: string;
  }
  interface AppRoot {}
  interface AppSettings {}
  interface ColorModal {}
  interface ContactsModal {}
  interface DrivePreview {
    'imageInfo'?: any;
  }
  interface ImagePopover {}
  interface InstallModal {
    'installEvent'?: any;
  }

  interface IntrinsicElements {
    'ai-popover': AiPopover;
    'app-canvas': AppCanvas;
    'app-controls': AppControls;
    'app-home': AppHome;
    'app-images': AppImages;
    'app-intro': AppIntro;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'app-settings': AppSettings;
    'color-modal': ColorModal;
    'contacts-modal': ContactsModal;
    'drive-preview': DrivePreview;
    'image-popover': ImagePopover;
    'install-modal': InstallModal;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ai-popover': LocalJSX.AiPopover & JSXBase.HTMLAttributes<HTMLAiPopoverElement>;
      'app-canvas': LocalJSX.AppCanvas & JSXBase.HTMLAttributes<HTMLAppCanvasElement>;
      'app-controls': LocalJSX.AppControls & JSXBase.HTMLAttributes<HTMLAppControlsElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-images': LocalJSX.AppImages & JSXBase.HTMLAttributes<HTMLAppImagesElement>;
      'app-intro': LocalJSX.AppIntro & JSXBase.HTMLAttributes<HTMLAppIntroElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-settings': LocalJSX.AppSettings & JSXBase.HTMLAttributes<HTMLAppSettingsElement>;
      'color-modal': LocalJSX.ColorModal & JSXBase.HTMLAttributes<HTMLColorModalElement>;
      'contacts-modal': LocalJSX.ContactsModal & JSXBase.HTMLAttributes<HTMLContactsModalElement>;
      'drive-preview': LocalJSX.DrivePreview & JSXBase.HTMLAttributes<HTMLDrivePreviewElement>;
      'image-popover': LocalJSX.ImagePopover & JSXBase.HTMLAttributes<HTMLImagePopoverElement>;
      'install-modal': LocalJSX.InstallModal & JSXBase.HTMLAttributes<HTMLInstallModalElement>;
    }
  }
}


