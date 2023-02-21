export type MappedToType<Type, newT>  = {
  [Property in keyof Type]: newT
}