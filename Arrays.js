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
   Write a function that determines if a singly linked list is a palindrome (the same 
   backwards as forwards). Your function should not alter the linked list itself.
   Time Complexity: O(n), Space Complexity: O(n).
*/

function palindrome(head){
  let arr = [];
  let p = head;

  while (p !== null){
    arr.push(p.val);
    p = p.next;
  }

  for (let i = 0; i < Math.ceil(arr.length/2); i++){
    if (arr[i] !== arr[arr.length-1-i])
    return false;
  }
  return true;

}
console.log(palindrome({val: 1, next: {val: 2, next: {val: 1, next: null}}}));
console.log(palindrome({val: 6, next: {val: 3, next: {val: 3, next: {val: 6, next: null}}}}));
console.log(palindrome({val: 2, next: {val: 7, next: {val: 5, next: null}}}));

function isPalindrome(node) {
  let slow = node;
  let fast = node;
  let stack = [];

  while(fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // If fast is falsey, it points to null and the list is even. No action necessary.
  // If fast is truthy, it points to the last node and the list is odd so we can skip the middle slow node.
  if (fast) slow = slow.next;

  while(slow) {
    if (stack[stack.length-1] === slow.val) {
      stack.pop();
      slow = slow.next;
    } else 
      return false;
  }
  return true;
}