export type Diff<T extends keyof any, U extends keyof any> =
  ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetProps<T extends React.ComponentType<any>> =
  T extends React.StatelessComponent<infer SP> ? SP :
  T extends React.ComponentClass<infer CP> ? CP : never;

export type Subset<B, T extends B> = T;
export type SubsetMapStrict<B extends { [key in keyof T]: any }, T extends B> = T;

// tslint:disable-next-line:ban-types
export type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
export type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

export type ArrayPropertyNames<T> = { [K in keyof T]: T[K] extends any[] ? K : never }[keyof T];

export type NullablePropertyNames<T> = { [K in keyof T]: Extract<T[K], null> extends null ? K : never }[keyof T];

// tslint:disable-next-line:ban-types
export type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

// tslint:disable-next-line:ban-types
export type RequiredProps<T, K extends Extract<keyof T, string>> = Required<Pick<T, K>> & Omit<T, K>;

export type DeepPartial<T> =
  T extends any[] ? IDeepPartialArray<T[number]> :
  T extends object ? DeepPartialObject<T> :
  T;

export interface IDeepPartialArray<T> extends Array<DeepPartial<T>> { }

export type DeepPartialObject<T> = {
  readonly [P in NonFunctionPropertyNames<T>]?: DeepPartial<T[P]>;
};

export type ReturnPromisedType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => Promise<infer R> ? R : ReturnType<T>;
