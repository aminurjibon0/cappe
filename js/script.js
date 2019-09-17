//const fixedContact = document.querySelector('.fixed_contact');
//const contactInfo = document.querySelector('.contact_info');
//fixedContact.addEventListener('click', function() {
//	if(contactInfo.style.display == 'block') {
//		contactInfo.style.display = 'none';
//	} else {
//		contactInfo.style.display = 'block';
//	}
//});
$(document).ready(function() {
	$('.fixed_contact').click(function() {
		$('.contact_info').toggle(300);
	})
});