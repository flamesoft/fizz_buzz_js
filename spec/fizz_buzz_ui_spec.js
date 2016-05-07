describe('Partial sample', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('fizz_buzz_partial.html');
    $.holdReady(false);
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("displays correct number by input", function() {

    it("return fizz buzz for input 30", function() {
      $('#text').val('30');
      $('#click_me').trigger('click');
      expect($('#display_message').text()).toBe('fizz buzz');
    });

    it("return buzz for input 5", function() {
      $('#text').val('5');
      $('#click_me').trigger('click');
      expect($('#display_message').text()).toBe('buzz');
    });

  });
});
