// Node class to represent a node in the linked list
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

// Function to reverse a singly linked list (beginner level)
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  // Traverse the list, reversing pointers
  while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }

  // Update the new head of the reversed list
  head = prev;
  return head;
}

// Example usage
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Reverse the linked list
head = reverseLinkedList(head);

// Print the reversed list
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}