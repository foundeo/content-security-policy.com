window.addEventListener('load', function() {
	document.getElementById('userAgent').innerText = window.navigator.userAgent;
	
});
function runUnsafeHashNode() {
	var node = document.getElementById('unsafeHashNode');
	node.className='alert alert-success';
	node.innerHTML='<h3><i class="fa fa-check" aria-hidden="true"></i>	CSP Level 3 Unsafe Hashes Supported</h3>';
}