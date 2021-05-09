// Created By Team TERL
// Version: 1.4
// Traders Education TERL LTD 2017

(function (window) {

// var scripts = document.getElementsByTagName('script');
var scripts = document.querySelector('script[src="https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/htmlWidgets.js"]');
var urlWidgets = 'https://terl3.com/';

// for (var i = 0; i < scripts.length; i++) {

    var script = scripts;

    if(typeof jQuery == 'undefined') {
        var headTag = document.getElementsByTagName("head")[0];
        var jqTag = document.createElement('script');
        jqTag.type = 'text/javascript';
        jqTag.src = 'https://cdn1.terl3.com/files/assets/gui3/js/jquery-3.1.1.min.js';
        headTag.appendChild(jqTag);
    }

    // you might consider using a regex here
    if (script.getAttribute('src') == 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/htmlWidgets.js' || 
    	script.getAttribute('src') == 'http://d2ikij6pcyb4st.cloudfront.net/files/assets/js/htmlWidgets.js' || 
        script.getAttribute('src') == 'http://cdn1.terl3.com/files/assets/js/htmlWidgets.js' || 
        script.getAttribute('src') == 'https://cdn1.terl3.com/files/assets/js/htmlWidgets.js' ||
    	script.getAttribute('src') == 'https://traders-center.s3.amazonaws.com/files/assets/js/htmlWidgets.js') {
        // we've got a match
        thisScriptElement = script,
        productUid = script.getAttribute('data-product-uid'),
        clientUid = script.getAttribute('data-client-uid'),
        jumpid = script.getAttribute('data-jump'),
        jumpid2 = script.getAttribute('data-jump2'),
        jumpWebinar = script.getAttribute('data-webinar'),
        jumpGlossary = script.getAttribute('data-glossary'),
        jumpSignals = script.getAttribute('data-signals'),
        jumpCalendar = script.getAttribute('data-calendar'),
        jumpNews = script.getAttribute('data-news'),
        WebinarUserID = script.getAttribute('data-user-id'),
        WebinarUserName = script.getAttribute('data-user-name'),
        lang = script.getAttribute('data-lang'),
        dataget = script.getAttribute('data-get'),
        ebook = script.getAttribute('data-ebook'),
        link = script.getAttribute('data-link'),
        DataHeight = script.getAttribute('data-height'),
        formatIframe = script.getAttribute('data-format'),
        deposit = script.getAttribute('data-deposit'),
        style = script.getAttribute('data-style'),
        parameterPath = script.getAttribute('data-parameters'),

		jumsStyle = jumpid != null ? 'jump3' : 'jump2';
        var min = DataHeight != null ? DataHeight : "800";
        var lostHieght = formatIframe != null ? formatIframe : 'lowestElement';
		
        // Base URLS
        stages = style != null ? style : 'stage1',
        baseID = urlWidgets + stages + '/'+ lang + '/' + clientUid + '/' + productUid;
        baseIDEbook = urlWidgets + 'jump2/'+ lang + '/' + clientUid + '/' + productUid + '/ebook/' + ebook;
        // Jump URLS
        baseJump2 = urlWidgets + '/' + jumsStyle + '/' + lang + '/' + clientUid + '/' + productUid;
        baseIDEbook = urlWidgets + '/' + jumsStyle + '/'+ lang + '/' + clientUid + '/' + productUid + '/ebook/' + ebook;
        baseJumpWebinar = urlWidgets + '/' + jumsStyle + '/'+ lang + '/' + clientUid + '/' + productUid + '/webinar';
        basejumpGlossary = urlWidgets + '/' + jumsStyle + '/'+ lang + '/' + clientUid + '/' + productUid + '/glossary';
        basejumpSignals = urlWidgets + '/' + jumsStyle + '/'+ lang + '/' + clientUid + '/' + productUid + '/signals';
        basejumpCalander = urlWidgets + '/' + jumsStyle + '/'+ lang + '/' + clientUid + '/' + productUid + '/calander';
        basejumpNews = urlWidgets + '/' + jumsStyle + '/'+ lang + '/' + clientUid + '/' + productUid + '/news';

        // Jump3 URLS
        baseJump3 = urlWidgets + '/' + jumsStyle + '/' + lang + '/' + clientUid + '/' + productUid;
        
        function appendScript(target, attributes, code, sync, onload) {
            var scriptNode = document.createElement('script');

            for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            scriptNode.setAttribute(attr[0], attr[1]);
            }

            if (code) {
            scriptNode.innerHTML = code;
            }

            if (sync) {
            scriptNode.async = false;
            } else {
            scriptNode.async = true;
            }

            if (onload) {
            scriptNode.onload = onload;
            }

            target.appendChild(scriptNode);
            
        }

        function fullEducation(url,link,deposit) {

            var parent = thisScriptElement.parentNode;
            var paramstersP = parameterPath !== null ? parameterPath : '';
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url + paramstersP +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" style=\"width: 1px;min-width: 100%;*width: 100%;\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "grow",resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            if(WebinarUserID != null || WebinarUserName != null) {
                appendScript(div, [['type', 'text/javascript'], ['data-user-id', WebinarUserID], ['id', 'tradelive'], ['data-user-name', WebinarUserName], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.traderlive.js?host=' + document.domain]]);
            }

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);

            // var education = new Object();
            // var urlparameter = link != null ? "?urlparmeter=" + link + "" : "";
            // var depositparamter = deposit != null ? "?depositparmeter=" + deposit + "" : "";

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url +'/'+ urlparameter + depositparamter + '" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false,heightCalculationMethod : "documentElementScroll",minHeight: "985"},"#iframeducation");</script>');
            // document.write('<script type=\"text/javascript\" data-url=\"' + document.domain + '\" id=\"techeker\" data-page=\"'+ document.location.href +'\" data-client=\"' + clientUid + '\" src=\"https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain + '\"></script>');

            // if(WebinarUserID != null || WebinarUserName != null) {
            // 	document.write('<script type=\"text/javascript\" data-user-id=\"' + WebinarUserID + '\" id=\"tradelive\" data-user-name=\"'+ WebinarUserName +'\" data-client=\"' + clientUid + '\" src=\"https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.traderlive.js?host=' + document.domain + '\"></script>');
            // }
            
            // document.write('</div>');

            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }

        function fullEducationEbook(url) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\"  scrolling=\"no\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');
            // document.write('</div>');

            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }

        function jumplessons(url,jump) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url+'/course/'+jump+'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url+'/course/'+jump+'\" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');
            // document.write('</div>');
            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }

        function jumplessons2(url,jump,dataget) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url+'/course/'+jump+'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url+'/course/'+jump+'\" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');
            // document.write('</div>');


            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }

        function JumpWebinars(url) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            if(WebinarUserID != null || WebinarUserName != null) {
                appendScript(div, [['type', 'text/javascript'], ['data-user-id', WebinarUserID], ['id', 'tradelive'], ['data-user-name', WebinarUserName], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.traderlive.js?host=' + document.domain]]);
            }

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);            

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');

            // if(WebinarUserID != null || WebinarUserName != null) {
            // 	document.write('<script type=\"text/javascript\" data-user-id=\"' + WebinarUserID + '\" id=\"tradelive\" data-user-name=\"'+ WebinarUserName +'\" data-client=\"' + clientUid + '\" src=\"https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.traderlive.js?host=' + document.domain + '\"></script>');
            // }

            // document.write('</div>');


            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }

        function JumpGlossary(url) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);  

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');
            // document.write('</div>');


            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }

        function JumpSignals(url) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);             

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');
            // document.write('</div>');


            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }
        
        function fJumpCalander(url) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);             

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');
            // document.write('</div>');


            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }

        function fJumpNews(url) {

            var parent = thisScriptElement.parentNode;
            var div = document.createElement('div');
            div.id = 'education';
            div.className = 'eudcation';
            div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
            div.innerHTML = '<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

            appendScript(div, [['type', 'text/javascript'],['src', 'https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js?8600']], null, true, function() {
                iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "documentElementScroll",minHeight: min,resizeFrom: "child"},"#iframeducation");
            });
            appendScript(div, [['type', 'text/javascript'], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

            parent.appendChild(div);

            thisScriptElement.parentNode.removeChild(thisScriptElement);             

            // var education = new Object();

            // document.write('<div id=\"education" class="eudcation\">');
            // document.write('<iframe src=\"'+ url +'\" frameborder=\"0\" width=\"100%\" style=\"width: 1px;min-width: 100%;*width: 100%;max-height: 1300px !important;\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>');
            // document.write('<script type=\"text/javascript\" src=\"https://d3v2hnl706774i.cloudfront.net/html/iframeResizer.min.js\"></script>');
            // document.write('<script type=\"text/javascript\">iFrameResize({log: false,enablePublicMethods: false,checkOrigin:false, heightCalculationMethod : "' + lostHieght + '",minHeight: "'+ min +'"},"#iframeducation");</script>');
            // document.write('</div>');


            // thisScriptElement.parentNode.removeChild(thisScriptElement);

        }
        
        if(jumpid || jumpid2 != null) {

            var course = jumpid != null ? jumpid : jumpid2;    
            var stage = jumsStyle == 'jump3' ? baseJump3 : baseJump2;
            jumplessons(stage,course,function() {
                window.teFirstRun = false;
            });

        } else if(ebook != null) {

            fullEducationEbook(baseIDEbook,function() {
                window.teFirstRun = false;
            }); 

        } else if(jumpWebinar != null) {

            JumpWebinars(baseJumpWebinar,function() {
                window.teFirstRun = false;
            });

        } else if(jumpGlossary != null) {

            JumpGlossary(basejumpGlossary,function() {
                window.teFirstRun = false;
            });

        } else if(jumpSignals != null) {

            JumpSignals(basejumpSignals,function() {
                window.teFirstRun = false;
            });

        } else if(jumpCalendar != null) {

            fJumpCalander(basejumpCalander,function() {
                window.teFirstRun = false;
            });

        }  else if(jumpNews != null) {

            fJumpNews(basejumpNews,function() {
                window.teFirstRun = false;
            });

        } else {

            fullEducation (baseID,link,deposit,function() {
                window.teFirstRun = false;
            });

        }

    } 
// }

}(window));