export interface IRequester {
  get<T>(url: string): Promise<T>
}