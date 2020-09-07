class Email {
  constructor(subject, body) {
    this.subject = subject;
    this.body = body;
  }
}

class SpamDetector {
  isSpam(email) {
    const body = email.body.toLowerCase();
    const subject = email.subject.toLowerCase();
    const forbidenWords = ['viagra', 'offer', 'free', 'business proposal'];
    const uppercaseLetters = (email.body.match(/[A-Z]/g) || []).length;
    const totalLetters = email.body.length;
    const percentage = Math.round((uppercaseLetters / totalLetters) * 60);

    if (!subject) {
      return true;
    } else if (subject.includes('hello') && email.subject.length == 5) {
      return true;
    } else if (body.includes(forbidenWords)) {
      return true;
    } else if (percentage >= 60) {
      return true;
    } else {
      return false;
    }
  }
}

const emailFromOldFriend = new Email(
  'Hello MY REIEND TIAGO',
  'Long time no see, when should we hang out again??'
);

const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend));
