var Bar = require('@nathanjd/bar');

function Foo() {

}

Foo.prototype.toHTML = function () {
    var bar = new Bar();

    return '<div class="foo">' +
        '<h2>Foo v1.0.0<h2>' +
        bar.toHTML() +
    '</div>';
};

module.exports = Foo;
