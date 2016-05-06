describe("fizz_buzz", function () {
  var subject;
    beforeEach(function () {
        /* ... Set up your test ... */
        subject = new Fizz_buzz();
    });

    afterEach(function () {
        /* ... Tear it down ... */
    });
    it("returns 'fizz buzz' if number is divisible by 15", function (){
        expect(subject.fizz_buzz(15)).toEqual('fizz buzz');
    });
    it("returns 'fizz' if number is divisible by 3", function () {
        expect(subject.fizz_buzz(33)).toEqual('fizz');
    });
    it("returns 'buzz' if number is divisible by 5", function () {
        expect(subject.fizz_buzz(10)).toEqual('buzz');
    });
    it("returns the same number if number is not divisible by 3,5 or 15", function () {
        expect(subject.fizz_buzz(14)).toEqual('14');
    });

});
