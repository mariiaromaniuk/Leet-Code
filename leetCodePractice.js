/* 
   Given two binary trees, write a function to check if they are the same or not.
   Two binary trees are considered the same if they are structurally identical 
   and the nodes have the same value.
*/

var isSameTree = function(p, q) {
    if (p == null && q == null) 
        return true;
    if (q == null || p == null) 
        return false;
    if (p.val != q.val) 
        return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};


// ---------------------------------------------------------------------------------------- //
/* 
   Say you have an array for which the ith element is the price of a given stock on day i.
   If you were only permitted to complete at most one transaction (i.e., buy one and sell 
   one share of the stock), design an algorithm to find the maximum profit.
   Note that you cannot sell a stock before you buy one.
*/

const maxProfit = function(prices) {
    // intialize a variable to keep count of the current highest profit
    let maxProfit = 0;
    // we can also initialize min at prices[0] because the starting value 
    // of min will most likely be reassigned when we see a lower price-point
    let min = Infinity; 
    for (let i = 0; i < prices.length; i++){
        // if the current price is less than the lowest 
        // price point we've seen so far, reassign the min
        if (prices[i] < min){
            min = prices[i]
        }
        let profit = prices[i] - min
        if (profit > maxProfit){
                maxProfit = profit
        }
    }
    return maxProfit
};


// ---------------------------------------------------------------------------------------- //
/*
   Given two strings s and t which consist of only lowercase letters.
   String t is generated by random shuffling string s and then add one more letter at a random position.
   Find the letter that was added in t.
*/

var findTheDifference = function(s, t) {
    // 'absd' => 'abcda'
    // s = { a:1, b:0, c:0, d:0 }
    let hash = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        hash[char] = (hash[char]) ? ++hash[char] : 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (hash[char])  // true if >= 1
            --hash[char];
        else 
            return char;
    } 
};


// ---------------------------------------------------------------------------------------- //
