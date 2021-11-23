window.addEventListener('load', function() {
	document.getElementById('userAgent').innerText = window.navigator.userAgent;
	
});
function runUnsafeHashNode() {
	var node = document.getElementById('unsafeHashNode');
	node.className='alert alert-success';
	node.innerHTML='<h3><i class="fa fa-check" aria-hidden="true"></i>	CSP Level 3 Unsafe Hashes Supported</h3>';
}

function runHashTest() {
	window.addEventListener('load', function() {
		var hashNode = document.getElementById('hashNode');
		var jsNode = document.getElementById("jsNode");
		if (jsNode.className == 'alert alert-danger') {
		  return;
		}
		hashNode.className='alert alert-success';
		hashNode.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i> CSP Level 2 Inline Hash Supported</h3>';
	});
}