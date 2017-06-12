'use strict';

describe('FileManager', function() {
  var file;
  var fileManager;

  beforeEach(function() {
    file = { file_name: './railwayChildrenMock.txt'}
    fileManager = new FileManager(file);
  });

  it('initializes with file', function() {
    expect(fileManager.file).toEqual(file);
  });
})
