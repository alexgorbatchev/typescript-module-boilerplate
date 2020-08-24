import { mnemonicToSeedSync } from 'bip39';
import HDKey = require('hdkey');
import AinJs = require('@ainblockchain/ain-js');

export default class Wallet {
  public wallet: HDKey;
  public address: string;
  public ainJs: AinJs.default;

  constructor(mnemonic: string, providerUrl: string) {
    const Ain = AinJs.default;
    const hdkey = HDKey.fromMasterSeed(mnemonicToSeedSync(mnemonic));
    this.wallet = hdkey.derive("m/44'/412'/0'/0/0");
    this.ainJs = new Ain(providerUrl);
  }
}
