import { decorate, observable, action } from "mobx";
import { parse } from "bowser";
import { Parser } from "bowser";
import { ClientInit } from "../utils/types";

class ClientStore {
  isReady: boolean;
  displayName: string;
  browser: Parser.ParsedResult | null;

  constructor() {
    this.isReady = false;
    this.displayName = "";
    this.browser = null;
  }

  load({ name, ua }: ClientInit) {
    this.displayName = name;
    this.browser = parse(ua);

    this.isReady = true;
  }
}
decorate(ClientStore, {
  // @ts-ignore: to use private accessor
  isReady: observable,
  displayName: observable,
  browser: observable.ref,
  load: action
});

export default ClientStore;
