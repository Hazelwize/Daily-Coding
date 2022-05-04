// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
    return this <= '9' && this >= '0' && this.length === 1  ? true : false
}