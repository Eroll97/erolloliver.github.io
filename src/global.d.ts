export {};

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "meshline" {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    constructor();
    setPoints(points: Float32Array | number[]): void;
  }
  export class MeshLineMaterial extends THREE.Material {
    constructor(options?: {
      color?: THREE.Color | string | number;
      lineWidth?: number;
      opacity?: number;
      transparent?: boolean;
      [key: string]: unknown;
    });
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        points?: Float32Array | number[];
        [key: string]: unknown;
      };
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        color?: THREE.Color | string | number;
        lineWidth?: number;
        opacity?: number;
        transparent?: boolean;
        [key: string]: unknown;
      };
      // Add other Three.js elements you might use
      group: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      mesh: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      geometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      material: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        object?: THREE.Object3D;
        [key: string]: unknown;
      };
    }
  }
}
