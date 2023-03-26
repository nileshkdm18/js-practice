var lodash = require('lodash')

function relative_distance(x1, x2) {
  return Math.abs(x1 - x2) / x1;
}

function confidence(intex_group, mbs_pool, mbs_pools) {
  let d = relative_distance(
    intex_group.balance_at_origination,
    mbs_pool.loan_bal_orig_sum
  );
  let proximity_candidates = mbs_pools.filter(pool =>
    d >= relative_distance(
      intex_group.balance_at_origination,
      pool.loan_bal_orig_sum
    )
  );
  return Number(((1 - d) / proximity_candidates.length).toFixed(4));
}

let intex_groups =[
  { id: 1, balance_at_origination: 100 },
  { id: 2, balance_at_origination: 200 },
  { id: 3, balance_at_origination: 300 },
  { id: 4, balance_at_origination: 400 },
  { id: 5, balance_at_origination: 500 },
  { id: 6, balance_at_origination: 600 },
  { id: 7, balance_at_origination: 700 },
  { id: 8, balance_at_origination: 800 },
  { id: 9, balance_at_origination: 900 },
  { id: 10, balance_at_origination: 1000 },
  { id: 11, balance_at_origination: 1100 },
  { id: 12, balance_at_origination: 1200 },
  { id: 13, balance_at_origination: 1300 },
  { id: 14, balance_at_origination: 1400 },
  { id: 15, balance_at_origination: 1500 },
  { id: 16, balance_at_origination: 1600 },
  { id: 17, balance_at_origination: 1700 },
  { id: 18, balance_at_origination: 1800 },
  { id: 19, balance_at_origination: 1900 },
  { id: 20, balance_at_origination: 2000 },
];

let mbs_pools = [
  { id: 10, loan_bal_orig_sum: 310 },
  { id: 11, loan_bal_orig_sum: 510 },
  { id: 12, loan_bal_orig_sum: 1910 },
  { id: 13, loan_bal_orig_sum: 210 },
  { id: 14, loan_bal_orig_sum: 610 },
  { id: 15, loan_bal_orig_sum: 410 },
  { id: 16, loan_bal_orig_sum: 1110 },
  { id: 17, loan_bal_orig_sum: 910 },
  { id: 18, loan_bal_orig_sum: 110 },
  { id: 19, loan_bal_orig_sum: 810 },
  { id: 20, loan_bal_orig_sum: 710 },
  { id: 21, loan_bal_orig_sum: 1010 },
  { id: 22, loan_bal_orig_sum: 1310 },
  { id: 23, loan_bal_orig_sum: 1710 },
  { id: 24, loan_bal_orig_sum: 1810 },
  { id: 25, loan_bal_orig_sum: 1410 },
  { id: 26, loan_bal_orig_sum: 2010 },
  { id: 27, loan_bal_orig_sum: 1510 },
  { id: 28, loan_bal_orig_sum: 1210 },
  { id: 29, loan_bal_orig_sum: 1610 },
];


function mappedEntry(intex_grp_id, intex_grp_balance, mbs_grp_id, mbs_grp_balance, confidence) {
  return {
    intex_id: intex_grp_id,
    balance_at_origination: intex_grp_balance,
    mbs_id: mbs_grp_id,
    loan_bal_orig_sum: mbs_grp_balance,
    confidence: confidence
  }
}

/**
 * Get auto mapped group
 *
 * Flow :-
  - Order `intex_groups` by balance asc
  - Clone `mbs_pools`
  - Iterate through ordered `_intex_groups`
  - For each intex group find confidence with all mbs groups from cloned `_mbs_pools`
    w.r.t overall  `mbs_pools` list
  - Pick highest confidence mds group (consider as mapped)
  - Make mapping between intex group and picked mbs group
  and add entry to final mapping list
  - remove picked mds group form from `_mbs_pools` list
  - Order `result` mapping by balance desc
 * @param {Array<Object>} intex_groups intex groups
 * @param {Array<Object>} mbs_pools mbs groups
 * @returns {Array<Object>} mapped groups
 */
function getAutoMapping(intex_groups, mbs_pools) {
  let _intex_groups = lodash.orderBy(intex_groups, 'balance_at_origination', 'asc');;
  let _mbs_pools = lodash.cloneDeep(mbs_pools);
  let result = [];
  _intex_groups.forEach(intex_grp => {
    let confidences = [];
    if (_mbs_pools.length > 0) {
      // calculate overall confidences of `intex_grp` with each mbs_grp from `_mbs_pools` list
      //  w.r.t whole pool of Mbs groups `mbs_group`
      _mbs_pools.forEach(mbs_grp => {
        confidences.push({ ...mbs_grp, confidence: confidence(intex_grp, mbs_grp, mbs_pools) })
      });
      // pick highest confident
      let topConfidenceMatch = lodash.maxBy(confidences, 'confidence');
      // add mapped entry to result
      result.push(mappedEntry(
        intex_grp.id,
        intex_grp.balance_at_origination,
        topConfidenceMatch.id,
        topConfidenceMatch.loan_bal_orig_sum,
        topConfidenceMatch.confidence
      ));
      // remove mapped mbs grp form cloned `_mbs_pools`
      lodash.remove(_mbs_pools, { id: topConfidenceMatch.id })
    } else {
      result.push(mappedEntry(intex_grp.id, intex_grp.balance_at_origination, '', '', 0))
    }
  });
  // extra Mbs Groups
  _mbs_pools.forEach(mbs_grp => {
    result.push(mappedEntry('', '', mbs_grp.id, mbs_grp.loan_bal_orig_sum, 0))
  })
  let orderedResult = lodash.orderBy(result, 'balance_at_origination', 'desc');
  return orderedResult;
}

let result = getAutoMapping(intex_groups, mbs_pools);
console.log(result);


// ////////////////////////////////////
// IGNORE BELOW CODE

// let intex_groups = [
//   { id: 1, balance_at_origination: 100 },
//   { id: 2, balance_at_origination: 200 },
//   { id: 3, balance_at_origination: 300 },
//   { id: 4, balance_at_origination: 400 },
//   { id: 5, balance_at_origination: 500 },
// ];

// let mbs_pools = [
//   { id: 'A', loan_bal_orig_sum: 80 },
//   { id: 'B', loan_bal_orig_sum: 180 },
//   { id: 'C', loan_bal_orig_sum: 150 },
//   { id: 'D', loan_bal_orig_sum: 260 },
//   { id: 'E', loan_bal_orig_sum: 90 },
//   { id: 'F', loan_bal_orig_sum: 430 },
// ];

// function getAutoMapping1(intex_groups, mbs_pools) {
//   let _mbs_pools = lodash.cloneDeep(mbs_pools);
//   let result = [];
//   intex_groups.forEach(intex => {
//     let confidences = [];
//     if (_mbs_pools.length > 0) {
//       _mbs_pools.forEach(mbs => {
//         confidences.push({ mbs_id: mbs.id, confidence: confidence(intex, mbs, mbs_pools) })
//       });
//       let topConfidenceMatch = lodash.maxBy(confidences, 'confidence');
//       result.push(mappedEntry(
//         intex.id,
//         intex.balance_at_origination,
//         topConfidenceMatch.mbs_id,
//         topConfidenceMatch.loan_bal_orig_sum,
//         topConfidenceMatch.confidence
//       ))
//       lodash.remove(_mbs_pools, { id: topConfidenceMatch.mbs_id })
//     } else {
//       result.push(mappedEntry(intex.id, intex.balance_at_origination, '', '', 0))
//     }
//   });
//   _mbs_pools.forEach(grp => {
//     result.push(mappedEntry('', '', grp.id, grp.loan_bal_orig_sum, 0))
//   })
//   return result;
// }

// function getAutoMapping2(intex_groups, mbs_pools) {
//   let result = [];
//   intex_groups.forEach(intex => {
//     let confidences = [];
//     if (mbs_pools.length > 0) {
//       mbs_pools.forEach(mbs => {
//         confidences.push({ mbs_id: mbs.id, confidence: confidence(intex, mbs, mbs_pools) })
//       });
//       let filteredConfidences = lodash.pullAllBy(confidences, result, 'mbs_id')
//       let topConfidenceMatch = lodash.maxBy(filteredConfidences, 'confidence');
//       result.push({ intex_id: intex.id, mbs_id: topConfidenceMatch.mbs_id, confidence: topConfidenceMatch.confidence })
//     } else {
//       result.push({ intex_id: intex.id, mbs_id: '', confidence: 0 })
//     }
//   });
//   return result;
// }

// function tps_old(intex_groups, mbs_pools) {
//   let intexConfidences = {};
//   let result = [];
//   intex_groups.forEach(intex => {
//     let confidences = [];
//     mbs_pools.forEach(mbs => {
//       confidences.push({ mbs_id: mbs.id, confidence: confidence(intex, mbs, mbs_pools)})
//     });
//     intexConfidences[intex.id] = lodash.orderBy(confidences, ['confidence'] ,['desc']);
//   });
//   let pickedMbsIds = [];
//   intex_groups.forEach(intex => {
//     let confidences = lodash.pullAllBy(intexConfidences[intex.id], pickedMbsIds, 'mbs_id');
//     let pickedMbs = confidences[0]
//     pickedMbsIds.push({ mbs_id: pickedMbs.mbs_id});
//     result.push({ intex_id: intex.id, mbs_id: pickedMbs.mbs_id, confidence: pickedMbs.confidence })
//   })
//   return result;
// }