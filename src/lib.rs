#![feature(proc_macro)]

#[macro_use]
extern crate stdweb;

use stdweb::js_export;

pub struct Fibonacci {
    curr: u32,
    next: u32,
}

impl Iterator for Fibonacci {
    type Item = u32;
    fn next(&mut self) -> Option<u32> {
        let new_next = self.curr + self.next;

        self.curr = self.next;
        self.next = new_next;

        Some(self.curr)
    }
}

// Returns a fibonacci sequence generator
#[js_export]
fn fibonacci(size: usize) -> Vec<u32> {
    let mut ret = Vec::new();
    let f = Fibonacci { curr: 1, next: 1 };

    for i in f.take(size) {
        ret.push(i);
    }

    ret
}

// A simple adder
#[js_export]
fn add(a: u32, b: u32) -> u32 {
    a + b
}