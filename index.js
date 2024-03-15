document.getElementById('fileInput').addEventListener('change', function (e) {
    var fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
  
    var files = e.target.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var row = fileList.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.textContent = i + 1;
      cell2.textContent = file.name;
      var downloadBtn = document.createElement('button');
      downloadBtn.textContent = 'Download';
      downloadBtn.onclick = function () {
        var url = URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      };
      cell3.appendChild(downloadBtn);
    }
  });
  
  document.getElementById('addFileBtn').addEventListener('click', function () {
    document.getElementById('fileModal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('fileModal').style.display = 'none';
  });
  
  document.getElementById('uploadBtn').addEventListener('click', function () {
    var uploadFile = document.getElementById('uploadFileInput').files[0];
    var row = document.getElementById('fileList').insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.textContent = document.querySelectorAll('#fileList tr').length;
    cell2.textContent = uploadFile.name;
    var downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download';
    downloadBtn.onclick = function () {
      var url = URL.createObjectURL(uploadFile);
      var a = document.createElement('a');
      a.href = url;
      a.download = uploadFile.name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    };
    cell3.appendChild(downloadBtn);
    document.getElementById('fileModal').style.display = 'none';
  });
  