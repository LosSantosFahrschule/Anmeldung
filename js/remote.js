$.asyncForm = function(formData) {

    var ifrName = 'iframe-' + Math.floor((Math.random() * 10000) + 1);

    var method = formData.method ? formData.method : 'get';

    var params = formData.params;

    var action = formData.action;

    var iframe = document.createElement('iframe');

    iframe.setAttribute('name', ifrName);

    iframe.setAttribute('id', ifrName);

    iframe.setAttribute("style", "display:none");
    iframe.setAttribute("id", ifrName);
	
	//iframe.setAttribute("target", "_parent");

    document.body.appendChild(iframe);


    var form = document.createElement('form');

    form.setAttribute('action', action);

    form.setAttribute('method', method);

    form.setAttribute('target', ifrName);

    for (var attr in params) {

        var val = params[attr];

        var ipt = document.createElement('input');

        ipt.setAttribute('type', 'hidden');

        ipt.setAttribute('name', attr);

        ipt.setAttribute('value', val);

        form.appendChild(ipt);

    }

    document.body.appendChild(form);

    form.submit();


    $("#" + ifrName).on("load", function() {

        var html = $("#" + ifrName).contents().find("body").html();

        formData.onLoadFinished(html);

        form.parentNode.removeChild(form);

        iframe.parentNode.removeChild(iframe);

    });
}