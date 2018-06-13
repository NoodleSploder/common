// Copyright 2017-2018 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

const hexToBn = require('@polkadot/util/hex/toBn');
const BN = require('bn.js');

const randomAsHex = require('./asHex');

const BN_53 = new BN(0b11111111111111111111111111111111111111111111111111111);

/**
  @name randomAsNumber
  @signature randomAsNumber (): number
  @summary Creates a random number from random bytes.
  @description
    Returns a random number generated from the secure bytes.
  @example
    import { randomAsNumber } from '@polkadot/util-crypto';

    randomAsNumber() // => <random number>
*/
module.exports = function randomAsNumber (): number {
  return hexToBn(
    randomAsHex(8)
  ).and(BN_53).toNumber();
};
