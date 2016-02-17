$(document).on('ready',function(){
	$('#payNow').on('click',function(){
		$('#payNow').prop('disabled', true);
		$('#payNow i').removeClass('fa-cc').addClass('fa-circle-o-notch fa-spin');
		Stripe.card.createToken({
			cvc: $('#cccvc').val(),
			number: $('#ccnumber').val(),
			exp: $('#ccexp').val()
		}, stripeResponseHandler);
		
	});
});
function stripeResponseHandler(status, response) {
	var $form = $('#paymentFrom');
	if (response.error) {
		// Show the errors on the form
		$form.find('.payment-errors').text(response.error.message);
		//$form.find('button').prop('disabled', false);
	} else {
		// response contains id and card, which contains additional card details
		var token = response.id;
		// Insert the token into the form so it gets submitted to the server
		//$form.append($('<input type="hidden" name="stripeToken" />').val(token));
		// and submit
		//$form.get(0).submit();
		$('#payNow').prop('disabled', false);
		$('#payNow i').removeClass('fa-circle-o-notch fa-spin').addClass('fa-cc');
		
		alert(token);
  }
}