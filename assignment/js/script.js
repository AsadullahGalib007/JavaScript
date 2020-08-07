function billingFunction() {
	if (document.getElementById('same').checked){
		var nameData = document.getElementById('shippingName').value;
		var zipData = document.getElementById('shippingZip').value;

		document.getElementById('billingName').setAttribute('value', nameData);
		document.getElementById('billingZip').setAttribute('value', zipData);
	}

	else{
		document.getElementById('billingName').setAttribute('value', "");
		document.getElementById('billingZip').setAttribute('value', "");
	}
}