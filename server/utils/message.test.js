var expect = require('expect');
var {
  generateMessage,
  generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Danilo';
    var text = 'Messaggio di prova';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    var from = 'Danilo';
    var latitude = 44;
    var longitude = 7;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url
    });
  });
});
