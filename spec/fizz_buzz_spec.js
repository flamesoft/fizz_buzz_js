describe("fizz_buzz", function () {
  var subject;
    beforeEach(function () {
        /* ... Set up your test ... */
        subject = new Fizz_buzz();
    });

    afterEach(function () {
        /* ... Tear it down ... */
    });

    it("returns 'fizz' if number is divisible by 3", function () {
        expect(subject.fizz_buzz(33)).toEqual('fizz');
    });
    it("returns 'buzz' if number is divisible by 5", function () {
        expect(subject.fizz_buzz(10)).toEqual('buzz');
    });
});
