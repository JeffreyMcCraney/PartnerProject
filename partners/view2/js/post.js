<script type="text/javascript">

function getUrlVars() {
var vars = [], hash;
var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
for (var i = 0; i < hashes.length; i++) {
hash = hashes[i].split('=');
vars.push(hash[0]);
vars[hash[0]] = hash[1];
}
return vars;
}

$('#Submit').on('click', function(e) {
e.preventDefault()

if (!$('#FirstName').val() ||
!$('#LastName').val() ||
!$('#Email').val() ||
!$('#Phone').val()) {

$('#Error').show();
return;
}

var lead = {
name: {
first: $('#FirstName').val(),
last: $('#LastName').val()
},
address: {
postalCode: $('#ZIP').val()
},
contact: {
email: $('#Email').val(),
phone: $('#Phone').val(),
},
meta: {
company: 'Not Applicable',
source: 'GoSolar',
campaign: $('#Campaign').val(),
recordType: '012G00000010diKIAQ',
}
};

$.ajax({
method: 'POST',
data: lead,
url: 'http://kobolv2.vivintsolar.com/leads',
complete: function(data, textStatus, jqXhr) {
$('#LeadForm').hide();
$('#Error').hide();
$('#Confirmation').show();
}
});
});
</script>