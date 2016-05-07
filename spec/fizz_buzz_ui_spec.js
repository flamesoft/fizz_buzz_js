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

  describe("displays fizz when input is divisible by 3", function() {

    it("when button is clicked", function() {
      $('#text').val('3');
      $('#click_me').trigger('click');
      expect($('#display_message').text()).toBe('fizz');
    });
  });
});
