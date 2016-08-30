const assert = require('assert');
const File = require('vinyl');
const banana = require('../');

describe('gulp-banana', () => {

  it('Should return a compiled css.', (done) => {

    const fakeFile = new File({
      contents:  new Buffer('.foo{bnn-size: 100%;}'),
      path: '/fake_path/file.bnn'
    });

    const stream = banana();

    stream.write(fakeFile);

    stream.on('data', (file) => {

      assert(file.isBuffer());

      const result = file.contents.toString();
      const expect = '.foo {\n  width: 100%;\n  height: 100%;\n}';

      assert.equal(result, expect);

      done();

    });

  });

  it('Should return a compiled css (minify).', (done) => {

    const fakeFile = new File({
      contents:  new Buffer('.foo{bnn-size: 100%;}'),
      path: '/fake_path/file.bnn'
    });

    const stream = banana({compress: true});

    stream.write(fakeFile);

    stream.on('data', (file) => {

      assert(file.isBuffer());

      const result = file.contents.toString();
      const expect = '.foo{width:100%;height:100%;}';

      assert.equal(result, expect);

      done();

    });

  });

});
