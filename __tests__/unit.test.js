// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// MATCHES VALID PHONE NUMBER
test('phone number return true #1', () => {
    expect(functions.isPhoneNumber('650-670-5125')).toBe(true);
});

test('phone number return true #2', () => {
    expect(functions.isPhoneNumber('(800) 588-2300')).toBe(true);
});

test('phone number return false #1', () => {
    expect(functions.isPhoneNumber('96191167777700')).toBe(false);
});

test('phone number return false #2', () => {
    expect(functions.isPhoneNumber('100')).toBe(false);
});

// MATCHES VALID EMAILS
test('email return true #1', () => {
    expect(functions.isEmail('katara@gmail.com')).toBe(true);
});

test('email return true #2', () => {
    expect(functions.isEmail('sokkaswords@gmail.com')).toBe(true);
});

test('email return false #1', () => {
    expect(functions.isEmail('aang.the@vatar@com')).toBe(false);
});

test('email return false #2', () => {
    expect(functions.isEmail('myhonoratfiredotcom')).toBe(false);
});

  /**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
// VALID PASSWORD
test('password return true #1', () => {
    expect(functions.isStrongPassword('tophrules')).toBe(true);
});

test('password return true #2', () => {
    expect(functions.isStrongPassword('Al13n2')).toBe(true);
});

test('password return false #1', () => {
    expect(functions.isStrongPassword('00PS')).toBe(false);
});

test('password return false #2', () => {
    expect(functions.isStrongPassword('wethepeopleinordertoformamoreperfectunion')).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
// VALID DATE
test('date return true #1', () => {
    expect(functions.isDate('08/04/2000')).toBe(true);
});

test('date return true #2', () => {
    expect(functions.isDate('7/4/1776')).toBe(true);
});

test('date return false #1', () => {
    expect(functions.isDate('08/04/00')).toBe(false);
});

test('date return false #2', () => {
    expect(functions.isDate('2000/08/4')).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('hex return true #1', () => {
    expect(functions.isHexColor('#2BDC9D')).toBe(true);
});

test('hex return true #2', () => {
    expect(functions.isHexColor('#fc9')).toBe(true);
});

test('hex return false #1', () => {
    expect(functions.isHexColor('redbluegreen')).toBe(false);
});

test('hex return false #2', () => {
    expect(functions.isHexColor('5#4#33')).toBe(false);
});

