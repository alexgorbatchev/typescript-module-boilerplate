import firebase from './common/firebase';
import Wallet from './common/wallet';
import { NetworkType } from './common/types';

export default class Connect {
  public database: firebase.database.Database;
  public wallet: Wallet;

  constructor(mnemonic: string, network: NetworkType) {
    const providerUrl =
      network === NetworkType.MAINNET ? 'http://node.ainetwork.ai:8080' : 'http://node.ainetwork.ai:8080';
    this.wallet = new Wallet(mnemonic, providerUrl);
  }
}
