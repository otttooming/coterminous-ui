export interface PolymorphicElement {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}
