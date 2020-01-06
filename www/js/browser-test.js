window.addEventListener('load', function() {
	document.getElementById('userAgent').innerText = window.navigator.userAgent;
	
});
function runUnsafeHashNode() {
	var node = document.getElementById('unsafeHashNode');
	node.className='alert alert-success';
	node.innerText='<h3><span class="glyphicon glyphicon-ok"></span> CSP Level 3 Unsafe Hashes Supported</h3>';
}